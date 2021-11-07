import React, { useState } from "react";
import "./CounterButton.css";

const CounterButton = (props) => {
    const [countHere, setCountHere] = useState(0);
    const [countComing, setCountComing] = useState(0);
    const [toggledHere, toggleHere] = useState(false);
    const [toggledComing, toggleComing] = useState(false);
    return (<div> <button  onClick={() => {if (toggledHere) {setCountHere(countHere - 1)} else {setCountHere(countHere + 1); if (toggledComing) {setCountComing(countComing - 1); toggleComing(!toggledComing)}}; toggleHere(!toggledHere);}} className={toggledHere ? "CounterButton toggled" : "CounterButton"}>
        <div className="buttonName"> Here </div>
        <div className="buttonCounter"> {countHere} </div>
    </button> 
    <button  onClick={() => {if (toggledComing) {setCountComing(countComing - 1)} else {setCountComing(countComing + 1); if (toggledHere) {setCountHere(countHere - 1); toggleHere(!toggledHere)}}; toggleComing(!toggledComing);}} className={toggledComing ? "CounterButton toggled" : "CounterButton"}>
        <div className="buttonName"> Coming </div>
        <div className="buttonCounter"> {countComing} </div>
    </button>
    </div>)
}

export default CounterButton;
