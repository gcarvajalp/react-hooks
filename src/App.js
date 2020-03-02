import React, { useState, useEffect } from 'react';

const App = () => {

	const [count, setCount] = useState(0);
	const changeFunction = () => {
		setCount(prevCount => prevCount + 1);
	}

	useEffect(() => {
		/** */
	});

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={changeFunction}>Change!</button>
		</div>
	);
}

export default App;