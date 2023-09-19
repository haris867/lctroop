import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/MgXL98zGtzUOxnsm/scene.splinecode"
  );
  return (
    <>
      <group {...props} dispose={null}>
        <scene name="Scene">
          <directionalLight
            name="Directional Light Main"
            intensity={1.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-412.853}
            shadow-camera-right={412.853}
            shadow-camera-top={412.853}
            shadow-camera-bottom={-412.853}
            position={[-549.14, 336.02, 456]}
          />
          <directionalLight
            name="Directional Light Blue"
            intensity={10}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            color="#ffd700"
            position={[-280.39, 278.48, -462]}
          />
          <directionalLight
            name="Directional Light Red"
            intensity={10}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            color="#ffd700"
            position={[494.64, 170.18, -462]}
          />
          <group name="male_tshirt">
            <mesh
              name="male_tshirt1"
              geometry={nodes.male_tshirt1.geometry}
              material={materials.tshirt}
              castShadow
              receiveShadow
              position={[3.19, 41.43, -3.94]}
              rotation={[0, 0.4, 0]}
              scale={[1.02, 1, 1.02]}
            />
          </group>
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
            zoom={0.4}
            position={[-1, 0, 100]}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
}

export default function Shirt() {
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
          minAzimuthAngle={Math.PI / 4 - 1.5}
          maxAzimuthAngle={Math.PI / 4 + 0.5}
          rotateSpeed={0.1}
        />
      </Canvas>
    </Suspense>
  );
}
