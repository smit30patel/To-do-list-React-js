import React, { useState } from "react";
import "../App.css";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="to-do">
      <h1>To-do list With React Js</h1>
      <div className="to-do-inner">
        <input
          type="text"
          className="input-to-do"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
