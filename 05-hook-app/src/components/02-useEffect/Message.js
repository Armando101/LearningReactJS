import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>My Message</h1>
      <p>
        x: {x}, y: {y}
      </p>
    </div>
  );
};
