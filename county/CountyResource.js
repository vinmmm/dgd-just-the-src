import React, { Component } from 'react';
import CountyTwo from './CountyTwo';
import CountyThree from './CountyThree';

class CountyResource extends Component {
  


  render() {

 var cardStyle = {  
         marginLeft: 10,                              

         height: 200,                                   

         width: 150,                                    

         padding: 0,                                    

         backgroundColor: "orange",                       

         WebkitFilter: "drop-shadow(0px 0px 5px #666)", 

         filter: "drop-shadow(0px 0px 5px #666)"        

       };                                               



    return (
      <div style={cardStyle}>                        

             <CountyTwo  color={this.props.color} />   
             <CountyThree  color="blue" num="3.14" size="medium"
                 num={this.props.num}

                 size={this.props.size} />                                        

        </div>     
    )
  }

};

export default CountyResource;
            
