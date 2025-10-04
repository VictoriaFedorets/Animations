import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import InteractiveObject from "../../components/InteractiveObject/InteractiveObject";

export default function PlaygroundPage() {
  const [objects, setObjects] = useState([
    { id: 1, type: "cube", position: [-2, 0, 0] },
    { id: 2, type: "sphere", position: [2, 0, 0] },
  ]);

  const addObject = () => {
    const id = objects.length + 1;
    const type = Math.random() > 0.5 ? "cube" : "sphere";
    const x = (Math.random() - 0.5) * 6;
    const z = (Math.random() - 0.5) * 6;
    setObjects([...objects, { id, type, position: [x, 0, z] }]);
  };

  return (
    <>
      <button
        onClick={addObject}
        style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
      >
        Add Object
      </button>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 3]} intensity={1} />
        <OrbitControls />
        {objects.map((obj) => (
          <InteractiveObject
            key={obj.id}
            type={obj.type}
            position={obj.position}
          />
        ))}
      </Canvas>
    </>
  );
}
