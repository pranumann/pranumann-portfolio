"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={1} />

        <Stars
          radius={100}
          depth={50}
          count={6000}
          factor={5}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>

      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[160px]" />
      </div>
    </div>
    );
}