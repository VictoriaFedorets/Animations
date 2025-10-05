import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";

export default function Car() {
  const { scene } = useGLTF("/models/MclarenSenna.glb");
  const ref = useRef();
  const wheelsRef = useRef([]);

  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState("white");

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  useEffect(() => {
    if (ref.current) {
      const wheels = [];
      ref.current.traverse((child) => {
        if (child.isMesh) {
          const box = new THREE.Box3().setFromObject(child);
          const size = new THREE.Vector3();
          box.getSize(size);

          // Фильтр колёс: низкие по Y и среднего размера
          if (
            child.position.y < 0 &&
            size.x > 0.05 &&
            size.z > 0.05 &&
            size.y < 0.1
          ) {
            wheels.push(child);
          }
        }
      });
      wheelsRef.current = wheels;
      console.log(
        "Найдены колёса:",
        wheelsRef.current.map((w) => w.name)
      );
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) {
      // медленное вращение всей машины вокруг Y
      ref.current.rotation.y += delta * 0.5;

      // вращение колёс
      wheelsRef.current.forEach((wheel) => {
        wheel.rotation.x += delta * 5;
      });

      // изменение цвета при клике и эмиссии при hover
      ref.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(color);
          child.material.emissiveIntensity = hovered ? 0.5 : 0;
        }
      });
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.5}
      position={[0, 0.5, 0]}
      onClick={() => setColor(getRandomColor())}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}
