import React from "react";
import "./GameEnd.css";
import endText from '../images/game-end-txt.png'
import bye from '../images/bye.gif'
const GameEnd = () => {
  return (
      <div className="game-end">
          <img src={endText} alt="" srcset="" />
          <img src={ bye} alt="" srcset="" />
    </div>
  );
};

export default GameEnd;
