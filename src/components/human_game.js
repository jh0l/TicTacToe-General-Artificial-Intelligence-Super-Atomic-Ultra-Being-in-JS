import React, { Component } from 'react';
import GameContainer from './container_game';

class HumanGame extends Component {
  constructor() {
    super();
    this.state = {
      playerOne: 'Crosses',
      playerTwo: 'Noughts',
      initGame: true,
      boardSize: 3,
      linesTarget: 1
    }
  }
  initGame() {
    this.setState({initGame: true});
  }
  onInputChange(player,name) {
    this.setState({[player]: name})

  }
  selectHandler(event, key) {
    console.log(event.target.value);
    this.setState({ [key]: Number(event.target.value) })
    console.log(this.state.boardSize);
  }
  pickNames() {
    return(
      <div style={{"marginTop":10}}>
        <div>Pick your tile</div>
        <div className="tileSelectionMenu">
          <div className="status">
            <div>Player X Name: </div>
            <input
              className='form-control'
              value={this.state.playerOne}
              onChange={event => this.onInputChange('playerOne',event.target.value)}
            />
          </div>
          <div className="status">
            <div>Player O Name: </div>
            <input
              className='form-control'
              value={this.state.playerTwo}
              onChange={event => this.onInputChange('playerTwo',event.target.value)}
            />
          </div>
          <div className="status">
            <div>Board Size: </div>
            <select defaultValue={this.state.boardSize}
              onChange={e => this.selectHandler(e,"boardSize")}>
              {Array(10).fill(0).map((v,i) =>
                <option key={i} value={i+3}>{i+3} x {i+3}</option>
              )}
            </select>
          </div>
          <div className="status">
            <span>Lines to Win Round: </span>
            <select defaultValue={this.state.linesTarget}
              onChange={e => this.selectHandler(e,"linesTarget")}>
              {Array(this.state.boardSize-2).fill(0).map((v, i) =>
                <option key={i} value={i+1}>{i+1}</option>
              )}
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <span
              className="btn btn-secondary p-3"
              onClick={() => this.setState({initGame: false})}>
              go
            </span>
          </div>
        </div>
      </div>
    )
  }
  render() {
    const names = {
      playerOne: this.state.playerOne,
      playerTwo: this.state.playerTwo
    }
    return (
      <div>
        <GameContainer
          ready={!this.state.initGame}
          boardSize={this.state.boardSize}
          linesTarget={this.state.linesTarget}
          names={names}
          newGame={() => this.initGame()}/>
        {this.state.initGame && this.pickNames()}
      </div>
    )
  }
}


export default HumanGame
