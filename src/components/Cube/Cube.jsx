import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cube() {
  // useState для хранения цвета куба
  const [color, setColor] = useState("#e9a21e");

  // useRef не нужен, потому что useFrame сразу даёт доступ к объекту через аргумент mesh
  let meshRef;

  // useFrame вызывается каждый кадр (анимация)
  useFrame((state, delta) => {
    if (meshRef) {
      meshRef.rotation.x += 0.01; // вращение по X
      meshRef.rotation.y += 0.01; // вращение по Y
    }
  });

  // Функция обработки клика
  const handleClick = () => {
    // при клике меняем цвет на случайный
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <mesh
      ref={(ref) => (meshRef = ref)} // сохраняем ссылку на объект
      onClick={handleClick} // обработчик клика
      rotation={[0.4, 0.2, 0]} // стартовая ориентация куба
      position={[0, 0, 0]} // позиция в центре сцены
    >
      <boxGeometry args={[1, 1, 1]} /> {/* куб 1x1x1 */}
      <meshStandardMaterial color={color} />{" "}
      {/* материал с цветом из состояния */}
    </mesh>
  );
}
