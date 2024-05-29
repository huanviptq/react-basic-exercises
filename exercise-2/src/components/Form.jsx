import { useState } from "react";
import "./Form.css";

function Form() {
  const [employeeCode, setEmployeeCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    } else if (!email) {
      setMessage("Email cannot be empty!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Wrong email format!");
    } else if (password.length < 8) {
      setMessage("Password must not be less than 8 characters!");
    } else {
      setMessage("Register successfully!");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        {message && <p>{message}</p>}
        <div>
          <label htmlFor="employeeCode">Employee Code:</label>
          <input
            type="text"
            value={employeeCode}
            onChange={(e) => setEmployeeCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Form;
