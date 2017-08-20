import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList1 extends Component {
    render() {
    	const items = [
    	{ name: "First", done: false },
    	{ name: "Second", done: true }, 
    	{ name: "Third", done: false }
    	];

    	return (
    		<ul>
    		
    		{ items.map(item => <TodoItem name={item.name} done={item.done} /> ) }
    		</ul>
    		);
    }
}

export default TodoList1;