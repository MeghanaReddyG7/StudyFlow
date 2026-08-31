"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Mode = "focus" | "deep" | "break";

const modes = {
  focus: {
    color: "#6366f1",
    metalness: 0.6,
    roughness: 0.25,
  },
  deep: {
    color: "#8b5cf6",
    metalness: 0.8,
    roughness: 0.15,
  },
  break: {
    color: "#22c55e",
    metalness: 0.35,
    roughness: 0.4,
  },
};

function FocusOrb({
  mode,
  isRunning,
  isComplete,
}: {
  mode: Mode;
  isRunning: boolean;
  isComplete:boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

const elapsed = state.clock.elapsedTime;

if (isComplete) {
  const celebration = 1 + Math.sin(elapsed * 5) * 0.1;
  meshRef.current.scale.setScalar(celebration);
  meshRef.current.rotation.y = elapsed * 1.2;
  return;
}

if (!isRunning) return;

    

    meshRef.current.rotation.x = elapsed * 0.25;
    meshRef.current.rotation.y = elapsed * 0.35;

    const pulseSpeed = mode === "deep" ? 2.6 : mode === "break" ? 1.4 : 2;
    const pulseAmount = mode === "deep" ? 0.065 : mode === "break" ? 0.03 : 0.045;

    const pulse = 1 + Math.sin(elapsed * pulseSpeed) * pulseAmount;
    meshRef.current.scale.setScalar(pulse);
  });

  const material = modes[mode];

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />

      <meshStandardMaterial
        color={material.color}
        metalness={material.metalness}
        roughness={material.roughness}
      />
    </mesh>
  );
}

export default function StudyFlow3D() {
  const [mode, setMode] = useState<Mode>("focus");
  const [isRunning, setIsRunning] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  setReducedMotion(mediaQuery.matches);

  const handleChange = (event: MediaQueryListEvent) => {
    setReducedMotion(event.matches);
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
}, []);

  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-2xl bg-slate-950">
      <Canvas
  camera={{ position: [0, 0, 5], fov: 50 }}
  dpr={[1, 1.5]}
  gl={{ antialias: false }}
>
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />

        <FocusOrb
  mode={mode}
  isRunning={isRunning && !reducedMotion}
  isComplete={false}
/>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
        />
      </Canvas>

      <div className="absolute left-4 top-4 rounded-xl bg-white/10 p-3 backdrop-blur-md">
        <p className="mb-2 text-sm font-semibold text-white">
          Focus Mode
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMode("focus")}
            className="rounded-lg bg-indigo-500 px-3 py-2 text-xs font-medium text-white"
          >
            Focus
          </button>

          <button
            onClick={() => setMode("deep")}
            className="rounded-lg bg-violet-500 px-3 py-2 text-xs font-medium text-white"
          >
            Deep Work
          </button>

          <button
            onClick={() => setMode("break")}
            className="rounded-lg bg-green-500 px-3 py-2 text-xs font-medium text-white"
          >
            Break
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-900"
          >
            {isRunning ? "Pause Focus" : "Start Focus"}
          </button>
        </div>
      </div>
    </div>
  );
}