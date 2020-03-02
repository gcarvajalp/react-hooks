import React, { useState } from 'react';

const App = () => {

	const [count, setCount] = useState(0);
	const changeFunction = () => {
		setCount(prevCount => prevCount + 1);
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={changeFunction}>Change!</button>
		</div>
	);
}

export default App;