"use client";

import { useEffect, useRef, useState } from "react";

type ButtonState = "idle" | "loading" | "success" | "error";

interface AnimatedSendButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  hasError?: boolean;
  onRetry?: () => void;
  onStop?: () => void;
}

export default function AnimatedSendButton({
  disabled = false,
  isLoading = false,
  hasError = false,
  onRetry,
  onStop,
}: AnimatedSendButtonProps) {
  const [state, setState] = useState<ButtonState>("idle");

  const wasLoadingRef = useRef(false);
  const stoppedRef = useRef(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResetTimer = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const showSuccess = () => {
    clearResetTimer();

    setState("success");

    resetTimerRef.current = setTimeout(() => {
      setState("idle");
    }, 1100);
  };

  const showError = () => {
    clearResetTimer();

    setState("error");

    resetTimerRef.current = setTimeout(() => {
      setState("idle");
    }, 1500);
  };

  /*
   * Real StudyFlow lifecycle
   */
  useEffect(() => {
    if (isLoading) {
      stoppedRef.current = false;
      wasLoadingRef.current = true;

      clearResetTimer();
      setState("loading");

      return;
    }

    /*
     * If the user manually stopped the stream,
     * don't show "Sent".
     */
    if (stoppedRef.current) {
      wasLoadingRef.current = false;
      setState("idle");
      return;
    }

    /*
     * Show error after a failed request.
     */
    if (hasError && wasLoadingRef.current) {
      wasLoadingRef.current = false;
      showError();
      return;
    }

    /*
     * Show success after loading finishes normally.
     */
    if (!isLoading && !hasError && wasLoadingRef.current) {
      wasLoadingRef.current = false;
      showSuccess();
    }
  }, [isLoading, hasError]);

  /*
   * Cleanup.
   */
  useEffect(() => {
    return () => {
      clearResetTimer();
    };
  }, []);

  const isLoadingState = state === "loading";

  const handleClick = () => {
    /*
     * Loading:
     * clicking the same button stops the request.
     */
    if (isLoadingState) {
      stoppedRef.current = true;
      wasLoadingRef.current = false;

      clearResetTimer();
      setState("idle");

      onStop?.();
      return;
    }

    /*
     * Error:
     * clicking the same button retries.
     */
    if (state === "error") {
      onRetry?.();
      return;
    }
  };

  const buttonIsDisabled =
    disabled ||
    state === "success";

  return (
    <button
      type="submit"
      onClick={handleClick}
      disabled={buttonIsDisabled}
      aria-label={
        state === "loading"
          ? "Sending message. Click to stop"
          : state === "success"
            ? "Message sent"
            : state === "error"
              ? "Message failed. Retry"
              : "Send message"
      }
      className={`
        group relative flex h-11 min-w-[118px]
        items-center justify-center
        overflow-hidden rounded-xl
        px-5
        text-sm font-semibold text-white

        transition-[background-color,transform,box-shadow,opacity]
        duration-200
        ease-out

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-400
        focus-visible:ring-offset-2

        active:scale-[0.97]

        disabled:cursor-not-allowed
        disabled:opacity-40

        ${
          state === "success"
            ? "bg-green-600"
            : state === "error"
              ? "bg-red-600"
              : "bg-indigo-600 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md"
        }

        ${
          state === "error"
            ? "animate-[error-shake_300ms_ease-out]"
            : ""
        }
      `}
    >
      <span className="relative flex h-5 w-full items-center justify-center">

        {/* IDLE */}
        <span
          className={`
            absolute flex items-center gap-2
            transition-[transform,opacity]
            duration-200
            ease-out
            ${
              state === "idle"
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }
          `}
        >
          <span>Send</span>

          <span
            aria-hidden="true"
            className="
              transition-transform
              duration-150
              ease-out
              group-hover:translate-x-0.5
            "
          >
            →
          </span>
        </span>

        {/* LOADING */}
        <span
          className={`
            absolute flex items-center gap-2
            transition-[transform,opacity]
            duration-200
            ease-out
            ${
              state === "loading"
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }
          `}
        >
          <span
            aria-hidden="true"
            className="
              h-4 w-4
              animate-spin
              rounded-full
              border-2
              border-white/40
              border-t-white
              motion-reduce:animate-none
            "
          />

          <span>Sending</span>
        </span>

        {/* SUCCESS */}
        <span
          className={`
            absolute flex items-center gap-2
            transition-[transform,opacity]
            duration-200
            ease-out
            ${
              state === "success"
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }
          `}
        >
          <span
            aria-hidden="true"
            className={
              state === "success"
                ? "animate-[success-pop_200ms_ease-out]"
                : ""
            }
          >
            ✓
          </span>

          <span>Sent</span>
        </span>

        {/* ERROR */}
        <span
          className={`
            absolute flex items-center gap-2
            transition-[transform,opacity]
            duration-200
            ease-out
            ${
              state === "error"
                ? "translate-x-0 opacity-100"
                : "translate-x-2 opacity-0"
            }
          `}
        >
          <span aria-hidden="true">!</span>

          <span>Retry</span>
        </span>

      </span>
    </button>
  );
}