import "./EventsList.css";
import EventItem from "./EventItem";

const EventsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No items found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <EventItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default EventsList;
