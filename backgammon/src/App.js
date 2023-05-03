import { useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";
import white from "./assets/piece-data/white-piece.png";
import { diceImages } from "./assets/dice-data/DiceImages";
import Dice from "./components/dice/Dice";
import KilledPieces from "./components/piles/KilledPieces";
import styled from "styled-components";

function App() {
  const [pieceIndex, setPieceIndex] = useState(null);
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]);
  const [firstDice, setFirstDice] = useState(null);
  const [secondDice, setSecondDice] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [turn, setTurn] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [killPileOne, setKillPileOne] = useState(3);
  const [killPileTwo, setKillPileTwo] = useState(0);
  const [revived, setRevived] = useState(null);
  const [backgammon, setBackgammon] = useState([
    [2, 0, 0], // value = [how many pieces in each slot, 0=white piece 1=brown piece, position on board starting from 0 like an array count]
    [0, -1, 1],
    [0, -1, 2],
    [0, -1, 3],
    [0, -1, 4],
    [5, 1, 5],
    [0, -1, 6],
    [3, 1, 7],
    [0, -1, 8],
    [0, -1, 9],
    [0, -1, 10],
    [5, 0, 11],
    [5, 1, 12],
    [0, -1, 13],
    [0, -1, 14],
    [0, -1, 15],
    [3, 0, 16],
    [0, -1, 17],
    [5, 0, 18],
    [0, -1, 19],
    [0, -1, 20],
    [0, -1, 21],
    [0, -1, 22],
    [2, 1, 23],
  ]);

  // Checks if the move is valid.
  // Compares the index difference of the two columns you clicked with at least one value in possibleMoves state
  const checkMove = (value) => {
    if (turn === 0) {
      const difference = value[2] - pieceIndex[2];
      if (difference === possibleMoves[0] || difference === possibleMoves[1]) {
        return true;
      } else {
        return false;
      }
    } else if (turn === 1) {
      const difference = (value[2] - pieceIndex[2]) * -1;
      if (difference === possibleMoves[0] || difference === possibleMoves[1]) {
        return true;
      } else {
        return false;
      }
    }
  };

  const killPiece = (value) => {
    //if whatever piece you hit has value[0] ===1 AND value[1] ===1, then the piece can be updated

    if (turn === 0) {
      if (value[0] === 1 && value[1] === 1) {
        return true;
      } else {
        return false;
      }
    } else if (turn === 1) {
      if (value[0] === 1 && value[1] === 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  // This function moves the pieces and ends the turn when there's no more available moves
  const handleClick = (value, index) => {
    // If it's player 1's turn
    if (turn === 0 && killPileOne === 0) {
      if (turn === 0 && (value[1] === 0 || value[1] === -1) && !clicked) {
        setPieceIndex(value);
        setClicked(true);
      } else if (turn === 0 && checkMove(value) && clicked && value[1] !== 1) {
        const newSet = value[0] + 1;
        const oldSet = pieceIndex[0] - 1;
        const newSubarray = [newSet, pieceIndex[1], value[2]];
        const newSubarray2 = [
          oldSet,
          oldSet === 0 ? -1 : pieceIndex[1],
          pieceIndex[2],
        ];
        const newBoard = JSON.parse(JSON.stringify(backgammon));
        const index = value[2];
        const index2 = pieceIndex[2];
        newBoard[index] = newSubarray;
        newBoard[index2] = newSubarray2;

        const move = value[2] - pieceIndex[2];
        const updatedPossibleMoves = [...possibleMoves];
        const indexToRemove = updatedPossibleMoves.indexOf(move);
        if (indexToRemove !== -1) {
          updatedPossibleMoves.splice(indexToRemove, 1);
        }
        setPossibleMoves(updatedPossibleMoves);
        setClicked(false);
        setBackgammon(newBoard);

        //Incase player 1 kills player 2's piece
      } else if (killPiece(value) && clicked) {
        const newKillPile = killPileTwo + 1;
        setKillPileTwo(newKillPile);
        const newSet = value[0];
        const oldSet = pieceIndex[0] - 1;
        const newSubarray = [newSet, pieceIndex[1], value[2]];
        const newSubarray2 = [
          oldSet,
          oldSet === 0 ? -1 : pieceIndex[1],
          pieceIndex[2],
        ];
        const newBoard = JSON.parse(JSON.stringify(backgammon));
        const index = value[2];
        const index2 = pieceIndex[2];
        newBoard[index] = newSubarray;
        newBoard[index2] = newSubarray2;

        const move = value[2] - pieceIndex[2];
        const updatedPossibleMoves = [...possibleMoves];
        const indexToRemove = updatedPossibleMoves.indexOf(move);
        if (indexToRemove !== -1) {
          updatedPossibleMoves.splice(indexToRemove, 1);
        }
        setPossibleMoves(updatedPossibleMoves);
        setClicked(false);
        setBackgammon(newBoard);
      } else if (possibleMoves.length === 0) {
        console.log("no More");
        setTurn(1);
      }
    }

    //If it's second player's turn
    if (turn === 1 && killPileTwo === 0) {
      if (turn === 1 && (value[1] === 1 || value[1] === -1) && !clicked) {
        setPieceIndex(value);
        setClicked(true);
      } else if (turn === 1 && checkMove(value) && clicked && value[1] !== 0) {
        const newSet = value[0] + 1;
        const oldSet = pieceIndex[0] - 1;
        const newSubarray = [newSet, pieceIndex[1], value[2]];
        const newSubarray2 = [
          oldSet,
          oldSet === 0 ? -1 : pieceIndex[1],
          pieceIndex[2],
        ];
        const newBoard = JSON.parse(JSON.stringify(backgammon));
        const index = value[2];
        const index2 = pieceIndex[2];
        newBoard[index] = newSubarray;
        newBoard[index2] = newSubarray2;
        const move = (value[2] - pieceIndex[2]) * -1;
        const updatedPossibleMoves = [...possibleMoves];
        const indexToRemove = updatedPossibleMoves.indexOf(move);
        if (indexToRemove !== -1) {
          updatedPossibleMoves.splice(indexToRemove, 1);
        }
        setPossibleMoves(updatedPossibleMoves);
        setClicked(false);
        setBackgammon(newBoard);
      } else if (killPiece(value) && clicked) {
        const newKillPile = killPileOne + 1;
        setKillPileOne(newKillPile);
        const newSet = value[0];
        const oldSet = pieceIndex[0] - 1;
        const newSubarray = [newSet, pieceIndex[1], value[2]];
        const newSubarray2 = [
          oldSet,
          oldSet === 0 ? -1 : pieceIndex[1],
          pieceIndex[2],
        ];
        const newBoard = JSON.parse(JSON.stringify(backgammon));
        const index = value[2];
        const index2 = pieceIndex[2];
        newBoard[index] = newSubarray;
        newBoard[index2] = newSubarray2;

        const move = (value[2] - pieceIndex[2]) * -1;
        const updatedPossibleMoves = [...possibleMoves];
        const indexToRemove = updatedPossibleMoves.indexOf(move);
        if (indexToRemove !== -1) {
          updatedPossibleMoves.splice(indexToRemove, 1);
        }
        setPossibleMoves(updatedPossibleMoves);
        setClicked(false);
        setBackgammon(newBoard);
      } else if (possibleMoves.length === 0) {
        console.log("no More");
        setTurn(0);
      }
    } else if (turn === 1 && killPileTwo > 0) {
      // for(let i=18; i<23; i++) {
      //   let emptyIndex = 0;
      //   let newValue =0;
      //   if(backgammon[i][1] === 1 || backgammon[i][1] === -1 ) {
      //    emptyIndex = backgammon[i][2];
      //     const newBoard = [...board];
      //   } else {
      //     setTurn(0);
      //     setClicked(false);
      //     setPossibleMoves([]);
      //   }
      // }
      console.log("here");
    }
  };

  // Makes the columns for the game
  const renderColumn = (value, index) => {
    const pieceImage = value[1] === 0 ? white : value[1] === 1 ? brown : null;
    if (value[0] === 0 || value[1] === -1) {
      // empty column
      return (
        <div
          key={index}
          className="gammon-piece"
          onClick={() => handleClick(value, index)}
        />
      );
    } else {
      // column with pieces
      return (
        <div className="column" key={index}>
          {[...Array(value[0])].map((_, i) => (
            <img
              key={i}
              className={`gammon-piece ${value}`}
              onClick={() => {
                handleClick(value, index);
              }}
              src={pieceImage}
              alt="piece"
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="game-container">
      <div className="backgammon-board">
        <div className="quadrant one">
          {backgammon.slice(6, 12).map(renderColumn)}
        </div>
        <div className="quadrant two">
          {backgammon.slice(0, 6).map(renderColumn)}
        </div>
        <div className="quadrant three">
          {backgammon.slice(12, 18).map(renderColumn)}
        </div>
        <div className="quadrant four">
          {backgammon.slice(18, 24).map(renderColumn)}
        </div>
      </div>
      <Dice
        firstDice={firstDice}
        secondDice={secondDice}
        dice={dice}
        diceImages={diceImages}
        setFirstDice={setFirstDice}
        setSecondDice={setSecondDice}
        setPossibleMoves={setPossibleMoves}
        possibleMoves={possibleMoves}
        setPieceIndex={setPieceIndex}
        setClicked={setClicked}
        backgammon={backgammon}
        killPileOne={killPileOne}
        setKillPileOne={setKillPileOne}
        setTurn={setTurn}
        turn={turn}
        revived={revived}
        setRevived={setRevived}
      />
      <KilledPieces
        backgammon={backgammon}
        killPileOne={killPileOne}
        killPileTwo={killPileTwo}
        setKillPileOne={setKillPileOne}
        setKillPileTwo={setKillPileTwo}
        turn={turn}
        setTurn={setTurn}
        pieceIndex={pieceIndex}
        setPieceIndex={setPieceIndex}
        setClicked={setClicked}
        possibleMoves={possibleMoves}
        revived={revived}
        setRevived={setRevived}
      ></KilledPieces>
    </div>
  );
}

const Column = styled.div`
  display: flex;
  width: 50px;
  height: 100%;
  margin: -10px 0px -10px 0px;
`;

const Image = styled.img`
  display: flex;
  width: 50px;
  height: 100%;
  margin: -10px 0px -10px 0px;
`;

export default App;
