import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Salutation extends Component { 
	render() {
return ( 
	<h1>{this.props.salutation}</h1>
) 
}
}

let titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 8) {
      return new Error(
        `${propName} in ${componentName}  is longer than 8 characters`
); }
} }
Salutation.propTypes = {
  salutation: titlePropType
}

Salutation.defaultProps = {
  salutation: "This is the defaultProps Salutation"
}

export default Salutation;