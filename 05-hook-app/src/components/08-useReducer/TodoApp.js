import { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { init, toDoReducer } from "./todoReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(toDoReducer, [], init);

  const [{ description: desc }, handleChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    const todosSaved = JSON.stringify(todos);
    localStorage.setItem("todos", todosSaved);
  }, [todos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!desc) {
      return;
    }
    const task = {
      id: new Date().getTime(),
      desc,
      done: false,
    };
    reset();
    dispatch({ type: "ADD", payload: task });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const onDone = (id) => {
    dispatch({ type: "DONE", payload: id });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <p
                    onClick={() => onDone(item.id)}
                    className={`text-center ${item.done && "completed"}`}
                  >
                    {index + 1}. {item.desc}
                  </p>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-5">
          <h4>Add task</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Learn..."
              autoComplete="off"
              onChange={handleChange}
              value={desc}
            />

            <button className="btn btn-outline-primary btn-block mt-3">
              Add new Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};