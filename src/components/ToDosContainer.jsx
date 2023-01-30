import React from 'react';
import ToDoItem from './ToDoItem';
import { useState, useContext } from 'react';
import { MyContext } from '../context/ContextContainer';

const ToDosContainer = () => {
	const { todos, addItem } = useContext(MyContext);
	const [value, setValue] = useState('');

	const handleNewTodoChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addItem(value);
		setValue('');
	};

	const toDosItems = todos.map((todo) => {
		return <ToDoItem key={todo.id} item={todo} />;
	});

	return (
		<div className="todos-container">
			<form className="todo-form" onSubmit={handleSubmit}>
				<label htmlFor="todo" className="input_item">
					<input
						type="text"
						name="todo"
						id="todo"
						value={value}
						onChange={handleNewTodoChange}
					></input>
				</label>
				<input type="submit" value="ADD" className="btn"></input>
			</form>
			<h3>TO DO </h3>
			{todos.length !== 0 && toDosItems}
		</div>
	);
};

export default ToDosContainer;
