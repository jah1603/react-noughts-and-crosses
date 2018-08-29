import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: null
    }

    this.placeTile = this.placeTile.bind(this);
    this.tileClick = this.tileClick.bind(this);
  }

  placeTile() {
    this.setState({value: this.props.currentPlayer})
  }

  tileClick() {
    this.placeTile();
    this.props.endTurn(this.props.position);
  }

  render() {
    return (
      <button
        className="square"
        onClick={this.tileClick}
        disabled={this.props.disabled}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
