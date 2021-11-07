import React from "react";
import "./EventFilter.css";

const EventFilter = (props) => {
  const sportChangeHandler = (event) => {
    props.onSportChangeData(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="selectSport">Select Sport</label>
        <select value={props.selectedSport} onChange={sportChangeHandler}>
          <option value="none" defaultValue>
            All Sports
          </option>
          <option value="Basketball">Basketball</option>
          <option value="Soccer">Soccer</option>
          <option value="Football">Football</option>
          <option value="Volleyball">Volleyball</option>
          <option value="Quidditch">Quidditch</option>
          <option value="Rugby">Rugby</option>
        </select>
      </div>
    </div>
  );
};

export default EventFilter;
