import "./Home.css";
import { GoGoal } from "react-icons/go";
import { MdOutlineTipsAndUpdates, MdOutlineEmergency } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-outer">
      <div className="home-inner">
        <button onClick={() => navigate("/CheckIn")} className="home-btn">
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
        <button onClick={() => navigate("/Affirmations")} className="home-btn">
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
