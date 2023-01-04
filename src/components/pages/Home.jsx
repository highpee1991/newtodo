import Header from "../header/Header";
import ToDoList from "../todoItem/ToDoList";
import SideBar from "./../sidebar/SideBar";
import dummyData from "../dummyData";
import { useState, useEffect } from "react";
import ToDoForm from "../todoItem/toDoForm/ToDoForm";
import "./home.css";

function Home() {
  const [toDoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("toDoListItem")) || dummyData
  );
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    localStorage.setItem("toDoListItem", JSON.stringify(toDoList));
  }, [toDoList]);

  const handleToggle = (id) => {
    const mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });

    setTodoList(mapped);
  };

  const handleFilter = () => {
    const filterItem = toDoList.filter((task) => !task.completed);
    setTodoList(filterItem);
  };

  const deleteItem = (id) => {
    const filterItem = toDoList.filter((task) => task.id !== id);

    setTodoList(filterItem);
  };

  const addTask = () => {
    let copy = [...toDoList];

    copy = [
      ...copy,
      { id: toDoList.length + 1, value: userInput, completed: false },
    ];
    setTodoList(copy);
  };

  return (
    <div className="main-wrapper">
      {/* <div className="side-view">
        <SideBar />
      </div> */}
      <div className="main-view">
        <div className="main-input">
          <Header />
          <ToDoForm
            addTask={addTask}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        </div>

        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          handleDelete={deleteItem}
        />
      </div>
    </div>
  );
}

export default Home;
