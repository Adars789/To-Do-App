
import React from "react";

function TodoItem({ text, completed }) {
  return (
    <ol class="order" type="1">
    <li className={completed ? "completed" : ""}>
      {text}
    </li></ol>
  );
}

export default TodoItem;
