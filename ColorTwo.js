import React, { Component } from 'react';

class ColorTwo extends Component {
  


  render() {

     var squareStyle = {          

         height: 150,               

         backgroundColor: this.props.color  

       };                           
                                           



    return (
     <div style={squareStyle}>   

                                    

       </div>     
    )
  }

};

export default ColorTwo;
            
