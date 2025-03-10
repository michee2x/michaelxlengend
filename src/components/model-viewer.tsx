"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const ModelViewer: React.FC = () => {
  const myModel = useLoader(GLTFLoader, "/model/1000_followers_v.glb");

  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
      <primitive object={myModel.scene} />
    </Canvas>
  );
};

export const Model = () => {
  // location of the 3D model
  const gltf = useLoader(
    GLTFLoader,
    "/public/free__lamborghini_terzo_millennio_wind_tunnel/scene.gltf"
  );
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={0.01} />
    </>
  );
};
