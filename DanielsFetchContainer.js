import React, { Component } from 'react'; 
import Daniels from './Daniels'; 
import 'whatwg-fetch';
// If you're running the server locally, the URL will be, by default, localhost:3000 // Also, the local server doesn't need an authorization header.
const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
   'Authorization': 'any-string-you-like'// The Authorization is not needed for local server 
};

class DanielsFetchContainer extends Component { constructor(){
    super(...arguments);
    this.state = {
cards: [] };
}
  componentDidMount(){
    fetch(API_URL+'/cards', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({cards: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
});
}
//The New Methods for Manipulating Tasks
addTask(cardId, taskName){
  }
  deleteTask(cardId, taskId, taskIndex){
  }
  toggleTask(cardId, taskId, taskIndex){
}

render() {
return ( <Daniels cards={this.state.cards}
                taskCallbacks={{
                toggle: this.toggleTask.bind(this),
                delete: this.deleteTask.bind(this),
                add: this.addTask.bind(this) }} />
  )
 }
}
export default DanielsFetchContainer;