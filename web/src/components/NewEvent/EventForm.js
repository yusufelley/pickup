import React, { useState } from "react";
import "./EventForm.css";

const EventForm = (props) => {
  const [userInput, setUserInput] = useState({
    sport: "",
    location: "",
    duration: "",
  });

  const sportChangedHandler = (event) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, sport: event.target.value };
    });
  };

  const locationChangedHandler = (event) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, location: event.target.value };
    });
  };

  const durationChangedHandler = (event) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, duration: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    var today = new Date();

    const formData = {
      ...userInput,
      time:
        ((today.getHours() + 11) % 12) +
        1 +
        ":" +
        (today.getMinutes() / 10 < 1
          ? "0" + today.getMinutes
          : today.getMinutes),
    };

    props.onSaveFormData(formData);

    setUserInput({
      sport: "",
      location: "",
      duration: "",
    });
  };

  const onCancel = () => {
    props.cancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Sport/Event</label>
          <input
            type="text"
            value={userInput.sport}
            required
            onChange={sportChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={userInput.location}
            required
            onChange={locationChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Duration</label>
          <input
            type="number"
            min="15"
            max="120"
            value={userInput.duration}
            onChange={durationChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => {
            var today = new Date();
            console.log(
              ((today.getHours() + 11) % 12) + 1 + ":" + today.getMinutes()
            );
          }}
        >
          Start!
        </button>
      </div>
    </form>
  );
};

export default EventForm;
