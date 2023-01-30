import { useEffect, createContext, useReducer } from 'react';
import reducer from '../Reducer/reducer';

// here we manage the global state
export const MyContext = createContext();

const ContextContainer = (props) => {
	const tasks = [
		{ id: 0, text: 'Learn React', done: false },
		{ id: 1, text: 'eat', done: false },
		{ id: 2, text: 'sleep', done: false },
		{ id: 3, text: 'buy', done: false },
		{ id: 4, text: 'Learn JS', done: true },
		{ id: 5, text: 'walk', done: true },
		{ id: 6, text: 'run', done: true },
		{ id: 7, text: 'swim', done: true },
	];

	const [state, dispatch] = useReducer(reducer, tasks);

	const addItem = (value) => {
		dispatch({ type: 'ADD_ITEM', payload: value });
	};

	const updateItem = (id) => {
		dispatch({ type: 'UPDATE_ITEM', payload: id });
	};

	const todos = state.filter((element) => !element.done);

	const todones = state.filter((element) => element.done);

	useEffect(() => {
		const task = JSON.parse(localStorage.getItem('todos'));
		if (task) {
			dispatch({ type: 'ONLOAD' });
		}
	}, []);

	return (
		<MyContext.Provider value={{ todos, todones, addItem, updateItem }}>
			{props.children}
		</MyContext.Provider>
	);
};

export default ContextContainer;
