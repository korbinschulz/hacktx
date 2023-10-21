import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from './utils/LoginComponent';
import SignUpComponent from "./utils/SignupComponent";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <div className="app-outer">
      <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route path ='/signUp' element={<SignUpComponent />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
