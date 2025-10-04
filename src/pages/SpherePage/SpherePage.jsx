import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "../../components/Sphere/Sphere";

export default function SpherePage() {
  return (
    <Canvas style={{ width: "100vw", height: "90vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 5]} intensity={1} />
      <Sphere />
      <OrbitControls />
    </Canvas>
  );
}
