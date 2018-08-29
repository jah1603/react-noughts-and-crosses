import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {


  renderSquare(i) {
    return <Square
      position={i}
      currentPlayer = {this.props.currentPlayer}
      endTurn = {this.props.endTurn}
      addMove = {this.props.addMove}
      disabled = {this.props.isOccupied(i)}
    />;
  }

  render() {
    var gameState = "loading…"
    if (this.props.winner === null){
      gameState = "Next player: " + this.props.nextPlayer;
    } else {
       gameState = "The Winner is: " + this.props.winner;
    }

    return (
      <div>
        <div className="status">{gameState}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
