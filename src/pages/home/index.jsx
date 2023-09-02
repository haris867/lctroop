import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as S from "./index.styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const JoinButton = styled.button`
  font-size: calc(1rem + 0.3vw) !important;
  border-radius: 5px;
  color: #131313;
  padding: 3px 3rem;
  background-color: #fff;
  border: 3px solid #ffd700;
  font-family: "N27", sans-serif;
  transform: scale(1);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.05);
    color: #131313;
    background-color: #fff !important;
    border: 3px solid #ffd700 !important;
  }
  &:focus {
    color: #131313;
    background-color: #fff !important;
    border: 3px solid #ffd700 !important;
  }
`;

function RotatingSphere({ position = [0, 0, 0] }) {
  const meshRef = useRef(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={new THREE.Color("#ffd700")}
        metalness={0.7}
        roughness={0.1}
      />
    </mesh>
  );
}

function Star() {
  const meshRef = useRef(null);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(30));

  // Step 1: Introduce a velocity factor for each star
  const [velocityX, velocityY] = Array(2)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(0.005));

  useFrame(() => {
    if (meshRef.current) {
      // Step 2: Update the star's position based on its velocity
      meshRef.current.position.x += velocityX;
      meshRef.current.position.y += velocityY;

      // Step 3: Wrap stars around if they move out of a certain boundary
      if (meshRef.current.position.x > 50) meshRef.current.position.x = -50;
      if (meshRef.current.position.x < -50) meshRef.current.position.x = 50;
      if (meshRef.current.position.y > 50) meshRef.current.position.y = -50;
      if (meshRef.current.position.y < -50) meshRef.current.position.y = 50;
    }
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      {/* <pointLight intensity={1} /> */}
      <sphereGeometry args={[0.03, 64, 64]} />
      <meshBasicMaterial color={0xffd700} />
    </mesh>
  );
}

function Stars({ count = 100 }) {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <Star key={i} />
        ))}
    </>
  );
}

function AnimatedLight() {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const time = clock.getElapsedTime();
      const radius = 15; // The distance from the center

      lightRef.current.position.x = radius * Math.cos(time);
      lightRef.current.position.y = 15; // Keeping the Y position constant
      lightRef.current.position.z = radius * Math.sin(time) - 23;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[15, 15, -25]}
      intensity={2000}
      distance={100}
    />
  );
}

function ThreeFiberScene() {
  return (
    <Canvas className="canvas-wrapper fade-in">
      <perspectiveCamera aspect={1 / 4} fov={75} position={[0, 0, 25]} />
      {/* <ambientLight intensity={1} /> */}
      {/* <directionalLight position={[5, 5, -5]} intensity={1} /> */}
      <AnimatedLight />
      <Stars count={200} />
      <RotatingSphere position={[0, 1.5, 0]} />
    </Canvas>
  );
}

export default function Home() {
  return (
    <div className="h-100 d-flex justify-content-center">
      <div className="d-flex justify-content-center position-absolute">
        <S.Heading className="heading-animation d-flex justify-content-center align-items-center position-relative">
          <span className="glow me-2">-</span>JOIN THE TROOP
          <span className="glow ms-2">-</span>
        </S.Heading>
      </div>

      <ThreeFiberScene />
      <div className="position-absolute join-button d-flex justify-content-center fade-in-button">
        <Link to="/join">
          <JoinButton className="mt-3">JOIN US</JoinButton>
        </Link>
      </div>
    </div>
  );
}
