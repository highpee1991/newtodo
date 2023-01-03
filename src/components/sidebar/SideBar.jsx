import React from "react";
import "./sideBar.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FaHome, FaAddressBook, FaRegNewspaper } from "react-icons/fa";

const Header = () => {
  return (
    <div className="side-bar">
      <div className="sidebar-title">
        <Link to="/">
          <FaHome /> <span className="title">Home</span>
        </Link>
      </div>
      <div className="sidebar-title">
        <Link to="about">
          <FaAddressBook /> <span className="title">About</span>
        </Link>
      </div>
      <div className="sidebar-title news">
        <Link to="news-letter">
          <FaRegNewspaper /> <span className="title">Newsletter</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
