import React from "react";
import "./sideBar.css";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaAddressBook, FaRegNewspaper } from "react-icons/fa";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="side-bar">
      <div className="sidebar-title">
        <Link to="/">
          <FaHome
            className={pathname === "/" ? "active-logo" : "non-active-logo"}
          />{" "}
          <span className={pathname === "/" ? "active" : "non-active"}>
            Home
          </span>
        </Link>
      </div>
      <div className="sidebar-title">
        <Link to="about">
          <FaAddressBook
            className={
              pathname === "/about" ? "active-logo" : "non-active-logo"
            }
          />{" "}
          <span className={pathname === "/about" ? "active" : "non-active"}>
            About
          </span>
        </Link>
      </div>
      <div className="sidebar-title news">
        <Link to="news-letter">
          <FaRegNewspaper
            className={
              pathname === "/news-letter" ? "active-logo" : "non-active-logo"
            }
          />{" "}
          <span
            className={pathname === "/news-letter" ? "active" : "non-active"}
          >
            Newsletter
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
