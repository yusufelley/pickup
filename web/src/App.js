import React, { useState } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import NewEvent from "./components/NewEvent/NewEvent";
import Header from "./components/Header/Header";

const DUMMY_EXPENSES = [
  {
    sport: "Basketball",
    location: "Rec Center",
    time: "currTime",
    duration: 120,
  },
  {
    sport: "Soccer",
    location: "Rec Center",
    time: "currTime",
    duration: 60,
  },
  {
    sport: "Rugby",
    location: "Rec Center",
    time: "currTime",
    duration: 30,
  },
  {
    sport: "Basketball",
    location: "Northeast",
    time: "currTime",
    duration: 35,
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [events, setEvents] = useState(DUMMY_EXPENSES);

  const addEventHandler = (eventData) => {
    setEvents((prevEvents) => [eventData, ...prevEvents]);
  };
  return (
    <div>
      <Header></Header>
      <Events items={events} />
      <NewEvent onAddEvent={addEventHandler} />
    </div>
  );
};

export default App;
