import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Plane from "../../components/Plane/Plane";

export default function PlanePage() {
  return (
    <Canvas
      camera={{ position: [0, 2, 4], fov: 60 }}
      style={{ width: "100vw", height: "90vh" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 5, 2]} intensity={1} castShadow />
      <Plane />
      <OrbitControls />
    </Canvas>
  );
}
