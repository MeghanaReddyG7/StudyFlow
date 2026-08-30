"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = `
  // Pass the plane's UV coordinates to the fragment shader.
  varying vec2 vUv;

  void main() {
    vUv = uv;

    // Draw the plane across the entire hero.
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  // Coordinates passed from the vertex shader.
  varying vec2 vUv;

  // Time in seconds, used to animate the aurora.
  uniform float u_time;

  // Current drawing resolution.
  uniform vec2 u_resolution;

  // Normalized mouse position.
  uniform vec2 u_mouse;

  // --------------------------------------------------
  // Palette
  // Creates the main colors of the aurora.
  // --------------------------------------------------
  vec3 palette(float t) {
    vec3 a = vec3(0.10, 0.04, 0.20);
    vec3 b = vec3(0.15, 0.25, 0.45);
    vec3 c = vec3(0.20, 0.75, 0.65);
    vec3 d = vec3(0.10, 0.85, 0.95);

    return a + b * cos(
      6.28318 * (c * t + d)
    );
  }

  void main() {

    // Convert UV coordinates to a centered coordinate system.
    vec2 uv = vUv - 0.5;

    // Correct for different screen aspect ratios.
    uv.x *= u_resolution.x / u_resolution.y;

    // --------------------------------------------------
    // Mouse influence
    // The aurora gently leans toward the cursor.
    // --------------------------------------------------
    vec2 mouse = u_mouse - 0.5;
    mouse.x *= u_resolution.x / u_resolution.y;

    // Calculate distance from the current pixel to the mouse.
    float mouseDistance = length(uv - mouse);

    // Stronger influence near the cursor.
    float mouseInfluence = smoothstep(
    1.0,
    0.0,
    mouseDistance
    );

    // Warp the shader toward the cursor.
    uv += mouse * mouseInfluence * 0.50;

    // Add a small wave distortion around the cursor.
    float mouseWave = sin(
    mouseDistance * 12.0 - u_time * 2.0
    ) * mouseInfluence;

uv += normalize(uv - mouse + 0.001) * mouseWave * 0.025;

    // --------------------------------------------------
    // Animated flowing waves
    // Several sine waves are layered together to
    // create an aurora-like organic movement.
    // --------------------------------------------------
    float wave1 = sin(
      uv.x * 3.0 +
      sin(uv.y * 4.0) +
      u_time * 0.65
    );

    float wave2 = sin(
      uv.x * 5.0 -
      uv.y * 3.0 +
      u_time * 0.45
    );

    float wave3 = sin(
      uv.y * 6.0 +
      uv.x * 2.0 -
      u_time * 0.55
    );

    // Combine the waves.
    float flow =
      wave1 * 0.45 +
      wave2 * 0.30 +
      wave3 * 0.25;

    // --------------------------------------------------
    // Aurora mask
    // Turns the flowing waves into glowing bands.
    // --------------------------------------------------
    float aurora = smoothstep(
      -0.15,
      0.85,
      flow
    );

    // Add a second layer with a different frequency.
    float secondary = sin(
      uv.x * 8.0 +
      uv.y * 4.0 +
      u_time * 0.18
    );

    aurora += secondary * 0.08;

    // --------------------------------------------------
    // Color
    // Use the flow value to move through our palette.
    // --------------------------------------------------
    vec3 color = palette(
      flow * 0.25 + uv.y * 0.35 + 0.5
    );

    // Make the center glow stronger.
    float centerGlow = 1.0 - length(uv) * 0.7;

    color *= centerGlow;
    color += vec3(0.02, 0.04, 0.08);

    // Apply the aurora intensity.
    color *= 0.65 + aurora * 1.0;

    // --------------------------------------------------
    // Subtle grain
    // Adds texture so the background does not look flat.
    // --------------------------------------------------
    float grain = fract(
      sin(
        dot(vUv * u_resolution, vec2(12.9898, 78.233))
      ) * 43758.5453
    );

    color += (grain - 0.5) * 0.025;

    // Slight vignette keeps attention toward the center.
    float vignette = 1.0 - smoothstep(
      0.25,
      0.85,
      length(vUv - 0.5)
    );

    color *= 0.75 + vignette * 0.25;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane({
  animate,
  mouse,
}: {
  animate: boolean;
  mouse: React.MutableRefObject<THREE.Vector2>;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useEffect(() => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);

    uniforms.u_resolution.value.set(
      size.width * pixelRatio,
      size.height * pixelRatio
    );

    gl.setPixelRatio(pixelRatio);
  }, [size, gl, uniforms]);

  useFrame((state) => {
    if (!materialRef.current) return;

    if (animate) {
      materialRef.current.uniforms.u_time.value =
        state.clock.getElapsedTime();

      materialRef.current.uniforms.u_mouse.value.lerp(
        mouse.current,
        0.04
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ShaderHero({
  showContent = true,
}: {
  showContent?: boolean;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      setPageVisible(!document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.set(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const shouldAnimate =
    !reducedMotion && pageVisible;

  return (
  <section className="relative min-h-[600px] overflow-hidden bg-slate-950">
    {/* Static fallback for reduced-motion users */}
    {reducedMotion ? (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #176b72 0%, #172554 35%, #09051a 75%)",
        }}
      />
    ) : (
      <div className="absolute inset-0">
        <Canvas
          frameloop={shouldAnimate ? "always" : "demand"}
          dpr={[1, 1.25]}
          camera={{ position: [0, 0, 1] }}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
          }}
        >
          <ShaderPlane
            animate={shouldAnimate}
            mouse={mouse}
          />
        </Canvas>
      </div>
    )}

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-slate-950/45" />

    {/* Existing Shader page content */}
    {showContent && (
      <div className="relative z-10 flex min-h-[600px] items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">
            StudyFlow
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Focus better.
            <br />
            <span className="text-cyan-100">
              Study smarter.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
            A calm study workspace designed to help you
            plan sessions, stay focused, and track your
            progress.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
            >
              Explore StudyFlow
            </a>
          </div>
        </div>
      </div>
    )}
  </section>
);
}