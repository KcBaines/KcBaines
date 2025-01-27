import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";  // Import useSelector
import "../styles/Navigation.css";
import Logo from "../img/logo.jpg";

function Navigation({ username, onLogout }) {
  const navigate = useNavigate();

  // Get cart items from Redux state
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total number of items in the cart
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");  // Remove user data from localStorage
    onLogout();  // Clear logged-in user state in parent component
    navigate("/login", { state: { message: "Logout successful!" } });  // Redirect to the login page after logout
  };

  return (
    <header>
      {/* First navigation bar (box1) */}
      <nav className="box1">
        <Link to="/cart">
          <BiCart className="cart-icon" /> 
          CART {totalItemsInCart > 0 && <span className="cart-item-count">{totalItemsInCart}</span>}
        </Link>
        {!username && <Link to="/register">REGISTER</Link>}
        {!username && <Link to="/login">LOGIN</Link>}
        {username && <Link onClick={handleLogout}>LOGOUT</Link>}
      </nav>

      {/* Second navigation bar (navbar) */}
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/contact">CONTACT US</Link>
      </nav>

      <div className="welcome"></div>
    </header>
  );
}

export default Navigation;
