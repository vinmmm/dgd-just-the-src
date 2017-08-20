import React, { Component } from 'react';
import AdminActionList from './AdminActionList';
class Resource extends Component { 
	render() {
    return (
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        <div className="card__details">
          {this.props.description}
          <AdminActionList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
</div> );
} }
export default Resource;