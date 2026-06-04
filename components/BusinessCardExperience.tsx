"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  Text,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const links = [
  {
    href: "/",
    label: "Portfolio",
    position: [-0.68, 0.86, 0.15] as [number, number, number],
  },
  {
    href: "mailto:hello@yasmeenbelhaj.com",
    label: "Email",
    position: [0.88, 0.64, 0.15] as [number, number, number],
  },
  {
    href: "https://www.linkedin.com/in/yasmeenbelhaj",
    label: "LinkedIn",
    position: [-0.72, 0.2, 0.16] as [number, number, number],
  },
  {
    href: "https://github.com/yasmeenbelhaj",
    label: "GitHub",
    position: [0.72, 0.12, 0.16] as [number, number, number],
  },
];

function openLink(href: string) {
  if (href.startsWith("/") || href.startsWith("mailto:")) {
    window.location.href = href;
    return;
  }

  window.open(href, "_blank", "noopener,noreferrer");
}

function NameModel() {
  const { scene } = useGLTF("/models/yas-name.glb");

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material instanceof THREE.MeshStandardMaterial) {
        child.material.color.set("#F4EBDD");
        child.material.metalness = 0.18;
        child.material.roughness = 0.28;
      }
    }
  });

  return (
    <primitive
      object={scene}
      position={[0, -0.95, 0]}
      rotation={[0, 0, 0]}
      scale={0.014}
    />
  );
}

function DiamondLogo() {
  const makeDiamond = (radius: number, z = 0): [number, number, number][] => [
    [0, radius, z],
    [radius * 0.72, 0, z],
    [0, -radius, z],
    [-radius * 0.72, 0, z],
    [0, radius, z],
  ];

  return (
    <group position={[0, 0.43, 0]} scale={0.78}>
      <AnimatedDiamondOutline
        points={makeDiamond(0.72)}
        speed={0.72}
        direction={1}
      />
      <AnimatedDiamondOutline
        points={makeDiamond(0.5)}
        speed={0.46}
        direction={-1}
      />
      <AnimatedDiamondOutline
        points={makeDiamond(0.3)}
        speed={0.92}
        direction={1}
      />

      <group position={[0, 0, 0.006]}>
        <mesh>
          <boxGeometry args={[0.2, 0.04, 0.04]} />
          <meshStandardMaterial
            color="#F4EBDD"
            emissive="#F4EBDD"
            emissiveIntensity={0.08}
            metalness={0.06}
            roughness={0.32}
          />
        </mesh>
        <mesh>
          <boxGeometry args={[0.04, 0.2, 0.04]} />
          <meshStandardMaterial
            color="#F4EBDD"
            emissive="#F4EBDD"
            emissiveIntensity={0.08}
            metalness={0.06}
            roughness={0.32}
          />
        </mesh>
      </group>
    </group>
  );
}

function AnimatedDiamondOutline({
  points,
  speed,
  direction,
}: {
  points: [number, number, number][];
  speed: number;
  direction: 1 | -1;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.rotation.y = clock.elapsedTime * speed * direction;
  });

  return (
    <group ref={group}>
      <Line points={points} color="#F4EBDD" lineWidth={6} />
    </group>
  );
}

function CentralModel() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.35) * 0.12 + pointer.x * 0.18;
    group.current.rotation.x = -0.08 + pointer.y * 0.08;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={group} position={[0, -0.08, 0]}>
        <DiamondLogo />
        <NameModel />
      </group>
    </Float>
  );
}

function LinkNode({
  href,
  label,
  position,
}: {
  href: string;
  label: string;
  position: [number, number, number];
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * 1.1 + position[0]) * 0.025;
  });

  return (
    <group
      ref={group}
      position={position}
      onClick={(event) => {
        event.stopPropagation();
        openLink(href);
      }}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "";
      }}
    >
      <group scale={hovered ? 1.12 : 1}>
        <Line
          points={[
            [0, 0.076, 0],
            [0.049, 0, 0],
            [0, -0.076, 0],
            [-0.049, 0, 0],
            [0, 0.076, 0],
          ]}
          color="#AE9377"
          lineWidth={3}
        />
      </group>

      <mesh position={[0, 0, -0.025]}>
        <planeGeometry args={[0.28, 0.28]} />
        <meshStandardMaterial
          color="#AE9377"
          transparent
          opacity={hovered ? 0.08 : 0.025}
          depthWrite={false}
        />
      </mesh>

      <Text
        position={[0, -0.16, 0]}
        fontSize={0.045}
        letterSpacing={0.08}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
      >
        {label.toUpperCase()}
      </Text>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.15, 5.1]} fov={38} />
      <ambientLight intensity={0.62} />
      <directionalLight
        position={[3.5, 4, 4]}
        intensity={2.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, -1.4, 3]} intensity={1.5} color="#8E4829" />
      <pointLight position={[2.6, 1.6, 2]} intensity={1.2} color="#C19862" />

      <CentralModel />

      {links.map((link) => (
        <LinkNode key={link.label} {...link} />
      ))}

      <ContactShadows
        position={[0, -2.35, 0]}
        opacity={0.34}
        scale={7}
        blur={2.8}
      />
      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.8}
        rotateSpeed={0.45}
      />
    </>
  );
}

useGLTF.preload("/models/yas-name.glb");

export default function BusinessCardExperience() {
  return (
    <main className="fixed inset-0 h-[100dvh] overflow-hidden bg-brand-black text-brand-cream">
      <Canvas
        className="h-[100dvh] w-screen"
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: false }}
        shadows
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5.4, 9]} />
        <Scene />
      </Canvas>
    </main>
  );
}
