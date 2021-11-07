import EventDate from "./EventDate";
import Card from "../UI/Card";
import "./EventItem.css";
import CounterButton from "../CounterButton";
import { useState } from 'react'

const EventItem = (props) => {

  const[hereToggled, setHereToggled] = useState(false)

  return (
    <Card className="expense-item">
    <EventDate date={props.date} />
    <div className="location"> locationName </div>
    <div className="eventProperties">
      <div className="startAndDuration">
        <p> Started at ____</p>
        <p> Playing for ____</p>
      </div> 
      <div className="numsHereComing"> 
        <CounterButton text = {"Here"} hereToggled={hereToggled} setHereToggled={setHereToggled}/>
        <CounterButton text = {"Coming"} hereToggled={hereToggled} setHereToggled={setHereToggled}/>
      </div>
    </div>
        
    </Card>
  );
};

export default EventItem;
