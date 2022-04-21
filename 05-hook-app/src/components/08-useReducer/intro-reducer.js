const initialState = [
  {
    id: 1,
    todo: "Buy bread",
  },
];

const todoReducer = (state = initialState, action) => {
  let newState = [];
  switch (action?.type) {
    case "ADD":
      newState = [...state, action.payload];
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};

const newTodo = {
  id: 2,
  todo: "Buy milk",
};

const action = {
  type: "ADD",
  payload: newTodo,
};

let todos = todoReducer();
todos = todoReducer(initialState, action);
console.log(todos);
