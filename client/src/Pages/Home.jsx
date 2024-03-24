import React, { useState } from "react";
import "./Home.css";
import WalkingImg from "../images/walking.gif";

const Home = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleFormMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="form-container">
        <form>
          <img src="" alt="" />
          <h2>{isSignup ? "SIGN UP" : "LOGIN"}</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          {isSignup && ( // Render Confirm Password field only for signup form
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
            </div>
          )}
          <button type="submit" className="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <button className="toggle-btn" onClick={toggleFormMode}>
          {isSignup ? "Already have an account? Login" : "New user? Sign Up"}
        </button>
      </div>
      <img className="walking-img" src={WalkingImg} alt="" />
    </div>
  );
};

export default Home;

//  <p>
//    `
//    ███████████████████████████████████████████████████████████████████████████████████████████████████████
//    █░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░███░░░░░░░░░░░░░░░░███
//    █░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░░░░░▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀▄▀░░███░░▄▀▄▀▄▀▄▀▄▀▄▀░░███
//    █░░▄▀░░░░░░░░░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█░░░░▄▀░░░░█░░░░░░▄▀░░░░░░█░░▄▀░░░░░░░░▄▀░░███░░▄▀░░░░░░░░▄▀░░███
//    █░░▄▀░░█████████░░▄▀░░░░░░▄▀░░░░░░▄▀░░███░░▄▀░░███████░░▄▀░░█████░░▄▀░░████░░▄▀░░███░░▄▀░░████░░▄▀░░███
//    █░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███████░░▄▀░░█████░░▄▀░░░░░░░░▄▀░░███░░▄▀░░░░░░░░▄▀░░███
//    █░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███████░░▄▀░░█████░░▄▀▄▀▄▀▄▀▄▀▄▀░░███░░▄▀▄▀▄▀▄▀▄▀▄▀░░███
//    █░░▄▀░░░░░░░░░░█░░▄▀░░██░░░░░░██░░▄▀░░███░░▄▀░░███████░░▄▀░░█████░░▄▀░░░░░░▄▀░░░░███░░▄▀░░░░░░▄▀░░░░███
//    █░░▄▀░░█████████░░▄▀░░██████████░░▄▀░░███░░▄▀░░███████░░▄▀░░█████░░▄▀░░██░░▄▀░░█████░░▄▀░░██░░▄▀░░█████
//    █░░▄▀░░░░░░░░░░█░░▄▀░░██████████░░▄▀░░█░░░░▄▀░░░░█████░░▄▀░░█████░░▄▀░░██░░▄▀░░░░░░█░░▄▀░░██░░▄▀░░░░░░█
//    █░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀▄▀▄▀░░█████░░▄▀░░█████░░▄▀░░██░░▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀▄▀▄▀░░█
//    █░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░█████░░░░░░█████░░░░░░██░░░░░░░░░░█░░░░░░██░░░░░░░░░░█
//    ███████████████████████████████████████████████████████████████████████████████████████████████████████
//    `
//  </p>;
