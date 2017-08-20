import React, { Component } from 'react';
import GameIntro from './game-intro';

class GameMenu extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="center">
        <GameIntro />
      </div>
    )
  }

};

export default GameMenu;



