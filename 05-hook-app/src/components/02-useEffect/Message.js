import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <h1>My Message</h1>
    </div>
  );
};
