"use client";

import dynamic from "next/dynamic";

const ShaderHero = dynamic(
  () => import("@/components/ShaderHero"),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 bg-slate-950"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #176b72 0%, #172554 35%, #09051a 75%)",
        }}
      />
    ),
  }
);

export default function LazyShaderHero() {
  return <ShaderHero showContent={false} />;
}