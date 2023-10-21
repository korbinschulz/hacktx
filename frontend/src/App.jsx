import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./containers/Home/Home";
import LoginComponent from "./utils/LoginComponent";
import SignUpComponent from "./utils/SignUpComponent";

const App = () => {
  return (
    <div className="app-outer">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signUp" element={<SignUpComponent />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
