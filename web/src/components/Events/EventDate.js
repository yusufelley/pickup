import "./EventDate.css";


const EventDate = (props) => {
  const name = props.sport;

  return (
    <div className="expense-date">
      <div className="expense-date__name">{name}</div>
    </div>
  );
};

export default EventDate;
