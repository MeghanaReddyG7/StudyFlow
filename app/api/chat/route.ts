import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import {
  studyFlowModel,
  studyFlowSystemPrompt,
} from "@/lib/ai";

// Allow the AI response to stream for up to 30 seconds.
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: studyFlowModel,
      system: studyFlowSystemPrompt,
      messages: await convertToModelMessages(messages),
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