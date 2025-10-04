import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sphere() {
  // useRef — ссылка на объект, чтобы вращать каждый кадр
  const meshRef = useRef();

  // useFrame — вызывается каждый кадр
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // вращаем вокруг Y
      meshRef.current.rotation.x += 0.005; // лёгкое вращение вокруг X
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} /> {/* радиус 0.8, сегменты */}
      <meshStandardMaterial color="#1ee9a2" /> {/* цвет */}
    </mesh>
  );
}
