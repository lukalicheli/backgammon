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
  backgammon,
  killPileOne,
  setKillPileOne,
}) {
  React.useEffect(() => {
    // rollOne();
  }, []);

  const rollOne = () => {
    // Reset the peice index and clicked so movement can work with no bugs
    setPieceIndex(null);
    setClicked(false);
    debugger;
    if (possibleMoves.length === 0) {
      let firstDice = dice[Math.floor(Math.random() * 6)];
      let secondDice = dice[Math.floor(Math.random() * 6)];
      // let firstDice = dice[2];
      // let secondDice = dice[3];

      for (let i = 0; i < diceImages.length; i++) {
        //Generates the images based on first dice value
        if (diceImages[i].value === firstDice) {
          const imgURL = diceImages[i].img;
          setFirstDice(imgURL);
        }
      }
      for (let i = 0; i < diceImages.length; i++) {
        //Generates the images based on second dice value
        if (diceImages[i].value === secondDice) {
          const imgURL = diceImages[i].img;
          setSecondDice(imgURL);
        }
      }

      // Incase doubles are rolled
      if (firstDice === secondDice) {
        setPossibleMoves([firstDice, firstDice, secondDice, secondDice]);
      } else {
        setPossibleMoves([firstDice, secondDice]);
      }

      let firstIndex = firstDice - 1;
      let secondIndex = secondDice - 1;

      verifyRevival(firstIndex, secondIndex);
    }

    const verifyRevival = (firstIndex, secondIndex) => {
      // If the revival occurs on an empty or friendly piece
      if (
        (backgammon[firstIndex][1] === 0 ||
          backgammon[secondIndex][1] === -1 ||
          (backgammon[firstIndex][1] === 1 &&
            backgammon[firstIndex][0] === 1) ||
          (backgammon[secondIndex][1] === 1 &&
            backgammon[secondIndex][0] === 1)) &&
        killPileOne > 0
      ) {
        console.log("available");
        // const updatedKillPile = killPileOne - 1;
        // setKillPileOne(updatedKillPile);

        //If the revival occurs with an enemy piece
      } else {
        console.log("not available");
      }
    };
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
