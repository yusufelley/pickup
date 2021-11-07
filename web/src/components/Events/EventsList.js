import "./EventsList.css";
import EventItem from "./EventItem";

const EventsList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Nothing Going On...Start Something!.
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((event) => (
        <EventItem
          sport={event.sport}
          location={event.location}
          time={event.time}
          duration={event.duration}
        />
      ))}
    </ul>
  );
};

export default EventsList;
