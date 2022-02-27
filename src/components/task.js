import React from "react";
import { FaTimes } from "react-icons/fa";
import "../task.css";

const Task = (props) => {
  return (
    <div className="task">
      <h3 className="xbutton">
        {props.task.text}
        <br></br>
        {props.task.day}
        <FaTimes
          className="deletebutton"
          onClick={() => props.Del(props.task.id)}
        />
      </h3>
    </div>
  );
};

export default Task;
