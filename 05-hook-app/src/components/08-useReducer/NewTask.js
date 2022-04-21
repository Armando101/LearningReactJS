export const NewTask = ({ handleSubmit, handleChange, desc }) => {
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
