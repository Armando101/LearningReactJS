export function toDoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "DONE":
      return markAsDone(state, action.payload);
    default:
      throw state;
  }
}

export const initialState = [
  {
    id: new Date().getTime(),
    desc: "Learn React",
    done: false,
  },
];

export const init = () => {
  const stateSaved = JSON.parse(localStorage.getItem("todos"));
  return stateSaved || initialState;
};

function markAsDone(data, id) {
  return data.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });
}
