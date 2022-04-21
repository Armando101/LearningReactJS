import { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import { NewTask } from "./NewTask";
import "./styles.css";
import { TodoList } from "./TodoList";
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
          <TodoList todos={todos} onDelete={onDelete} onDone={onDone} />
        </div>

        <div className="col-5">
          <h4>Add task</h4>
          <hr />
          <NewTask
            desc={desc}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
