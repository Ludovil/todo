import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/ContextContainer';

const ToDoneItem = ({ item, onHandleStatus }) => {
	const { updateItem } = useContext(MyContext);
	return (
		<div className="todones-item">
			<p>{item.text}</p>
			<div className="actions">
				<button onClick={() => updateItem(item.id)} className="btn">
					&#8635;
				</button>
				{/* <button onClick={() => onHandleRemove(item.id)} className="btn">
					X
				</button> */}
			</div>
		</div>
	);
};

export default ToDoneItem;
