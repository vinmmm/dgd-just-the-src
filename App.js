import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';
import PhysicianHome from './PhysicianHome';


import ButtonFly from './button-fly';
import ColorOne from './ColorOne';
import CountyResource from './county/CountyResource';
import DanielsFetchContainer from './DanielsFetchContainer';
import DanielsFetchContainer2 from './daniels/DanielsFetchContainer2';

import Salutation from './Salutation';
//import Comments from './Comments';
import CommentComponent from './comments/CommentComponent'
import AdminList2 from './AdminList2'
import Admin from './admin/Admin'
import AdminAdd from './admin/AdminAdd';
import ContactsAppContainer from './ContactsAppContainer';
import TodoList from './todo/TodoList';
import TodoList1 from './todo/TodoList1';
import Adminv2ContainerComponent from './adminv2/Adminv2ContainerComponent';


import { CSSTransitionGroup } from 'react-transition-group' // ES6


const createResourceMutation = gql`
mutation {
createResource(county: "Buncombe", title: "Duke Power Plant Jobs", url:"http://dukeenergy.com") {
  _id 
  county
  title
  url
}
}
`;


let resourcesList = [ {
    id: 1,
    title: "Bumcombe",
    description: "County seat is Asheville",
    status: "location-1",
    tasks: [
    {
id: 1,
        name: "Top jobs",
done: true },
{
id: 2,
        name: "education",
        done: false
      },
{
id: 3,
        name: "news",
done: false }
]
}, {
    id: 2,
    title: "New Hampton",
    description: "County seat is Wilmington",
    status: "location-2",
    tasks: [
{
id: 1,
        name: "Jobs",
done: true },
{
id: 2,
        name: "Housing",
        done: false
      },
{
id: 3,
        name: "Legal Information Center",
done: false }
] 
},

{
    id: 3,
    title: "Transylvainia",
    description: "County seat is Brevard",
    status: "location-3",
    tasks: [
    {
id: 1,
        name: "Example",
done: true },
{
id: 2,
        name: "a Example",
        done: true
      },
{
id: 3,
        name: "another example",
done: false }
]
},

];



let cardsList = [ {
    id: 1,
    title: "Find Your Physician",
    description: "I'm looking for a specific doctor",
    status: "in-progress",
    tasks: []
}, {
    id: 2,
    title: "Find Your Plan",
    description: "I know the name of my Medic plan",
    status: "todo",
    tasks: [
{
id: 1,
        name: "Mission Health Pratt",
done: true },
{
id: 2,
        name: "Mission Health Pratt Health and Rehab",
        done: false
      },
{
id: 3,
        name: "My own",
done: false }
] },
];


let cardsList1 = [ {
    id: 1,
    title: "Original Daniels",
    description: "I'm looking for a specific doctor",
    status: "in-progress",
    tasks: []
}, {
    id: 2,
    title: "Zombie Daniels",
    description: "I know the name of my Medic plan",
    status: "todo",
    tasks: [
{
id: 1,
        name: "Mission Health Pratt",
done: true },
{
id: 2,
        name: "Mission Health Pratt Health and Rehab",
        done: false
      },
{
id: 3,
        name: "My own",
done: false }
] },
];

class App extends Component {
 
  render() {
     
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Daniel's Greatful Dead</h2>
          <ContactsAppContainer />
        </div>
        <p className="App-intro">
          Alternative Title: <span>Daniel's Greatful Dad</span>
        </p>
        <PhysicianHome cards={cardsList} />

<ButtonFly behavior="Submit" />
<ButtonFly className="btn-primary btn-secondary-outline" href="#" target="blank"/>
<ButtonFly className="btn-danger-outline btn-sm"/>
<ButtonFly className="btn-primary-outline btn-lg btn-block"/>







<CSSTransitionGroup transitionName='app' transitionAppear={true} transitionAppearTimeout={500}>
<h1>Tron</h1>
<p>with Bootstrap and SASS.</p>
<p><ButtonFly className="btn-primary btn-secondary-outline" href="#" target="blank"> </ButtonFly></p>
</CSSTransitionGroup>



<Salutation salutation="A Salutation passed and checked with a String required propType and less than 8 character custom validation" />

<CommentComponent />

<br/>
<br/>
<br/>
<br/>
 
<br/>
<br/>
<br/>
<br/>   
     <ColorOne color="#FF6663" /> 

    

     <DanielsFetchContainer cards={cardsList} />

     <h1>Greatful Dead Characters</h1>
     <h2>Greatful Dead Characters</h2>
     <h2>Greatful Dead Characters</h2>
     <h2>Greatful Dead Characters</h2>
     <h2>Greatful Dead Characters</h2>
     <h2>Greatful Dead Characters</h2>

      <CountyResource color="deeppink" /> 

   <DanielsFetchContainer2 cards={cardsList} />


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<AdminList2 />


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



<br/>
<br/>
<br/>

<Admin resources={resourcesList} />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<AdminAdd />

<ContactsAppContainer />
<button className="float-button">+</button>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<TodoList />


<br/>
<br/>
<br/>
<br/>

<TodoList1 />

<br/>
<br/>
<br/>
<br/>
      

<Adminv2ContainerComponent />

<br/>
<br/>
<br/>
<br/>      

</div>
      

      
     

     
      

    );
  }
}

export default App;
