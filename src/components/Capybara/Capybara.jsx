export default function Capybara() {
  return (
    <group>
      {/* Тело */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="#a87c5b" />
      </mesh>
      {/* Голова */}
      <mesh position={[2, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#a87c5b" />
      </mesh>
      {/* Лапы */}
      <mesh position={[-1, -0.5, 0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#a87c5b" />
      </mesh>
      <mesh position={[-1, -0.5, -0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#a87c5b" />
      </mesh>
      {/* Хвост */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#a87c5b" />
      </mesh>
    </group>
  );
}
