import React from 'react';

export default function Square (props) {
  function makeMove () {
    console.log("working in makeMove")
    console.log("im xcoord ", props.xCoordinate)
    console.log("im ycoord ", props.yCoordinate)
    console.log("Testing the eachsquare", props.eachSquareValue)
    props.move(props.xCoordinate, props.yCoordinate)
  }
  
  
  return(
    <div onClick={makeMove} className="square">
      <p className="selected">{props.eachSquareValue}</p>
    </div>
  )
}