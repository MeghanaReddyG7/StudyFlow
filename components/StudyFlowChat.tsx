"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import StudyProgressCard from "./StudyProgressCard";
import AnimatedSendButton from "./AnimatedSendButton";

type StudyProgressResult = {
  subject: string;
  completed: number;
  total: number;
  percentage: number;
  status: string;
};

export default function StudyFlowChat() {
  const [input, setInput] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);

  const {
    messages,
    sendMessage,
    status,
    stop,
    error,
    regenerate,
  } = useChat();

  const isStreaming = status === "streaming";

  // Automatically follow new content while the user is near the bottom.
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container || !shouldAutoScrollRef.current) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // Detect whether the user has intentionally scrolled away from the bottom.
  const handleMessagesScroll = () => {
    const container = messagesContainerRef.current;

    if (!container) {
      return;
    }

    const distanceFromBottom =
      container.scrollHeight -
      container.scrollTop -
      container.clientHeight;

    shouldAutoScrollRef.current = distanceFromBottom < 80;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!input.trim() || isStreaming || error) {
      return;
    }

    const message = input.trim();

    // Clear the input immediately after sending.
    setInput("");

    await sendMessage({
      text: message,
    });
  };

  return (
    <section className="mt-6 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] transition-colors duration-200">
      {/* Header */}
      <div className="border-b border-[var(--border)] px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-lg text-[var(--primary)] ring-1 ring-indigo-500/10">
            ✦
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-bold text-[var(--foreground)]">
              Study Flow AI
            </h2>

            <p className="text-sm text-[var(--muted)]">
              Your personal study assistant
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              status === "streaming"
                ? "animate-pulse bg-indigo-500"
                : status === "submitted"
                  ? "animate-pulse bg-amber-500"
                  : error
                    ? "bg-red-500"
                    : "bg-emerald-500"
            }`}
          />

          <p className="text-xs font-medium text-[var(--muted)]">
            {error
              ? "Connection issue"
              : status === "streaming"
                ? "Generating response..."
                : status === "submitted"
                  ? "Thinking..."
                  : "Ready to help"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        onScroll={handleMessagesScroll}
        className="min-h-80 max-h-[500px] space-y-5 overflow-y-auto bg-[var(--surface-muted)] p-4 sm:p-5"
      >
        {messages.length === 0 ? (
          <div className="flex min-h-64 items-center justify-center text-center">
            <div className="max-w-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-xl text-[var(--primary)] ring-1 ring-indigo-500/10">
                ✦
              </div>

              <h3 className="mt-5 text-base font-bold text-[var(--foreground)]">
                Ready to help you study
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Ask me to explain a concept, give you an example, create
                practice questions, or help you understand a difficult topic.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                  Explain concepts
                </span>

                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                  Practice questions
                </span>

                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                  Check progress
                </span>
              </div>
            </div>
          </div>
        ) : (
          messages.map((message) => {
            const isUser = message.role === "user";

            return (
              <div
                key={message.id}
                className={`flex ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`min-w-0 w-fit max-w-[88%] ${
                    isUser ? "items-end" : "items-start"
                  }`}
                >
                  {/* Sender */}
                  <p
                    className={`mb-1 px-1 text-xs font-semibold ${
                      isUser
                        ? "text-right text-indigo-600"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {isUser ? "You" : "Study Flow AI"}
                  </p>

                  {/* Message bubble */}
                  <div
                    aria-live={isUser ? undefined : "polite"}
                    className={`min-w-0 max-w-full rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                      isUser
                        ? "rounded-br-md bg-indigo-600 text-white"
                        : "rounded-bl-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]"
                    }`}
                  >
                    {message.parts.map((part, index) => {
                      // Text part
                      if (part.type === "text") {
                        return isUser ? (
                          <span
                            key={index}
                            className="whitespace-pre-wrap break-words"
                          >
                            {part.text}
                          </span>
                        ) : (
                          <ReactMarkdown
                            key={index}
                            components={{
                              h1: ({ children }) => (
                                <h1 className="mb-3 mt-2 break-words text-xl font-bold text-[var(--foreground)]">
                                  {children}
                                </h1>
                              ),

                              h2: ({ children }) => (
                                <h2 className="mb-2 mt-3 break-words text-lg font-bold text-[var(--foreground)]">
                                  {children}
                                </h2>
                              ),

                              h3: ({ children }) => (
                                <h3 className="mb-2 mt-3 break-words font-semibold text-[var(--foreground)]">
                                  {children}
                                </h3>
                              ),

                              p: ({ children }) => (
                                <p className="mb-3 break-words last:mb-0">
                                  {children}
                                </p>
                              ),

                              ul: ({ children }) => (
                                <ul className="mb-3 list-disc space-y-1 pl-5">
                                  {children}
                                </ul>
                              ),

                              ol: ({ children }) => (
                                <ol className="mb-3 list-decimal space-y-1 pl-5">
                                  {children}
                                </ol>
                              ),

                              li: ({ children }) => (
                                <li className="break-words">
                                  {children}
                                </li>
                              ),

                              strong: ({ children }) => (
                                <strong className="font-semibold text-[var(--foreground)]">
                                  {children}
                                </strong>
                              ),

                              // Inline code
                              code: ({ children, className }) => {
                                const isCodeBlock = Boolean(className);

                                if (isCodeBlock) {
                                  return (
                                    <code
                                      className={`block min-w-max font-mono text-sm leading-6 text-gray-100 ${className}`}
                                    >
                                      {children}
                                    </code>
                                  );
                                }

                                return (
                                  <code className="rounded border border-[var(--border)] bg-[var(--surface-muted)] px-1.5 py-0.5 font-mono text-xs text-[var(--foreground)]">
                                    {children}
                                  </code>
                                );
                              },

                              // Fenced code blocks
                              pre: ({ children }) => (
                                <pre className="my-4 max-w-full overflow-x-auto rounded-xl bg-gray-950 p-4 shadow-inner">
                                  {children}
                                </pre>
                              ),
                            }}
                          >
                            {part.text}
                          </ReactMarkdown>
                        );
                      }

                      // Tool lifecycle
                      if (part.type === "tool-getStudyProgress") {
                        // State 1: Input is streaming
                        if (part.state === "input-streaming") {
                          return (
                            <div
                              key={index}
                              className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--muted)]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                                <span>
                                  Preparing your study progress analysis...
                                </span>
                              </div>
                            </div>
                          );
                        }

                        // State 2: Input is available
                        if (part.state === "input-available") {
                          return (
                            <div
                              key={index}
                              className="mt-3 rounded-xl border border-indigo-500/20 bg-[var(--primary-soft)] px-4 py-3 text-sm text-[var(--primary)]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                                <span>
                                  Analyzing your study progress...
                                </span>
                              </div>
                            </div>
                          );
                        }

                        // State 3: Tool output is available
                        if (part.state === "output-available") {
                          const result =
                            part.output as StudyProgressResult;

                          return (
                            <StudyProgressCard
                              key={index}
                              subject={result.subject}
                              completed={result.completed}
                              total={result.total}
                              percentage={result.percentage}
                              status={result.status}
                            />
                          );
                        }

                        // State 4: Tool output error
                        if (part.state === "output-error") {
                          return (
                            <div
                              key={index}
                              className="mt-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                            >
                              ❌ I couldn&apos;t load the study progress right
                              now.
                            </div>
                          );
                        }
                      }

                      return null;
                    })}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* General AI thinking indicator */}
        {status === "submitted" && (
          <div className="flex justify-start">
            <div>
              <p className="mb-1 px-1 text-xs font-semibold text-[var(--muted)]">
                Study Flow AI
              </p>

              <div className="rounded-2xl rounded-bl-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
                  <span>Thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Error */}
      {error && (
        <div className="border-t border-red-500/20 bg-red-500/5 px-4 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                Something went wrong
              </p>

              <p className="mt-1 text-xs text-red-600/80 dark:text-red-400/80">
                We couldn&apos;t generate a response. Please try again.
              </p>
            </div>

            <button
              type="button"
              onClick={() => regenerate()}
              className="shrink-0 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-[var(--border)] bg-[var(--surface)] p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="study-question" className="sr-only">
            Ask a study question
          </label>

          <input
            id="study-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a study question..."
            required
            className="min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isStreaming || !!error}
          />

          <AnimatedSendButton
            disabled={!input.trim()}
            isLoading={isStreaming}
            hasError={!!error}
            onRetry={() => regenerate()}
            onStop={stop}
          />
        </form>

        <p className="mt-2 text-center text-xs text-[var(--muted)]">
          Study Flow AI can make mistakes. Check important information.
        </p>
      </div>
    </section>
  );
}