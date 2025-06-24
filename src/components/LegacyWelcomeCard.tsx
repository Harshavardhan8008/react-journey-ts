import React from 'react';

class LegacyWelcomeCard extends React.Component<{ name: string }> {
	render() {
		return (
			// to print it in a new line use <br/>

			// <div>{`Hello ${this.props.name}
			// 	<br />
			//  Welcome to React Class Component!`}</div>
			//the above way don't work for br because in jsx only it is treated as br
			// but in literal string it is literal string
			// <div>
			// 	{[
			// 		`Hello ${this.props.name}`,
			// 		<br key={1} />,
			// 		`Welcome to React Class Component!`,
			// 	]}
			// </div>
			//this is another way we can use array in jsx everything is rendered in order so no
			//issues
			//but the best way is this
			<div>
				Hello {this.props.name}
				<br /> Welcome to React Class Component!
			</div>
		);
	}
}

export default LegacyWelcomeCard;
