import { useRef } from "react";
import "./effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Your name"
      />
      <button onClick={handleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
};
