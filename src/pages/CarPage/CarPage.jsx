import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "../../components/Car/Car";

export default function CarPage() {
  return (
    <Canvas
      style={{ width: "100vw", height: "90vh" }}
      camera={{ position: [3, 3, 6], fov: 46 }}
      shadows
    >
      <color attach="background" args={["#87CEEB"]} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 2, 2]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10} // зона покрытия теней
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight
        position={[2, 3, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Car />
      <OrbitControls />
    </Canvas>
  );
}
