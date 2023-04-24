import React, { useState } from "react";
import { diceImages } from "../../assets/dice-data/DiceImages";

function Dice() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]);
  const [firstDice, setFirstDice] = useState(null);
  const [secondDice, setSecondDice] = useState(null);
  const [moves, setMoves] = useState([null, null]);

  const rollOne = () => {
    let firstDice = dice[Math.floor(Math.random() * 6)];
    let secondDice = dice[Math.floor(Math.random() * 6)];

    for (let i = 0; i < diceImages.length; i++) {
      if (diceImages[i].value === firstDice) {
        const imgURL = diceImages[i].img;
        setFirstDice(imgURL);
      }
    }

    for (let i = 0; i < diceImages.length; i++) {
      if (diceImages[i].value === secondDice) {
        const imgURL = diceImages[i].img;
        setSecondDice(imgURL);
      }
    }
  };

  return (
    <div className="dice-container">
      <button className="roll-button" onClick={rollOne}>
        Roll
      </button>
      <div className="dice one">
        {firstDice && (
          <img className="dice-image" src={firstDice} alt="Dice 1" />
        )}
      </div>
      <div className="dice two">
        {secondDice && (
          <img className="dice-image" src={secondDice} alt="Dice 2" />
        )}
      </div>
    </div>
  );
}

export default Dice;
