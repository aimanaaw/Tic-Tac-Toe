import React, { useState } from 'react';
import Board from './Board';

export default function (props) {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])
  const [currentPlayer, setCurrentPlayer] = useState("Player1");

  function winner (duplicateBoard, winningPlayer) {
    if (
      (duplicateBoard[0][0] === duplicateBoard[0][1] && duplicateBoard[0][1] !== "" && duplicateBoard[0][1] === duplicateBoard[0][2]) ||
      (duplicateBoard[1][0] === duplicateBoard[1][1] && duplicateBoard[1][1] !== "" && duplicateBoard[1][1] === duplicateBoard[1][2]) ||
      (duplicateBoard[2][0] === duplicateBoard[2][1] && duplicateBoard[2][1] !== "" && duplicateBoard[2][1] === duplicateBoard[2][2]) ||
      (duplicateBoard[0][0] === duplicateBoard[1][0] && duplicateBoard[1][0] !== "" &&  duplicateBoard[1][0] === duplicateBoard[2][0]) ||
      (duplicateBoard[0][1] === duplicateBoard[1][1] && duplicateBoard[1][1] !== "" && duplicateBoard[1][1] === duplicateBoard[2][1]) ||
      (duplicateBoard[0][2] === duplicateBoard[1][2] && duplicateBoard[1][2] !== "" && duplicateBoard[1][2] === duplicateBoard[2][2]) ||
      (duplicateBoard[0][0] === duplicateBoard[1][1] && duplicateBoard[1][1] !== "" && duplicateBoard[1][1] === duplicateBoard[2][2]) ||
      (duplicateBoard[2][0] === duplicateBoard[1][1] && duplicateBoard[1][1] !== "" && duplicateBoard[1][1] === duplicateBoard[0][2])
      )
      {
        alert(`${winningPlayer} has won`);
        return;
      }
    }

  function playerMove(duplicateBoard, x, y, currentMarker, whichPlayer) {
    if (duplicateBoard[x][y] === "") {
      duplicateBoard[x][y] = currentMarker;
      setCurrentPlayer(whichPlayer);
      winner(duplicateBoard, whichPlayer);
    } else {
      alert("Pick another available spot!!!")
    }
  }

  let duplicateBoard = [...board]
  function move(x, y) {
    switch (currentPlayer) {
      case "Player2":
        playerMove(duplicateBoard, x, y, 'O', "Player1");
        break;
      default:
        playerMove(duplicateBoard, x, y, 'X', "Player2");
    }

    setBoard(duplicateBoard)
    console.log("im in move")
  }
  return (
    <Board
      board={board}
      move={move}
    />


  )
}
