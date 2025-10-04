import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WavyPlane() {
  const mesh = useRef();

  // создаём плоскость с множеством сегментов
  const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);
  const material = new THREE.MeshStandardMaterial({
    color: "#00ffff",
    wireframe: true, // чтобы видеть сетку (как ткань)
  });

  // анимация вершин
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      // задаём волну как sin(x + t) * cos(y + t)
      const z = Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time) * 0.5;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      material={material}
      rotation-x={-Math.PI / 2}
    />
  );
}
