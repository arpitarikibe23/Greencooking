import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-white" to="/">🍃🥗GreenCooking🥗🍃</Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/contact">Contact Us</Link> {/* ✅ Contact Page Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/save-recipe">Save Recipe</Link> {/* ✅ Save Recipe Link */}
            </li>
          </ul>

          {/* Authentication Buttons */}
          {isLoggedIn ? (
            <button 
              className="btn btn-danger" 
              onClick={() => {
                localStorage.removeItem("username");
                window.location.reload();
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-success me-2" to="/login">Login</Link>
              <Link className="btn btn-info" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
