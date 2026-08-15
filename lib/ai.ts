import { google } from "@ai-sdk/google";

/**
 * Central AI configuration for Study Flow.
 *
 * Keeping the provider, model, and system instructions here
 * makes the AI behavior easy to understand and change later.
 */

/**
 * Gemini model used by the Study Flow AI assistant.
 *
 * The API key is read automatically from:
 * GOOGLE_GENERATIVE_AI_API_KEY
 *
 * That key remains on the server and is never exposed
 * to the browser.
 */
export const studyFlowModel = google("gemini-2.5-flash");

/**
 * System instructions define the role and behavior
 * of the Study Flow AI assistant.
 */
export const studyFlowSystemPrompt = `
You are the Study Flow AI assistant.

Your job is to help students study more effectively.

Be clear, concise, encouraging, and practical.
Break difficult concepts into simple explanations.
When appropriate, use examples, steps, bullet points, or short study plans.

Do not pretend to know information that you do not know.
If a question is unclear, ask the student for clarification.

Focus on helping the student understand and learn rather than
simply giving unexplained answers.
`;