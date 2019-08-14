import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Components/Header/Header";

const App = () => {
  const socialIcons = [
    "fab fa-twitter",
    "fab fa-facebook-f",
    "fab fa-snapchat-ghost",
    "fab fa-instagram",
    "fab fa-medium-m"
  ];
  return (
    <div className="App">
      <Header logo="Editorial by HTML5 UP" socialIcons={socialIcons} />
    </div>
  );
};

export default App;
