import { Todo } from "./Todo";

export const TodoList = ({ todos, onDelete, onDone }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((item, index) => {
        return (
          <Todo
            index={index}
            todo={item}
            key={item.id}
            onDelete={onDelete}
            onDone={onDone}
          />
        );
      })}
    </ul>
  );
};
