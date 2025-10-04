import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WavyPlane from "../../components/WavyPlane/WavyPlane";

export default function WavyPage() {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50 }}
      style={{ width: "100vw", height: "90vh" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 3]} />
      <WavyPlane />
      <OrbitControls />
    </Canvas>
  );
}
