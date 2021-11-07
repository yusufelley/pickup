import React, { useEffect, useState } from "react";
import "./Events.css";
import Card from "../UI/Card";
import EventFilter from "./EventFilter";
import EventsList from "./EventsList";

const Events = (props) => {
  const [sport, setSport] = useState("Choose sport");

  const saveSportData = (sportData) => {
    setSport(sportData);
  };
  useEffect(() => {
    saveSportData("none");
  }, []);

  //This filters by the chosen sport
  const filteredEvents = props.items.filter((event) => {
    console.log(`props.items: ${props.items}`);
    if (sport === "none") return true;
    else {
      return event.sport === sport;
    }
  });
  return (
    <div>
      <Card className="expenses">
        <EventFilter selectedSport={sport} onSportChangeData={saveSportData} />
        <EventsList items={filteredEvents} />
      </Card>
    </div>
  );
};

export default Events;
