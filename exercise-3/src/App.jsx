import { useState } from "react";
import "./App.css";

function App() {
  const [employeeCode, setEmployeeCode] = useState("");
  const [message, setMessage] = useState("");
  const [employeeCodes, setEmployeeCodes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!employeeCode) {
      setMessage("Code cannot be empty!");
    } else if (!employeeCode.startsWith("EMP")) {
      setMessage("Wrong code format!");
    } else if (employeeCode.length < 8) {
      setMessage("Code length must not be less than 8 characters!");
    } else if (employeeCode.length > 16) {
      setMessage("Code length must not be more than 16 characters!");
    } else {
      setEmployeeCodes([...employeeCodes, employeeCode]);
      setMessage("Add employee code successfully!");
      setEmployeeCode("");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div>
          <label htmlFor="employeeCode">Employee Code:</label>
          <input
            type="text"
            id="employeeCode"
            value={employeeCode}
            onChange={(e) => setEmployeeCode(e.target.value)}
          />
        </div>
        <button type="submit">Add employee code</button>
      </form>
      {message && <p>{message}</p>}
      <div>
        <h3>List employee code:</h3>
        <ul>
          {employeeCodes.map((code, index) => (
            <li key={index}>{code}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
