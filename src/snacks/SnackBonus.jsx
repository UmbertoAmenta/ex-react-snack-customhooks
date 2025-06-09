import { useEffect, useState } from "react";

export default function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const pressedKey = (e) => {
      if (e.key === targetKey) setIsPressed(true);
    };

    const notPressedKey = (e) => {
      if (e.key === targetKey) setIsPressed(false);
    };

    window.addEventListener("keydown", pressedKey);
    window.addEventListener("keyup", notPressedKey);

    return () => {
      window.removeEventListener("keydown", pressedKey);
      window.removeEventListener("keyup", notPressedKey);
    };
  }, [targetKey]);

  return isPressed;
}
