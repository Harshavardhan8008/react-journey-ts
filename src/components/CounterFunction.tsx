import { useState } from 'react';

type CounterProps = {
	counter: number;
};

const CounterFunction = ({ counter }: CounterProps) => {
	// we gave state type directly because it would be redundant to define it like
	// for props
	//since props is an object we need to define it like that
	// the syntax <> is used to tell the typescript which type we are working mostly for arrays. objects , promises and useState
	const [counterState, setCounterState] = useState<number>(counter);

	const handleIncrement = () => {
		setCounterState((prevState) => prevState + 1);
	};

	return (
		<div>
			<p>Function Count: {counterState}</p>
			<button onClick={handleIncrement}>Increment</button>
		</div>
	);
};

export default CounterFunction;
