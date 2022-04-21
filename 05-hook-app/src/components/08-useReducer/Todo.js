import React from "react";

export const Todo = ({ index, todo, onDone, onDelete }) => {
  return (
    <li className="list-group-item">
      <p
        onClick={() => onDone(todo.id)}
        className={`text-center ${todo.done && "completed"}`}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
