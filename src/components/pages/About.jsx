import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-title">
        <h1 className="about-this-app">About App</h1>
        <div className="about abt">
          This app is created to keep track of to do list and keep record untill
          removed or deleted. This app will help you keep track of your daily
          activities in order to be efficient with task
        </div>
      </div>
      <h3 className="who about-this-app">Who is this app for</h3>
      <div className="app-for abt">
        This app is for
        <ul>
          <li>developers</li>
          <li>Bankers</li>
          <li>
            Individual that need to keep track of their daily activities for
            efficiency
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
