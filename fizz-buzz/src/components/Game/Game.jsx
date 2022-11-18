import React, { useRef, useState } from "react";

import "./Game.css";

const Game = () => {
  const [turno, setTurno] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [styleNumber, setStyleNumber] = useState("rivalNumber");
  const [convertedNumber, setConvertedNumber] = useState(currentNumber);

  const inputPlayer = useRef();

  if (turno === false) {
    setTimeout(() => {
      setCurrentNumber(parseInt(currentNumber) + 1);
      convertNumber();
      setStyleNumber("rivalNumber");
      setTurno(true);
    }, 1500);
  }

  const sendNumber = (event) => {
    if (event.key === "Enter") {
      let inputValue = inputPlayer.current.value;
      if (inputValue === currentNumber + 1) setCurrentNumber(inputValue);
      setStyleNumber("playerTurn");
      setTurno(false);
    }
  };

  const convertNumber = () => {
    
  };

  return (
    <div>
      <h1 className={`${styleNumber}`}>{convertedNumber}</h1>
      {turno && (
        <div className="inputPlayer">
          <h1>Tu Turno!</h1>
          <input type="text" ref={inputPlayer} onKeyDown={sendNumber}></input>
        </div>
      )}
    </div>
  );
};

export default Game;
