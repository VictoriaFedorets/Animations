import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Plane() {
  // useRef — ссылка на объект, чтобы вращать каждый кадр
  const planeRef = useRef();

  // Простая анимация — лёгкие волны на плоскости
  useFrame((state, delta) => {
    if (planeRef.current) {
      planeRef.current.rotation.z += delta * 0.2; // плавное вращение
    }
  });

  return (
    <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      {/* Аргументы PlaneGeometry — ширина, высота, сегменты */}
      <planeGeometry args={[3, 3, 10, 10]} />
      <meshStandardMaterial color="lightblue" wireframe={false} />
    </mesh>
  );
}
