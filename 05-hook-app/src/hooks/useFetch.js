/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({ loading: false, data, error: null });
      })
      .catch((error) => {
        setState({ loading: false, data: null, error });
      });
  }, [url]);

  return state;
};
