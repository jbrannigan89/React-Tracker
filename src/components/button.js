import React from "react";
import "../app.css";
const button = (props) => {
  return (
    <button className="btns" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default button;
