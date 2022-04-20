import { useMemo, useState } from "react";
import { heavyProcess } from "../../helpers/heavyProcess";
import { useCounter } from "../../hooks/useCounter";
import "../05-useLayoutEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);

  const heavyMemoProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{heavyMemoProcess}</p>

      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary mx-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
