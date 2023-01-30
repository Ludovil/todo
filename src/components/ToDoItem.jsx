import React from 'react';
import { MyContext } from '../context/ContextContainer';
import { useContext } from 'react';

const ToDoItem = ({ item }) => {
	//const todo = item;

	const { updateItem } = useContext(MyContext);

	return (
		<div className="todos-item">
			<p>{item.text}</p>
			<div className="action">
				<button onClick={() => updateItem(item.id)} className="btn">
					&#10004;
				</button>
			</div>
		</div>
	);
};

export default ToDoItem;
