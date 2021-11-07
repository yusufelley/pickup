import React from "react";
import "./EventFilter.css";

const EventFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onYearChangeData(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select Year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default EventFilter;
