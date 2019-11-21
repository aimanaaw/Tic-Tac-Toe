import React from 'react';
import Square from './Square';
import '../index.css';

export default function Board(props) {
  return (
    <div className="game">
      {props.board.map((eachRow, indexRow) =>
        <div >
          {eachRow.map((eachPosition, rowPosition) =>
            <Square
              eachSquareValue={eachPosition}
              yCoordinate={rowPosition}
              xCoordinate={indexRow}
              move = {props.move}
            />)}
        </div>
      )}
    </div>
  );
}