import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import monkey from "../../assets/3d/monkey.glb";
import { useIsMobile } from "../../hooks";

const Monkey3d = () => {
  const { isMobile } = useIsMobile();
  const gltf = useLoader(GLTFLoader, monkey);
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });
  
  return (
    <>
      {isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} />}
      <primitive object={gltf.scene} scale={isMobile ? 0.5 : 0.1} ref={ref} />
    </>
  );
};

export default Monkey3d;
