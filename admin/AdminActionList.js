import React, { Component } from 'react';
import AdminAdd from './AdminAdd';
import ContactsAppContainer from '../ContactsAppContainer';
import CommentComponent from '../comments/CommentComponent'
class AdminActionList extends Component { 
	render() {
let tasks = this.props.tasks.map((task) => ( 
<li className="resourceactionlist__task">
<li defaultChecked={task.done} /> {task.name}
<a href="#" className="resourcelist__task--remove" />
</li> ));

return (
<div className="resourceactionlist">
<ul>{tasks}</ul>
<ContactsAppContainer /> 

<CommentComponent />
</div>



); }
}
export default AdminActionList;
