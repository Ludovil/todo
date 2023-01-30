const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			const newItem = {
				id: state.length,
				text: action.payload,
				done: false,
			};
			localStorage.setItem('todos', JSON.stringify(state));
			return [...state, newItem];
		case 'UPDATE_ITEM':
			const updatedItem = state.map((item) => {
				return item.id === action.payload
					? { ...item, done: !item.done }
					: item;
			});
			localStorage.setItem('todos', JSON.stringify(updatedItem));
			return updatedItem;
		case 'ONLOAD':
			return JSON.parse(localStorage.getItem('todos'));

		default:
			throw new Error('No action found');
	}
};

export default reducer;
