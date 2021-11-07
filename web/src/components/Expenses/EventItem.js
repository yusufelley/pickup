import EventDate from "./EventDate";
import Card from "../UI/Card";
import "./EventItem.css";

const EventItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <EventDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default EventItem;
