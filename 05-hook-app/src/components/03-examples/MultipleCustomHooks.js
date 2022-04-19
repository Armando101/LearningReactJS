import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, error, loading } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(data, error, counter);
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Breaking bad Quotes</h1>

      <hr />
      {loading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}

      <blockquote className="blockquote text-right">
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <button onClick={() => increment()} className="btn btn-primary">
        Next quote
      </button>
    </div>
  );
};
