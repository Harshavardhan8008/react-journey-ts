type WelcomeCardProps = {
	name: string;
	isBoy?: boolean;
};
// we use the same name as welcomeCardProps inside the function and then
// we can use props and then props.name or use destructing to get the name directly here
//welcomeCardProps is just a reference or blueprint
// const WelcomeCard = (props: WelcomeCardProps) => {
// 	return <div>{props.name}</div>;
// };
const WelcomeCard = ({ name, isBoy = false }: WelcomeCardProps) => {
	return (
		<div>
			{name}
			{isBoy ? `Is a Boy` : `Is a girl`}
		</div>
	);
};

export default WelcomeCard;
