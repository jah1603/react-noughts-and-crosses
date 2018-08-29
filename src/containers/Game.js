import React, { Component } from 'react';
import Board from '../components/Board.js'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: "O",
      nextPlayer: "X",
      winner: null,
      moves: {X: [], O: []}
    }
    this.endTurn = this.endTurn.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.addMove = this.addMove.bind(this);
    this.isOccupied = this.isOccupied.bind(this);
    this.reloadPage = this.reloadPage.bind(this);
  }

  endTurn(move) {
    this.addMove(move)
  }

  addMove(move) {
    const curPlayer = this.state.currentPlayer;
    const nexPlayer = this.state.nextPlayer;
    const currentPlayerMoves = this.state.moves[curPlayer]
    const nextPlayerMoves = this.state.moves[nexPlayer]
    const currentPlayerNewMoves = [...currentPlayerMoves, move]
    this.setState({
      moves: {
        [this.state.currentPlayer]: currentPlayerNewMoves,
        [this.state.nextPlayer]: nextPlayerMoves
      }
    }, this.findWinner);
  }

  findWinner() {
    if (!this.checkWin()){
      if (this.state.currentPlayer === "X"){
        this.setState({currentPlayer: "O", nextPlayer: "X"})
      }
      else {
        this.setState({ currentPlayer: "X", nextPlayer: "O"})
      };
    } else {
      this.setState({winner: this.state.currentPlayer});
    }
  }

  checkWin() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]]

    const playerArray = this.state.moves[`${this.state.currentPlayer}`]
    const isWon = wins.some((win) => {
      return playerArray.includes(win[0])
      && playerArray.includes(win[1])
      && playerArray.includes(win[2])
    })
    return isWon;
  }

  isOccupied(position) {
    return this.state.moves["X"].includes(position) || this.state.moves["O"].includes(position)
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            nextPlayer={this.state.nextPlayer}
            currentPlayer={this.state.currentPlayer}
            endTurn={this.endTurn}
            addMove = {this.addMove}
            isOccupied = {this.isOccupied}
            winner = {this.state.winner}
          />
        </div>
        <p></p>
        <table align="center">
        <tr align="center">
          <td>
        <button onClick = {this.reloadPage}>Reset Game</button>
          </td>
          <td>
            <button onClick = {this.reloadPage}>Undo Move</button>
          </td>
        </tr>
      </table>
      </div>
    );
  }
}

export default Game;
