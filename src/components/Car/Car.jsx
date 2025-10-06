import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping, BackSide } from "three";
import { useRef, useState } from "react";
import asphaltImg from "/textures/asphalt_road.png";

export default function Car() {
  const { scene } = useGLTF("/models/MclarenSenna.glb");
  const ref = useRef();
  const skyRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState("white");

  // === Текстура дороги ===
  const texture = useLoader(TextureLoader, asphaltImg);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 20);
  texture.anisotropy = 4;

  // === Фон (панорама леса) ===
  const forestTexture = useLoader(TextureLoader, "/textures/forest.jpg");
  forestTexture.wrapS = forestTexture.wrapT = RepeatWrapping;

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      // движение дороги
      texture.offset.y -= delta * 0.1;

      //   покачивание,подпрыгивание машины
      const t = state.clock.getElapsedTime();
      ref.current.position.x = Math.sin(t * 1) * 0.6; // лёгкое покачивание
      ref.current.position.y = 0.4 + Math.abs(Math.sin(t * 3)) * 0.07; // подпрыгивание

      ref.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(color);
          child.material.emissiveIntensity = hovered ? 0.5 : 0;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      // движение фона
      if (skyRef.current) {
        // медленное вращение сферы вокруг Y
        skyRef.current.rotation.y += delta * 0.08;
      }
    }
  });

  return (
    <>
      {/* 🌲 Панорамный фон */}
      <mesh ref={skyRef} scale={1}>
        <sphereGeometry args={[15, 24, 24]} />
        <meshBasicMaterial
          map={forestTexture}
          side={BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* 🚗 Машина */}
      <primitive
        ref={ref}
        object={scene}
        scale={1.5}
        position={[0, 0.4, 0]}
        rotation-y={-Math.PI / 4}
        castShadow
        onClick={() => setColor(getRandomColor())}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      {/* 🛣️ Дорога */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, -50]} receiveShadow>
        <planeGeometry args={[10, 1000]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}
