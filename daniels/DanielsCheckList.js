import React, { Component } from 'react';
class CheckList extends Component { render() {
let tasks = this.props.tasks.map((task) => ( <li className="danielschecklist__task">
<input type="checkbox" defaultChecked={task.done} /> {task.name}
<a href="#" className="danielschecklist__task--remove" />
</li> ));

return (
<div className="danielschecklist">
<ul>{tasks}</ul> </div>
); }
}
export default CheckList;
