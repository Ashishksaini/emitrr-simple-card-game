import React, { useEffect, useRef, useState } from "react";
import './Explosion.css'
import gameover from "../images/gameOver.mp4";
import GameEnd from "./GameEnd";

const Explosion = () => {
  const videoRef = useRef(null);
  const [over, setOver] = useState(false);

  useEffect(() => {
    const handleVideoEnd = () => {
      setOver(true);
    };

    const videoElement = videoRef.current;

    if (videoElement) {
      // Add event listener for when the video ends
      videoElement.addEventListener("ended", handleVideoEnd);

      // Cleanup function to remove the event listener when component unmounts
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="explosion">
      <video src={gameover} ref={videoRef} autoPlay muted>
      </video>
      { over&&(<GameEnd/>)}
    </div>
  );
};

export default Explosion;
