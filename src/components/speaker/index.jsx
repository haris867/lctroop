import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene({ ...props }) {
  const { nodes, materials } = useSpline("/assets/speaker-yellow.spline");

  return (
    <>
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group name="Speaker" position={[0, 20, -10]} scale={1}>
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.main}
              castShadow
              receiveShadow
              position={[-34.6, -33.58, -16.95]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.main}
              castShadow
              receiveShadow
              position={[-36.48, 3.98, -16.72]}
              rotation={[-Math.PI, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Cylinder 2"
              geometry={nodes["Cylinder 2"].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[35.32, 5.85, -11.84]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials.main}
              castShadow
              receiveShadow
              position={[57.31, 4.66, -15.06]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={0.73}
              color="red"
            />
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-15.66, 4.46, -14.16]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.73}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={2.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[10, 10, 10]}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={1.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[-10, 10, -10]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
            rotation={[-0.47, -0.52, -0.25]}
            position={[600, 0, 964.96]}
            zoom={0.7}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={1}
            color="#fff"
          />
        </scene>
      </group>
    </>
  );
}

export default function Speaker() {
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
