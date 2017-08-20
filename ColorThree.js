import React, { Component } from 'react';
import ColorFour from './ColorFour';
class ColorThree extends Component {
  


  render() {

     var labelStyle = {                  

         fontFamily: "sans-serif",         

         fontWeight: "bold",               

         padding: 13,                      

         margin: 0                         

       };                             
                                           



    return (
    	<div>
    
    <ColorFour color={this.props.color}

              num={this.props.num}

              size={this.props.size}/>  
        </div>       
    )
  }

};

export default ColorThree;
            
