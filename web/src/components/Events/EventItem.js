import EventDate from "./EventDate";
import Card from "../UI/Card";
import "./EventItem.css";
import CounterButton from "../CounterButton";
import { useState } from "react";

const EventItem = (props) => {
  const [hereToggled, setHereToggled] = useState(false);

  return (
    <Card className="expense-item">
      <EventDate sport={props.sport} />
      <div className="location"> {props.location} </div>
      <div className="eventProperties">
        <div className="startAndDuration">
          <p> Started At- {props.time}</p>
          <p className="playing">
            {" "}
            Playing For-{Math.floor(props.duration / 60)}h and{" "}
            {props.duration % 60}m
          </p>
        </div>
        <div className="numsHereComing">
          <CounterButton
            text={"Here"}
            hereToggled={hereToggled}
            setHereToggled={setHereToggled}
          />
          <CounterButton
            text={"Coming"}
            hereToggled={hereToggled}
            setHereToggled={setHereToggled}
          />
        </div>
      </div>
    </Card>
  );
};

export default EventItem;
