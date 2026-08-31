import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import {
  studyFlowModel,
  studyFlowSystemPrompt,
} from "@/lib/ai";

import { getStudyProgressTool } from "@/lib/tools/get-study-progress";

const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 1000;

const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = requestLog.get(ip) ?? [];

  const recentRequests = timestamps.filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);

  return false;
}

// Prevent long-running AI requests in production.
export const maxDuration = 30;

// Keep requests reasonably small so strangers cannot send huge prompts.
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4000;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please wait a minute and try again.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
          },
        },
      );
    }
    const { messages }: { messages: UIMessage[] } = await req.json();

    // Validate the request body.
    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Limit conversation size.
    if (messages.length > MAX_MESSAGES) {
      return new Response(
        JSON.stringify({
          error: `Too many messages. Please start a new conversation after ${MAX_MESSAGES} messages.`,
        }),
        {
          status: 413,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Limit the size of individual text messages.
    for (const message of messages) {
      if (message.role !== "user") continue;

      const textLength = message.parts
        .filter((part) => part.type === "text")
        .reduce((total, part) => total + part.text.length, 0);

      if (textLength > MAX_MESSAGE_LENGTH) {
        return new Response(
          JSON.stringify({
            error: `Your message is too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.`,
          }),
          {
            status: 413,
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
      }
    }

    const result = streamText({
      model: studyFlowModel,
      system: studyFlowSystemPrompt,

      messages: await convertToModelMessages(messages),

      tools: {
        getStudyProgress: getStudyProgressTool,
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Study Flow AI error:", error);

    return new Response(
      JSON.stringify({
        error: "Something went wrong while generating the AI response.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}