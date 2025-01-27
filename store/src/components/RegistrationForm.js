import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (fullName && email && username && password) {
      // Retrieve existing users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      // Create a new user object
      const newUser = { fullName, email, username, password };

      // Add the new user to the stored users array
      storedUsers.push(newUser);

      // Save the updated users array back to localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));

      setSuccessMessage(true);
      setTimeout(() => {
        navigate("/login"); // Redirect to login after 2 seconds
      }, 2000);
    } else {
      setRegistrationError(true); // Handle registration failure
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
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
          <button type="submit">Register</button>
        </form>

        {registrationError && (
          <div className="error-message">Registration failed. Please try again.</div>
        )}

        {successMessage && (
          <div className="success-message">
            Registration successful! Redirecting to the login page...
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
