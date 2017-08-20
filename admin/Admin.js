import React, {Component} from 'react';
import AdminList from './AdminList';


class Admin extends Component {
	render() {
		var admin = "Alex";
		return (
			
			<div className="admin">
			<h1>Hi, {admin}</h1>
			

<AdminList id='todo' title="Location 1" resources={ this.props.resources.filter((resource) => resource.status === "location-1")
} />
<AdminList id='in-progress' title="Location 2" resources={ this.props.resources.filter((resource) => resource.status === "location-2")
} />
<AdminList id='done' title='Location 3' resources={ this.props.resources.filter((resource) => resource.status === "location-3")
} />


			</div>
			);
	}
}


export default Admin;