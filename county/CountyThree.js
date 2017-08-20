import React, { Component } from 'react';
import CountyFour from './CountyFour';
class CountyThree extends Component {
  


  render() {

     var labelStyle = {                  

         fontFamily: "sans-serif",         

         fontWeight: "bold",               

         padding: 13,                      

         margin: 0                         

       };                             
                                           



    return (
    	<div>
    
    <CountyFour color={this.props.color}

              num={this.props.num}

              size={this.props.size}/>  
        </div>       
    )
  }

};

export default CountyThree;
            
