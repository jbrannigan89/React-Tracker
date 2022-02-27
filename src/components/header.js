import React from "react";
import Button from "./button";
import "../app.css";

const header = (props) => {
  return (
    <header className="theHeader">
      <h1 class="header-title">{title}</h1>
      <div className="button-container">
        <Button onClick={props.showAdd} text="Add Task" />
      </div>
    </header>
  );
};

let title = "Task Tracker";

export default header;
