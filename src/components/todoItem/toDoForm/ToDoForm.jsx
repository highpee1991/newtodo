import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import "./todoForm.css";

const ToDoForm = ({ addTask, userInput, setUserInput }) => {
  const handleChange = (e) => setUserInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task..."
          value={userInput}
          onChange={handleChange}
          className="input"
        />
        <button className="btn">
          <FaPlusSquare />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
