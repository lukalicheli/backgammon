import React from "react";

function Dice({
  dice,
  diceImages,
  setFirstDice,
  setSecondDice,
  setPossibleMoves,
  firstDice,
  secondDice,
  possibleMoves,
  setPieceIndex,
  setClicked,
}) {
  React.useEffect(() => {
    // rollOne();
  }, []);
  const rollOne = () => {
    setPieceIndex(null);
    setClicked(false);
    if (possibleMoves.length === 0) {
      let firstDice = dice[Math.floor(Math.random() * 6)];
      let secondDice = dice[Math.floor(Math.random() * 6)];
      // let firstDice = dice[2];
      // let secondDice = dice[3];

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
      if (firstDice === secondDice) {
        setPossibleMoves([firstDice, firstDice, secondDice, secondDice]);
      } else {
        setPossibleMoves([firstDice, secondDice]);
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
