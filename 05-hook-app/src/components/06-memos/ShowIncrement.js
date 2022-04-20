import React from "react";

export const ShowIncrement = React.memo(({ increment, offset }) => {
  console.log("I was regenerated :(");
  return (
    <button
      onClick={() => {
        increment(offset);
      }}
      className="btn btn-primary"
    >
      Increment
    </button>
  );
});
