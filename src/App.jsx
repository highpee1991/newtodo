import "./App.css";
import Header from "./components/header/Header";
import ToDoList from "./components/todoItem/ToDoList";
import SideBar from "./components/sidebar/SideBar";
import dummyData from "./components/dummyData";
import { useEffect, useState } from "react";
import ToDoForm from "./components/todoItem/toDoForm/ToDoForm";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Newsletter from './components/pages/newletter/Newsletter'

function App() {
  return (
    <div className="App">
      <div className="side-view">
        <SideBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="news-letter" element={<Newsletter />} />
      </Routes>
    </div>
  );
}

export default App;