import React, { useState, useEffect, useRef } from "react";
import "./Card.css";

const Card = ({ setOver }) => {
  const [flipIndex, setFlipIndex] = useState(null);
  const topCard = useRef([]);
  const symbols = ["😼", "🙅‍♂️", "🔀", "💣"];
  const [data, setData] = useState([]);


function generateUniqueRandomArray(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 4)+1; // Generates a random number between 0 and 4 (inclusive)
    array.push(randomNumber);
  }
  return array;
}


  useEffect(() => {
    setData(generateUniqueRandomArray(5));
  }, []);

  const flipFirstCard = (index) => {
    setFlipIndex(index);
    setTimeout(() => {
      topCard.current[index].classList.add("bounce-and-enlarge");
    }, 700);
    setTimeout(() => topCard.current[index].classList.add("gradient"), 0);
    const childElement = topCard.current[index].querySelector("p");
    childElement.innerHTML += symbols[data[index]-1];
    setTimeout(() => {
      console.log(index);
      console.log(data[index])
      let ndata = data;
      if (ndata[index] === 2 && ndata.includes(4)) {
        ndata.splice(ndata.indexOf(4), 1);
        ndata.splice(ndata.indexOf(2),1);
      }
      else if (ndata[index] == 2) { 
        ndata.splice(ndata.indexOf(2), 1);
      } else if (ndata[index] === 1) {
        ndata.splice(ndata.indexOf(1), 1);
      } else if (ndata[index] === 4) {
        setOver(true);
      } else {
        childElement.innerHTML = "";
        setFlipIndex(null);
        setData(generateUniqueRandomArray(5));
        return;
      }
      if (ndata.length == 0)setOver(2);
      childElement.innerHTML="";
      setData(ndata);
      setFlipIndex(null);
    }, 1700);
  };

  return (
    <div className="card-container">
      {Array.from({ length: data.length }, (_, index) => (
        <div
          key={index}
          ref={(element) => (topCard.current[index] = element)}
          className={`card ${index === flipIndex ? "flipped" : ""}`}
          onClick={() => flipFirstCard(index)}
        >
          {<p className="fit-to-box"></p>}
        </div>
      ))}
    </div>
  );
};

export default Card;
