import EventDate from "./EventDate";
import Card from "../UI/Card";
import "./EventItem.css";
import CounterButton from "../CounterButton";
import { useState } from 'react'
import {FaMapMarkedAlt} from "react-icons/fa";

const EventItem = (props) => {

  const[hereToggled, setHereToggled] = useState(false)

  return (
    <Card className="expense-item">
    <EventDate sport={props.sport} />
    <div className="location"> <FaMapMarkedAlt/> {props.location} </div>
    <div className="eventProperties">
      <div className="startAndDuration">
        <p> Started at {props.time}</p>
        <p> Playing for {Math.floor(props.duration/60)}h; {props.duration%60}m</p>
      </div> 
      <div className="numsHereComing"> 
        <CounterButton/>
      </div>
    </div>
        
    </Card>
  );
};

export default EventItem;
