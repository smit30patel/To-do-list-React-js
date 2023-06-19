import React, { useState } from "react";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
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
          onKeyPress={handleKeypress}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="to-do-ul">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <DeleteIcon
                className="delete-icon"
                onClick={() => handleRemoveTodo(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
