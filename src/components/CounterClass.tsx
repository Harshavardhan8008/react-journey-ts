import React from 'react';

type CounterProps = {
	count: number;
};

type CounterState = {
	count: number;
};

class CounterClass extends React.Component<CounterProps, CounterState> {
	//using CounterState
	//even Without CounterState also works fine  like CounterState= {} line just the
	// creating type and passing is enough because typescript can infer and understand thart
	// but this is the best practice
	// so code knows where to look for the reference
	state: CounterState = {
		count: this.props.count,
	};
	handleIncrement = () => {
		this.setState((prevState) => ({
			// so here we are using prevState.count so
			//but in typescript using it is not permitted
			// without creating the type for the state
			// so we create a type name CounterState
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			<div>
				<p>Class Count: {this.state.count}</p>
				<button onClick={this.handleIncrement}>Increment</button>
			</div>
		);
	}
}

export default CounterClass;
