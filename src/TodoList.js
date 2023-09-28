
import React from "react";

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className="todo-list" type="none">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
