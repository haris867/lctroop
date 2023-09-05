import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Star() {
  const meshRef = useRef(null);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(25));

  const [velocityX, velocityY] = Array(2)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(0.005));
  let directionX = 1;
  let directionY = 1;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += velocityX * directionX;
      meshRef.current.position.y += velocityY * directionY;

      if (meshRef.current.position.x > 5 || meshRef.current.position.x < -5) {
        directionX = -directionX;
      }

      if (meshRef.current.position.y > 5 || meshRef.current.position.y < -5) {
        directionY = -directionY;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
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

export default function StarryBackground() {
  return (
    <div className="canvas-container">
      <Canvas className="canvas-wrapper fade-in">
        <perspectiveCamera aspect={1 / 4} fov={75} position={[0, 0, 25]} />
        <Stars count={200} />
      </Canvas>
    </div>
  );
}
