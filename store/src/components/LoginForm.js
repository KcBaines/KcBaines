import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false); // State for login success
  const [redirecting, setRedirecting] = useState(false); // State for showing redirecting message
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);  // Set the message from the location state
    }
  }, [location]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Retrieve registered users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Find the user in the registered users array
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      handleLogin(username, password, navigate); // Pass navigate to handleLogin
      setLoginSuccess(true); // Set login success state
      setRedirecting(true); // Set redirecting state to show message
      setTimeout(() => {
        navigate("/products"); // Redirect to products page after 2 seconds
      }, 2000);
    } else {
      setLoginError(true); // Display error if credentials don't match
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Login</button>

          {/* Show success message if login was successful */}
          {message && <div className="success-message">{message}</div>}
          {loginError && <div className="error-message">Invalid username or password.</div>}

          {/* Show login success and redirecting message */}
          {loginSuccess && redirecting && (
            <div className="success-message">
              Login successful! Redirecting to products...
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
