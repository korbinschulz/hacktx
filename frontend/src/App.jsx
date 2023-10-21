import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from './utils/LoginComponent';
import SignUpComponent from "./utils/SignUpComponent";

const App = () => {
  return (
    <div className="app-outer">
      <Router>
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route path ='/signUp' element={<SignUpComponent />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
