import React, { useState } from "react";
import "./CounterButton.css";

const CounterButton = (props) => {
  const [count, setCount] = useState(0);
  const [toggled, toggle] = useState(false);
  return (
    <button
      onClick={() => {
        props.text === "Here" && toggled
          ? setCount(count - 1)
          : props.text === "Here"
          ? setCount(count + 1)
          : setCount(count - 1);
        toggle(!toggled);
      }}
      className={toggled ? "CounterButton toggled" : "CounterButton"}
    >
      <div className="buttonName"> {props.text} </div>
      <div className="buttonCounter"> {count} </div>
    </button>
  );
};

export default CounterButton;
