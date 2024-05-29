import { useState } from "react";
import "./App.css";

function App() {
  const [employeeCodes, setEmployeeCodes] = useState([
    "EMP001",
    "EMP002",
    "EMP003",
    "EMP004",
    "EMP005",
    "EMP006",
    "EMP007",
    "EMP008",
    "EMP009",
    "EMP010",
  ]);

  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (inputCode === "") setMessage("Employee code can't be empty!");
    else if (employeeCodes.includes(inputCode))
      setMessage("Employee code is already existed!");
    else {
      setEmployeeCodes([...employeeCodes, inputCode]);
      setMessage("Add employee code successfully!");
    }

    setInputCode("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div>{employeeCodes.join(", ")}</div>
        <div>
          {message && <p>{message}</p>}
          <label htmlFor="employeeCode">Employee code:</label>
          <input
            type="text"
            id="employeeCode"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
        </div>
        <button type="submit">Add employee code</button>
      </form>
    </div>
  );
}

export default App;
