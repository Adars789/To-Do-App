
import React, { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>TO-DO APP</h1>
      <p>"This app is for all of your daily or weekly tasks that you could have in your life to achieve."</p>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onTodoClick={toggleTodo} />
      <button onClick={resetTodos} className="reset-button">
        Reset
      </button>
      {/* <div>
          <img src={img_todo.jpg}/> 
    </div> */}
    </div>
    
  );
}

export default App;
