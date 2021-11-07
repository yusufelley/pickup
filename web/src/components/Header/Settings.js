import React, { useState } from "react";
import "./Settings.css";

const Settings = (props) => {
  const [userInput, setUserInput] = useState({
    Email: "",
    Password: "",
  });

  const emailAddedHandler = (setting) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, Email: setting.target.value };
    });
  };

  const Handler = (setting) => {
    setUserInput((prevState) => {
      // Best practice to use prevState when you rely on the previous state
      return { ...prevState, Password: setting.target.value };
    });
  };

  return (
    <div className="Settings">
      <span>
        <div className="closeButton">
          <div onClick={() => props.setShowSettings(false)}>Close</div>
        </div>
      </span>
      <div className="Account">
        <h2>Account</h2>
        <div class="emai;"></div>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Enter email"></input>
        <div class="password"></div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
        ></input>
      </div>
      <div className="Preferences">
        <h2>Preferences</h2>
        <select>
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

      <span>
        <div className="Submit">
          <div onClick={() => props.setShowSettings(false)}>Submit</div>
        </div>
      </span>
    </div>
  );
};

export default Settings;
