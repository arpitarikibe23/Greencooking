import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setIsLoggedIn(true);
      navigate("/share-recipe");
    } else {
      alert("Invalid Credentials! Please check your email and password.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
