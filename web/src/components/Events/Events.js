import React, { useState } from "react";
import "./Events.css";
import Card from "../UI/Card";
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
    <div>
      <Card className="expenses">
        <EventFilter selectedYear={year} onYearChangeData={saveYearData} />
        <EventsList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Events;
