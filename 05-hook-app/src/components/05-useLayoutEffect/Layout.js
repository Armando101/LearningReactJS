import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./effects.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breaking bad Quotes</h1>

      <hr />
      {loading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}

      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 2)}</pre>

      <button onClick={() => increment()} className="btn btn-primary">
        Next quote
      </button>
    </div>
  );
};
