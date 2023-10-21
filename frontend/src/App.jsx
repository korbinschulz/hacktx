import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <div className="app-outer">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
