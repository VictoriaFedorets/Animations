import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Capybara from "../../components/Capybara/Capybara";

export default function CapybaraPage() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1} />
      <OrbitControls />
      <Capybara />
    </Canvas>
  );
}
