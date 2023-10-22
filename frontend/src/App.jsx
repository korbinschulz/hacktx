import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./containers/Home/Home";
import LoginComponent from "./utils/LoginComponent";
import SignUpComponent from "./utils/SignUpComponent";
import Affirmations from "./containers/Affirmations/Affirmations";
import CheckIn from "./containers/CheckIn/CheckIn";

const App = () => {
  return (
    <div className="app-outer">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signUp" element={<SignUpComponent />} />
          <Route path="/Affirmations" element={<Affirmations />} />
          <Route path="/CheckIn" element={<CheckIn />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
