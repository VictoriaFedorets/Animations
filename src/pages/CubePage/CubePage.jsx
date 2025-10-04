import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../../components/Cube/Cube";

export default function CubePage() {
  return (
    <Canvas style={{ width: "100vw", height: "90vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 5]} intensity={1} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}
