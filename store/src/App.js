import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ShippingOptions from "./components/ShippingOptions";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "./img/video.mp4";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to handle user login
  const handleLogin = (username, password, navigate) => {
    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    console.log("Login Data:", username, password);
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedInUser(user.username); // Set logged-in user
      setTimeout(() => {
        navigate("/products"); // Redirect to products page after 2 seconds
      }, 2000);
    } else {
      console.log("Incorrect username or password.");
      alert("Invalid username or password.");
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedInUser(null); // Clear logged-in user on logout
  };

  return (
    <Router>
      <div className="App">
        <Navigation username={loggedInUser} onLogout={handleLogout} />

        <div className="video-background">
          <video autoPlay loop muted className="background-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <main className="box2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<ShippingOptions />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route
              path="/login"
              element={<LoginForm handleLogin={handleLogin} />}
            />
          </Routes>

          {loggedInUser && <Header username={loggedInUser} />}
        </main>
      </div>
    </Router>
  );
}

export default App;
