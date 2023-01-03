import React, { useState } from "react";
import "./toDo.css";
import { FaRegTrashAlt } from "react-icons/fa";

const ToDo = ({ toDo, handleToggle, handleDelete }) => {
  return (
    <div className={`data ${toDo.completed ? "complete" : "uncomplete"}`}>
      <input
        type="checkbox"
        name="toDo"
        id="toDo-list-item"
        checked={toDo.completed}
        onChange={handleToggle}
        className="check"
      />
      {/* the toDo.value is managing the input value and been used in the toDoList */}
      <label htmlFor="toDo-list-item" className="todoList-value">
        {toDo.value}
      </label>
      <FaRegTrashAlt className="delete" onClick={handleDelete} />
    </div>
  );
};

export default ToDo;
