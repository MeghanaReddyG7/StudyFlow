"use client";

import dynamic from "next/dynamic";

const ShaderHero = dynamic(
  () => import("@/components/ShaderHero"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function LazyShaderHero() {
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

      <div className="absolute inset-0">
        <ShaderHero showContent={false} />
      </div>
    </>
  );
}