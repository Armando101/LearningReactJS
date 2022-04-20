import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <hr />
      <button
        onClick={() => setState({ ...state, counter1: counter1 + 1 })}
        className="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};
