import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import StudyFlowChat from "../components/StudyFlowChat";

const mockSendMessage = vi.fn();
const mockStop = vi.fn();
const mockRegenerate = vi.fn();

let mockChatState = {
  messages: [] as any[],
  sendMessage: mockSendMessage,
  status: "ready",
  stop: mockStop,
  error: undefined as Error | undefined,
  regenerate: mockRegenerate,
};

vi.mock("@ai-sdk/react", () => ({
  useChat: () => mockChatState,
}));

vi.mock("../components/AnimatedSendButton", () => ({
  default: ({
    disabled,
    onRetry,
    onStop,
  }: {
    disabled: boolean;
    isLoading: boolean;
    hasError: boolean;
    onRetry: () => void;
    onStop: () => void;
  }) => (
    <button
      type="submit"
      disabled={disabled}
      onClick={(event) => {
        event.preventDefault();

        if (mockChatState.error) {
          onRetry();
        } else if (mockChatState.status === "streaming") {
          onStop();
        }
      }}
    >
      Send
    </button>
  ),
}));

describe("StudyFlowChat", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockChatState = {
      messages: [],
      sendMessage: mockSendMessage,
      status: "ready",
      stop: mockStop,
      error: undefined,
      regenerate: mockRegenerate,
    };
  });

  it("renders the empty chat state", () => {
    render(<StudyFlowChat />);

    expect(
      screen.getByRole("heading", {
        name: "Study Flow AI",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Ready to help you study"),
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Ask a study question..."),
    ).toBeInTheDocument();
  });

  it("renders a user text message", () => {
    mockChatState.messages = [
      {
        id: "user-1",
        role: "user",
        parts: [
          {
            type: "text",
            text: "Explain Newton's laws",
          },
        ],
      },
    ];

    render(<StudyFlowChat />);

    expect(screen.getByText("You")).toBeInTheDocument();
    expect(
      screen.getByText("Explain Newton's laws"),
    ).toBeInTheDocument();
  });

  it("renders an AI text message with markdown", () => {
    mockChatState.messages = [
      {
        id: "assistant-1",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "# Newton's Laws\n\n**First law**",
          },
        ],
      },
    ];

    render(<StudyFlowChat />);

    expect(screen.getByRole("heading", { name: "Newton's Laws" })).toBeInTheDocument();
    expect(screen.getByText("First law")).toBeInTheDocument();
  });

  it("renders the tool input-streaming state", () => {
    mockChatState.messages = [
      {
        id: "tool-1",
        role: "assistant",
        parts: [
          {
            type: "tool-getStudyProgress",
            state: "input-streaming",
          },
        ],
      },
    ];

    render(<StudyFlowChat />);

    expect(
      screen.getByText(/Preparing your study progress analysis/i),
    ).toBeInTheDocument();
  });

  it("renders the tool input-available state", () => {
    mockChatState.messages = [
      {
        id: "tool-2",
        role: "assistant",
        parts: [
          {
            type: "tool-getStudyProgress",
            state: "input-available",
          },
        ],
      },
    ];

    render(<StudyFlowChat />);

    expect(
      screen.getByText(/Analyzing your study progress/i),
    ).toBeInTheDocument();
  });

  it("renders the tool output-available result", () => {
    mockChatState.messages = [
      {
        id: "tool-3",
        role: "assistant",
        parts: [
          {
            type: "tool-getStudyProgress",
            state: "output-available",
            output: {
              subject: "Physics",
              completed: 7,
              total: 10,
              percentage: 70,
              status: "On Track",
            },
          },
        ],
      },
    ];

    render(<StudyFlowChat />);

    expect(
      screen.getByRole("heading", { name: "Physics" }),
    ).toBeInTheDocument();

    expect(screen.getByText("70%")).toBeInTheDocument();
    expect(screen.getByText("7 of 10 completed")).toBeInTheDocument();
    expect(screen.getByText("On Track")).toBeInTheDocument();
  });

  it("renders the tool output error state", () => {
    mockChatState.messages = [
      {
        id: "tool-4",
        role: "assistant",
        parts: [
          {
            type: "tool-getStudyProgress",
            state: "output-error",
            errorText: "Unable to load study progress",
          },
        ],
      },
    ];

    render(<StudyFlowChat />);

    expect(
      screen.getByText(/I couldn't load the study progress right now/i),
    ).toBeInTheDocument();
  });

  it("renders the thinking indicator while submitting", () => {
  mockChatState.status = "submitted";

  render(<StudyFlowChat />);

  expect(screen.getAllByText("Thinking...").length).toBeGreaterThan(0);
});

  
  it("handles the chat streaming state", () => {
    mockChatState.status = "streaming";

    render(<StudyFlowChat />);

    expect(screen.getByText("Generating response...")).toBeInTheDocument();

    const sendButton = screen.getByRole("button", {
      name: "Send",
    });

    expect(sendButton).toBeDisabled();

    
  });



  it("renders the chat error and allows retry", () => {
    mockChatState.error = new Error("AI request failed");

    render(<StudyFlowChat />);

    expect(
      screen.getByText("Something went wrong"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "We couldn't generate a response. Please try again.",
      ),
    ).toBeInTheDocument();

    const retryButton = screen.getByRole("button", {
      name: "Retry",
    });

    fireEvent.click(retryButton);

    expect(mockRegenerate).toHaveBeenCalledTimes(1);
  });

  it("sends the user's question when the form is submitted", async () => {
    render(<StudyFlowChat />);

    const input = screen.getByPlaceholderText(
      "Ask a study question...",
    );

    fireEvent.change(input, {
      target: {
        value: "What is photosynthesis?",
      },
    });

    fireEvent.submit(input.closest("form")!);

    expect(mockSendMessage).toHaveBeenCalledWith({
      text: "What is photosynthesis?",
    });
  });
  it("requires a study question before submitting", () => {
    render(<StudyFlowChat />);
	
const input = screen.getByRole("textbox", {
    name: "Ask a study question",
  });
    

    expect(input).toBeRequired();

    fireEvent.submit(input.closest("form")!);

    expect(mockSendMessage).not.toHaveBeenCalled();
  });
  
});