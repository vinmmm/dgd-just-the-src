import React, {Component} from 'react';
import Resource from './Resource';

class AdminList extends Component { 
  render() {
var resources = this.props.resources.map((resource) => { 
  return <Resource id={resource.id}
                   title={resource.title}
                   description={resource.description}
                   tasks={resource.tasks}
                    />
});

return (
<div className="resourcelist">
<h1>{this.props.title}</h1>
{resources} </div>
); }
}
export default AdminList;