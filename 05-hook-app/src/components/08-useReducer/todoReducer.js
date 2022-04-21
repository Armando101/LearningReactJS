export function toDoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
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
