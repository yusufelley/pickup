import "./Header.css";
import { FaCog } from "react-icons/fa";
import { MdSportsVolleyball } from "react-icons/md";
import { useState } from "react";
import Settings from "./Settings";

const Header = () => {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div>
      {showSettings ? <Settings setShowSettings={setShowSettings}/> :
      <header className="header-container">
        <div className="logo-container">
          <span>
            <MdSportsVolleyball className="icon"></MdSportsVolleyball>
          </span>
          <h4 className="logo">Pocket Pick-Up</h4>
        </div>
        <div>
          <span>
            <div onClick = {() => setShowSettings(!showSettings)}>
            <FaCog className="button"></FaCog>
            </div>
          </span>
        </div>
      </header>}
    </div>
  );
};

export default Header;
