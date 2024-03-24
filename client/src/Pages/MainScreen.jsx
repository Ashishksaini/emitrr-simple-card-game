import React from "react";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-screen-container">
      <div className="overlay"></div>
      <header>
        <h1 className="title">Super Emitrr Game</h1>
      </header>
      <main>
        <section className="content">
          <h2>Welcome to Super Emitrr Game</h2>
          <p>Get ready for an exciting adventure!</p>
        </section>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#">Continue</a>
            </li>
            <li>
              <a href="#">New Game</a>
            </li>
            <li>
              <a href="#">Score</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default MainScreen;
