import { useForm } from "../../hooks/useForm";

export const NewTask = ({ handleAddTodo }) => {
  const [{ description: desc }, handleChange, reset] = useForm({
    description: "",
  });

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
    handleAddTodo(task);
  };

  return (
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
  );
};
