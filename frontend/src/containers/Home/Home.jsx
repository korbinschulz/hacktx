import "./Home.css";
import { GoGoal } from "react-icons/go";
import { MdOutlineTipsAndUpdates, MdOutlineEmergency } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home-outer">
      <div className="home-inner">
        <button className="home-btn">
          <BsCalendarCheck fontSize={"32px"} color="white" />
          Daily Check In
        </button>
        <button className="home-btn">
          <GiProgression fontSize={"32px"} color="white" />
          View Progress
        </button>
        <button className="home-btn">
          <GoGoal fontSize={"32px"} color="white" />
          Mental Health Goals
        </button>
        <button className="home-btn">
          <MdOutlineTipsAndUpdates fontSize={"32px"} color="white" />
          Daily Affirmations
        </button>
        <button className="home-btn">
          <MdOutlineEmergency fontSize={"32px"} color="white" />
          Emergency Helpline
        </button>
      </div>
    </div>
  );
};
export default Home;
