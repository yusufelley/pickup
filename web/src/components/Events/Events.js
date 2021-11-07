import React, { useState } from "react";
import "./Events.css";
import div from "../UI/Card";
import EventFilter from "./EventFilter";
import EventsList from "./EventsList";

const Events = (props) => {
  const [year, setYear] = useState("2021");

  const saveYearData = (yearData) => {
    setYear(yearData);
  };

  const filteredExpenses = props.items.filter(
    (expensesByYear) => expensesByYear.date.getFullYear().toString() === year
  );

  return (
    <div className="card-backdrop">
      <div className="expenses">
        <EventFilter selectedYear={year} onYearChangeData={saveYearData} />

        <div className="events-container">
          <EventsList items={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Events;
