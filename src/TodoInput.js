
import React, { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      onAddTodo(inputText);
      setInputText("");
    }
  };

  return (
    <div className="todo-input">
      <input class="todo"
        type="text"
        placeholder="Add your TO-DO's..."
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
      />
      <button class="button" onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
