import "../05-useLayoutEffect/effects.css";
import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const offset = 5;
  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (offset) => {
      setCounter((e) => e + offset);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback Hooks {counter}</h1>
      <hr />

      <ShowIncrement offset={offset} increment={increment} />
    </div>
  );
};
