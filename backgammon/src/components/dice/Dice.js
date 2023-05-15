import React, { useState } from "react";

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
  setTurn,
  turn,
  revived,
  setRevived,
  killPileTwo,
  started,
  setStarted,
}) {
  React.useEffect(() => {
    if (started) {
      if (possibleMoves.length === 0) {
        if (turn === 0) {
          setTurn(1);
        } else if (turn === 1) {
          setTurn(0);
        }
      }
    } else {
      console.log("do nothing");
    }
  }, [possibleMoves]);

  //   const diceRoll = () => {
  // return [firstDice, secondDice]
  //   }

  const rollOne = () => {
    // let firstDice = dice[Math.floor(Math.random() * 6)];
    // let secondDice = dice[Math.floor(Math.random() * 6)];

    let firstDice = dice[4];
    let secondDice = dice[5];

    // Reset the peice index and clicked so movement can work with no bugs
    setPieceIndex(null);
    setClicked(false);

    if (firstDice > secondDice && !started) {
      setTurn(1);
      setStarted(true);
    } else if (firstDice === secondDice && !started) {
      alert("Roll Again");
      return;
    } else if (firstDice < secondDice && !started) {
      setTurn(0);
      setStarted(true);
    }

    if (possibleMoves.length === 0) {
      //Generates the images based on first dice value
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

      // Incase doubles are rolled
      if (firstDice === secondDice) {
        setPossibleMoves([firstDice, firstDice, secondDice, secondDice]);
      } else {
        setPossibleMoves([firstDice, secondDice]);
      }

      //Player 1's potential revival index
      let firstIndex = firstDice - 1;
      let secondIndex = secondDice - 1;

      //Player 2's potential revival index
      let firstIndex2 = firstDice + 17;
      let secondIndex2 = secondDice + 17;

      //Chooses whether you're verifying player 1 or 2s revival
      if (killPileOne > 0 && turn === 0) {
        verifyRevival(firstIndex, secondIndex);
      } else if (killPileTwo > 0 && turn === 1) {
        verifyRevival(firstIndex2, secondIndex2);
      }
    }
  };

  const verifyRevival = (firstIndex, secondIndex) => {
    if (turn === 0) {
      // If the revival occurs on an empty or friendly piece
      if (
        backgammon[firstIndex][1] === 0 || //These first two are to check
        backgammon[firstIndex][1] === -1 ||
        backgammon[secondIndex][1] === 0 ||
        backgammon[secondIndex][1] === -1 // that it's empty space
      ) {
        const elements = document.getElementsByClassName("killed-piece");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.border = "2px solid yellow";
          elements[i].style.borderRadius = "50%";
          elements[i].style.width = "50px";
          elements[i].style.height = "50px";
          elements[i].style.padding = "0px";
        }

        setRevived(true);

        //If the revival occurs with an enemy piece
      } else if (
        (backgammon[firstIndex][1] === 1 && backgammon[firstIndex][0] === 1) || // If an enemy piece is there but
        (backgammon[secondIndex][1] === 1 && backgammon[secondIndex][0] === 1)
      ) {
        setRevived(1);
        //Run some code that takes care of updating the [1] at that specified index. refrence to it
      } else {
        setTurn(1);
        setPossibleMoves([]);
        alert("false");

        setRevived(false);
      }
    } else if (turn === 1) {
      debugger;
      if (
        backgammon[firstIndex][1] === 1 || //These first two are to check
        backgammon[firstIndex][1] === -1 ||
        backgammon[secondIndex][1] === 1 ||
        backgammon[secondIndex][1] === -1 // that it's empty space
      ) {
        const elements = document.getElementsByClassName("killed-piece");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.border = "2px solid yellow";
          elements[i].style.borderRadius = "50%";
          elements[i].style.width = "50px";
          elements[i].style.height = "50px";
          elements[i].style.padding = "0px";
        }

        setRevived(true);

        //If the revival occurs with an enemy piece
      } else if (
        (backgammon[firstIndex][1] === 0 && backgammon[firstIndex][0] === 1) || // If an enemy piece is there but
        (backgammon[secondIndex][1] === 0 && backgammon[secondIndex][0] === 1)
      ) {
        setRevived(1);
        //Run some code that takes care of updating the [1] at that specified index. refrence to it
      } else {
        setPossibleMoves([]);
        alert("false");
        setRevived(false);
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
