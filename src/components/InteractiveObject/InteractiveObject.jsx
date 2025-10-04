import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function InteractiveObject({
  type = "cube",
  position = [0, 0, 0],
  color = "#e9a21e",
}) {
  const meshRef = useRef();
  const [objectColor, setObjectColor] = useState(color);
  const [hovered, setHovered] = useState(false);
  const [up, setUp] = useState(true);

  useFrame(() => {
    if (meshRef.current) {
      // вращение
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // подпрыгивание по Y
      if (up) meshRef.current.position.y += 0.01;
      else meshRef.current.position.y -= 0.01;

      if (meshRef.current.position.y > 1) setUp(false);
      if (meshRef.current.position.y < 0) setUp(true);
    }
  });

  const handleClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setObjectColor(randomColor);
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1} // увеличиваем при hover
    >
      {type === "cube" ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[0.8, 32, 32]} />
      )}
      <meshStandardMaterial color={objectColor} />
    </mesh>
  );
}
