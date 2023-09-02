import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene({ ...props }) {
  const { nodes, materials } = useSpline("/assets/envelope-yellow.spline");

  return (
    <>
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group name="Envelope" position={[0, 0, 0]}>
            <mesh
              name="Rectangle 4"
              geometry={nodes["Rectangle 4"].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[-1.46, -0.13, 1.17]}
              scale={0.86}
            />
            <mesh
              name="Rectangle 3"
              geometry={nodes["Rectangle 3"].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[-1.46, 11.47, 1.17]}
              scale={0.86}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-1.01, -6.23, -2.44]}
              scale={0.86}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              castShadow
              receiveShadow
              position={[0, -22.94, 9.25]}
              scale={0.86}
            />
          </group>
          {/* <directionalLight
            name="Directional Light"
            castShadow
            intensity={12.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[0, 11, -10]}
          /> */}
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
            position={[-193.5, 390.79, 964.96]}
          />
          <directionalLight
            name="Directional Light 1"
            intensity={5}
            position={[-20, 30, -10]}
            color={0xffd700}
          />
          <directionalLight
            name="Directional Light 2"
            intensity={5}
            position={[20, 30, -10]}
            color={0xffd700}
          />
        </scene>
      </group>
    </>
  );
}

export default function Envelope() {
  return (
    <Suspense fallback={null}>
      <Canvas flat linear>
        <Scene />
        <OrbitControls
          enablePan={false}
          enableRotate={true}
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.3}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          rotateSpeed={0.1}
        />
      </Canvas>
    </Suspense>
  );
}
