import * as React from 'react';

const ResourceDetail = ( { resource } ) => (
		<div>
			{ resource ? 
				<div>
				<h2>{ resource.name }</h2>
				
				<h3>Specifics:</h3>
				<p style={{ whiteSpace: 'pre-wrap'}}>{ resource.specifics }</p>

				<h3>Instructions:</h3>
				<p style={{ whiteSpace: 'pre-wrap'}}>{ resource.instructions }</p>
		</div>
		:
		<div> Choose a resource on the left or create a new on</div>
			}
		</div>

	);

ResourceDetail.propTypes = {
	resource: React.PropTypes.object
};

export default ResourceDetail;