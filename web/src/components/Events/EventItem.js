import EventDate from "./EventDate";
import Card from "../UI/Card";
import "./EventItem.css";

const EventItem = (props) => {
  console.log(props);
  return (
    <li>
      <Card className="expense-item">
        {/* <EventDate date={props.duration} /> */}
        <h2>{props.sport}</h2>
        <div className="expense-item__description">
          <h2>{props.location}</h2>
          <div className="expense-item__price">${props.time}</div>
        </div>
      </Card>
    </li>
  );
};

export default EventItem;
