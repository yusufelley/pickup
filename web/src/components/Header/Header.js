import "./Header.css";
import { FaCog } from "react-icons/fa";
import { MdSportsVolleyball } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="logo-container">
          <span>
            <MdSportsVolleyball className="icon"></MdSportsVolleyball>
          </span>
          <h4 className="logo">PickPocket</h4>
        </div>
        <div>
          <span>
            <FaCog className="button"></FaCog>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
