import { useEffect, useState } from "react";

export default function useCustomPointer(newPointer) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const style = {
    left: position.x,
    top: position.y,
  };

  return (
    <span className="customPointer" style={style}>
      {newPointer}
    </span>
  );
}
