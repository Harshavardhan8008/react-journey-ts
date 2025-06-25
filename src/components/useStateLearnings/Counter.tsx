import React, { useState, type JSX } from 'react';

type CounterProps = {
	counter: number;
};
function Counter({ counter }: CounterProps): JSX.Element {
	// this is another way
	// const CounterArrow = (): JSX.Element => {
	// 	return <div>vinay</div>;
	// };
	const [count, setCount] = useState<number>(counter);
	const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(event.target);
		setCount((prevCount) => prevCount + 1);
	};
	const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(event.target);
		//it is needed for reducing for even negative values
		// setCount((prevCount) => prevCount - 1);
		//but to make it always more than 0
		// we can use Max so it prevents from making negative values and always make sure the value is greater than 0
		setCount((prevCount) => Math.max(0, prevCount - 1));
	};
	return (
		<div
			style={{
				border: '1px solid #ddd',
				padding: '20px',
				margin: '20px',
				borderRadius: '8px',
				maxWidth: '300px',
				textAlign: 'center',
			}}
		>
			<h3>Simple Counter Example (TypeScript)</h3>
			<p>
				Current Count: <strong style={{ fontSize: '24px' }}>{count}</strong>
			</p>
			<button
				onClick={handleIncrement}
				style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
			>
				Increment
			</button>
			<button
				onClick={handleDecrement}
				style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
			>
				Decrement
			</button>
		</div>
	);
}

export default Counter;
