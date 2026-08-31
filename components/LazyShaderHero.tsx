"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ShaderHero = dynamic(
  () => import("@/components/ShaderHero"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function LazyShaderHero() {
  const [showShader, setShowShader] = useState(false);

  useEffect(() => {
    const loadShader = () => {
      setShowShader(true);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadShader, {
        timeout: 3000,
      });

      return () => {
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = setTimeout(loadShader, 2000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #176b72 0%, #172554 35%, #09051a 75%)",
        }}
      />

      {showShader && (
        <div className="absolute inset-0" aria-hidden="true">
          <ShaderHero showContent={false} />
        </div>
      )}
    </>
  );
}