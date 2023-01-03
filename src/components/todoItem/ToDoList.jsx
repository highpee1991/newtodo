import React, { useState } from "react";
import "./toDoList.css";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter, handleDelete }) => {
  return (
    <div className="todoList">
      {toDoList.map((toDo) => (
        <ToDo
          toDo={toDo}
          handleToggle={() => handleToggle(toDo.id)}
          handleDelete={() => handleDelete(toDo.id)}
          key={toDo.id}
        />
      ))}
      <button className="btn-clear" onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
