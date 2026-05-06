import { useRef, useState, useEffect, Component, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function FloatingCard({ position, rotation, color, scale = 1 }: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<any>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.4) * 0.05;
    meshRef.current.rotation.y = rotation[1] + Math.cos(t * 0.3) * 0.05;
  });
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1.4, 1.0, 0.04]} />
      <meshStandardMaterial {...({ color, roughness: 0.9, metalness: 0.0 } as any)} />
    </mesh>
  );
}

function FloatingDot({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<any>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8 + position[2]) * 0.15;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial {...({ color, roughness: 0.7 } as any)} />
    </mesh>
  );
}

function Scene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<any>(null);
  const lerp = (start: number, end: number, alpha: number) => start + (end - start) * alpha;
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, mouseX * 0.15, 0.05);
    groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, -mouseY * 0.08, 0.05);
  });
  return (
    <group ref={groupRef}>
      <FloatingCard position={[-2.5, 0.5, -1]} rotation={[-0.1, 0.3, -0.15]} color="#C8D5B9" />
      <FloatingCard position={[2.2, -0.3, -0.5]} rotation={[0.05, -0.2, 0.1]} color="#E8DCC8" scale={0.85} />
      <FloatingCard position={[-0.5, -1.4, -1.5]} rotation={[0.1, 0.1, -0.08]} color="#D4C4A8" scale={0.7} />
      <FloatingCard position={[1.0, 1.5, -2]} rotation={[-0.05, 0.15, 0.12]} color="#C4B5A0" scale={0.6} />
      <FloatingDot position={[-3, -0.5, 0]} color="#6B8F6E" />
      <FloatingDot position={[3.2, 1.2, -0.5]} color="#C17B5A" />
      <FloatingDot position={[0.5, 2, -1]} color="#8B9E6D" />
      <FloatingDot position={[-2, -1.5, -0.5]} color="#C17B5A" />
    </group>
  );
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function CSSFallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated floating paper shapes as CSS fallback */}
      {[
        { w: 120, h: 85, top: "15%", left: "8%", bg: "#C8D5B9", rot: -15, delay: "0s" },
        { w: 100, h: 72, top: "20%", right: "10%", bg: "#E8DCC8", rot: 10, delay: "0.8s" },
        { w: 80, h: 56, top: "55%", left: "5%", bg: "#D4C4A8", rot: -8, delay: "1.4s" },
        { w: 90, h: 65, top: "60%", right: "8%", bg: "#C4B5A0", rot: 12, delay: "0.4s" },
        { w: 50, h: 36, top: "35%", left: "20%", bg: "#C8D5B9", rot: -20, delay: "1.8s" },
        { w: 60, h: 44, top: "40%", right: "22%", bg: "#D4E8D0", rot: 18, delay: "1.2s" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-sm opacity-60"
          style={{
            width: s.w,
            height: s.h,
            top: s.top,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? s.right : undefined,
            background: s.bg,
            transform: `rotate(${s.rot}deg)`,
            boxShadow: "2px 3px 8px rgba(0,0,0,0.1)",
            animation: `floatUp 6s ease-in-out ${s.delay} infinite alternate`,
          }}
        />
      ))}
      {/* Dots */}
      {[
        { size: 14, top: "25%", left: "35%", bg: "#6B8F6E", delay: "0.3s" },
        { size: 10, top: "65%", right: "30%", bg: "#C17B5A", delay: "1s" },
        { size: 18, top: "45%", left: "55%", bg: "#8B9E6D", delay: "0.7s" },
      ].map((d, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full opacity-70"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: "left" in d ? d.left : undefined,
            right: "right" in d ? d.right : undefined,
            background: d.bg,
            animation: `floatUp 4s ease-in-out ${d.delay} infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setSupported(!!ctx);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

export default function HeroScene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const webglSupported = useWebGLSupport();

  if (webglSupported === null) return null;
  if (!webglSupported) return <CSSFallbackBackground />;

  return (
    <WebGLErrorBoundary fallback={<CSSFallbackBackground />}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.8} color="#FFF8F0" />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF0D8" />
        <directionalLight position={[-5, -2, 2]} intensity={0.4} color="#D4E8D0" />
        <Scene mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </WebGLErrorBoundary>
  );
}
