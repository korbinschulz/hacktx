import "./Nav.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHardHat } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-outer">
      <div className="nav-left">
        <FaHardHat className="homepage-icon" fontSize={"32px"} color="white" />
        <p>Constructive Minds</p>
      </div>
      <GiHamburgerMenu
        className="homepage-icon"
        onClick={handleMenuClick}
        fontSize={"32px"}
      />
      {isOpen && (
        <div className="nav-popout">
          <p className="popout-text">Daily Check In</p>
          <p className="popout-text">View Progress</p>
          <p className="popout-text">Mental Health Goals</p>
          <p className="popout-text">Daily Affirmations</p>
          <p className="popout-text">Emergency Helpline</p>
        </div>
      )}
    </div>
  );
};

export default Nav;
