import React, { useState } from "react";
import "./EventForm.css";

const EventForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangedHandler = (event) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangedHandler = (event) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangedHandler = (event) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, date: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    props.onSaveFormData(formData);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  const onCancel = () => {
    props.cancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            required
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            required
            value={userInput.amount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-08-11"
            max="2023-01-01"
            value={userInput.date}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default EventForm;
