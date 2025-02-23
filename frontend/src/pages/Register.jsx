import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      alert("All fields are required!");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some((u) => u.email === user.email)) {
      alert("Email already registered! Please login.");
      return;
    }

    // Save new user
    const updatedUsers = [...users, user];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Save session
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setIsLoggedIn(true);

    // Redirect to Share Recipe page
    navigate("/share-recipe");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
