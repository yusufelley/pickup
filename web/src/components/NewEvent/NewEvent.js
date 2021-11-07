import "./NewEvent.css";
import EventForm from "./EventForm";
import { useState } from "react";

const NewEvent = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveFormDataHandler = (formData) => {
    formData = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onAddExpense(formData);
    setIsAdding(false);
  };

  const isAddingHandler = () => {
    setIsAdding(true);
  };

  const onCancelParent = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={isAddingHandler}>Start something!</button>}
      {isAdding && (
        <EventForm
          onSaveFormData={saveFormDataHandler}
          cancel={onCancelParent}
        />
      )}
    </div>
  );
};

export default NewEvent;
