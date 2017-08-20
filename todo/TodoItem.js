import React, { Component } from 'react';


class TodoItem extends Component {
	render() {
		return <li style={{
			textDecoration: this.props.done ? 'line-through' : 'none'
		}}>{ this.props.name } <a href='#' onClick={ this.props.onToggleDone}>{this.props.done ? 'mark as not done' : 'mark as done'}</a> </li>;
	}
}

export default TodoItem;