import React, { Component } from 'react';
import ColorTwo from './ColorTwo';
import ColorThree from './ColorThree';

class ColorOne extends Component {
  


  render() {

 var cardStyle = {  
         marginLeft: 400,                              

         height: 200,                                   

         width: 150,                                    

         padding: 0,                                    

         backgroundColor: "#FFF",                       

         WebkitFilter: "drop-shadow(0px 0px 5px #666)", 

         filter: "drop-shadow(0px 0px 5px #666)"        

       };                                               



    return (
      <div style={cardStyle}>                        

             <ColorTwo  color={this.props.color} />   
             <ColorThree  color="steelblue" num="3.14" size="medium"
                 num={this.props.num}

                 size={this.props.size} />                                        

        </div>     
    )
  }

};

export default ColorOne;
            
