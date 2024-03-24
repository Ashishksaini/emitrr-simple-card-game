import React from 'react'
import partyImg from '../images/party.gif'
import DanceImg from '../images/dance.gif'
import './YouWon.css'
const YouWon = () => {
  return (
    <div className="win-container fit-to-box">
      <p className="fit-to-box">`
        ██╗░░░██╗░█████╗░██╗░░░██╗  ░██╗░░░░░░░██╗██╗███╗░░██╗
        ╚██╗░██╔╝██╔══██╗██║░░░██║  ░██║░░██╗░░██║██║████╗░██║
        ░╚████╔╝░██║░░██║██║░░░██║  ░╚██╗████╗██╔╝██║██╔██╗██║
        ░░╚██╔╝░░██║░░██║██║░░░██║  ░░████╔═████║░██║██║╚████║
        ░░░██║░░░╚█████╔╝╚██████╔╝  ░░╚██╔╝░╚██╔╝░██║██║░╚███║
        ░░░╚═╝░░░░╚════╝░░╚═════╝░  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚══╝ `
      </p>
      <div>
        <img src={partyImg} className="fit-to-box" alt="" />
        <img src={DanceImg} alt="" />
        <img
          src={partyImg}
          className="fit-to-box"
          style={{ transform: "scaleX(-1)" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default YouWon