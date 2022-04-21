import { useReducer } from "react";
import "./styles.css";
import { initialState, toDoReducer } from "./todoReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(toDoReducer, initialState);

  const onAddnewTask = () => {
    const task = {
      id: new Date().getTime,
      desc: "Learn Angular",
      done: false,
    };
    dispatch({ type: "ADD", payload: task });
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
                  <p className="text-center">
                    {index + 1}. {item.desc}
                  </p>
                  <button className="btn btn-danger">Delete</button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-5">
          <h4>Add task</h4>
          <hr />
          <form>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Learn..."
              autoComplete="off"
            />

            <button
              onClick={onAddnewTask}
              className="btn btn-outline-primary btn-block mt-1"
            >
              Add new Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
