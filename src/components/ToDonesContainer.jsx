import React from 'react';
import ToDoneItem from './ToDoneItem';
import { useContext } from 'react';
import { MyContext } from '../context/ContextContainer';

const ToDonesContainer = ({ items, handleChange }) => {
	const { todones } = useContext(MyContext);
	const toDonesItems = todones.map((todone) => {
		return (
			<ToDoneItem
				key={todone.id}
				item={todone}
				//onHandleStatus={updateItem}
				// onHandleRemove={handleRemove}
			/>
		);
	});
	return (
		<div className="todones-container">
			<h3>Backlog</h3>
			{todones.length !== 0 && toDonesItems}
		</div>
	);
};

export default ToDonesContainer;
