import React, { Component } from 'react';
import AdminActionList from './AdminActionList';
class Resource extends Component { 
	constructor() {
		super(...arguments);
		this.state = {
			showDetails: false
		};
	}

	toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
}

	render() {
		let resourceDetails;
		if (this.state.showDetails) {
			resourceDetails = (
				<div className="resource__details">
          {this.props.description}
          <AdminActionList resourceId={this.props.id} tasks={this.props.tasks} />
                </div>

				);
		};
    return (
      <div className="resource">
        <div className={
this.state.showDetails? "resource__title resource__title--is-open" : "resource__title"
} onClick={this.toggleDetails.bind(this) 
    }>{this.props.title}</div>
        {resourceDetails}
</div> );
} }
export default Resource;