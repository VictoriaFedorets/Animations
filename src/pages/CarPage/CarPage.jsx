import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "../../components/Car/Car";

export default function CarPage() {
  return (
    <Canvas
      style={{ width: "100vw", height: "90vh", background: "#20232a" }}
      camera={{ position: [0, 2, 4], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <spotLight position={[2, 3, 5]} angle={0.3} intensity={1} castShadow />
      <Car />
      <OrbitControls />
    </Canvas>
  );
}
