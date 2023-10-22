import { useState } from "react";
import "./CheckIn.css";

const CheckIn = () => {
  const [formData, setFormData] = useState({});
  const handleChange = () => {};
  const handleSubmit = (e) => {};

  return (
    <div className="checkin-outer">
      <div className="checkin-inner">
        <form className="checkin-form">
          <div className="form-group">
            <h2>Rate how you're feeling today</h2>
            <input
              min="1"
              max="10"
              type="number"
              required
              className="form-input-num"
            />
          </div>

          <div className="form-group">
            <h2>Rate how you're feeling this week</h2>
            <input required type="number" className="form-input-num" />
          </div>

          <div className="form-group">
            <h2>List three things that went well today</h2>
            <input required type="text" className="form-input" />
          </div>

          <div className="form-group">
            <h2>List three things from today that you could improve</h2>
            <input required type="text" className="form-input" />
          </div>

          <div className="form-group">
            <h2>List three things from today that you could improve</h2>
            <input required type="text" className="form-input" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default CheckIn;
