"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type ShaderHeroProps = {
  showContent?: boolean;
};

export default function LazyShaderHero() {
  const [ShaderHero, setShaderHero] =
    useState<ComponentType<ShaderHeroProps> | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(async () => {
      const module = await import("@/components/ShaderHero");
      setShaderHero(() => module.default);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!ShaderHero) {
    return (
      <div
        className="absolute inset-0 bg-slate-950"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #176b72 0%, #172554 35%, #09051a 75%)",
        }}
      />
    );
  }

  return <ShaderHero showContent={false} />;
}