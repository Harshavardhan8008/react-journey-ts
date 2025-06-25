import { useEffect, useState } from 'react';
let timerInstance: number | undefined;

const Timer = () => {
	const [timer, setTimer] = useState<number>(0);
	// this is for without start and stop button
	useEffect(() => {
		// const interval = setInterval(() => {
		// 	setTimer((timer) => timer + 1);
		// }, 1000);

		return () => {
			console.log('component unmounted.............');
			clearInterval(timerInstance);
		};
	}, []);

	//in this handleStart will work but not handleStop since on
	//click every render it will change the instance so
	// so for every change in setState, value changes but timerInstance value
	//becomes undefined as usual so handle stop won't work
	//to make it work we can move the let variable outside of the component
	const handleStart = () => {
		if (timerInstance) {
			return;
		}
		timerInstance = setInterval(() => {
			setTimer((value) => value + 1);
		}, 1000);
	};
	const handleStop = () => {
		clearInterval(timerInstance);
		timerInstance = undefined;
	};
	return (
		<div>
			<p>{timer}</p>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
};

export default Timer;
