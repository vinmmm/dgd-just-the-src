import React, { Component } from 'react';
import DeadHead from './dead-head';
import Icon from './icon';
import Dgd from './dgd';
import ButtonFly from './button-fly';

class GameIntro extends Component {
  
  componentWillMount() {
    this.props.baseWord = "DGD";
    this.setState({word: this.props.baseWord});
    this.timeout = null;
  }
  
  onMouseOver(word) {
     clearTimeout(this.timeout);
     this.setState({word: word});
  }
  
  onMouseOut() {
    
    // Don't leave, if they enter a different active state quickly.
    this.timeout = setTimeout(function() {
		  this.setState({word: this.props.baseWord});      
    }.bind(this), 10);
  }

  render() {
    return (<div className="card">
      <DeadHead word={this.state.word} />
			<h1>Daniel's Greatful Dead</h1>
      <p>Game Options:</p>
      <p>
        <Icon name="adventure" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon name="revenge" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon name="nightmare" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
       </p>
        <Dgd levelTitle="Adventure"/>
        <Dgd levelTitle="Revenge"/>
        <Dgd levelTitle="Nightmare"/>
        
        <ButtonFly behavior="Submit" label={this.state.click}>SEND DATA</ButtonFly>
         
    </div>
           
            
            
           )
  }

};

export default GameIntro;