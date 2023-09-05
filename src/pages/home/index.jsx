import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as S from "./index.styles";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components/commonStyles/headings";
import NewsSlider from "../../components/newsSlider";
import { Row, Col } from "react-bootstrap";
import Speaker from "../../components/speaker";
import StarryBackground from "../../components/stars";

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

export function AnimatedLight() {
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

function SphereScene() {
  return (
    <Canvas className="fade-in">
      <AnimatedLight />
      <RotatingSphere position={[0, 0, 3]} />
    </Canvas>
  );
}

export default function Home() {
  return (
    <>
      <StarryBackground />
      <div className="h-100 d-flex justify-content-center flex-column">
        <div className="w-100 d-flex justify-content-center">
          <div className="text-center mx-auto mt-3  main-heading-home">
            <S.Heading className="d-flex justify-content-center align-items-center">
              <span className="glow me-2">-</span>REWRITING THE RULES OF
              ENTERTAINMENT
              <span className="glow ms-2">-</span>
            </S.Heading>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center position-relative">
          <SphereScene />
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div className="text-center w-75 mx-auto subheading-home">
            <S.SubHeading className="">
              One star at a time<span className="glow">.</span>
            </S.SubHeading>
          </div>
        </div>
        <Row className="home-content w-100 m-0 d-flex justify-content-center">
          <NewsSlider />
          <Col
            xs={12}
            lg={6}
            xl={5}
            className="d-flex justify-content-center align-items-center p-0 my-4"
          >
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <S.Heading className="d-flex justify-content-center align-items-center position-relative">
                  <span className="glow me-2">-</span>JOIN THE TROOP
                  <span className="glow ms-2">-</span>
                </S.Heading>
              </div>
              <Speaker />
              <div className="d-flex justify-content-center">
                <SubHeading className="pt-3 fs-6">
                  WANT US TO KEEP YOU IN THE LOOP?
                </SubHeading>
              </div>
              <Link
                to="/join"
                className="d-flex justify-content-center flex-column text-decoration-none"
              >
                <S.JoinButton className="mt-3">JOIN US</S.JoinButton>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
