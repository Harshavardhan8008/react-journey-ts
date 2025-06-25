// to my reference
// import WelcomeCard from './components/WelcomeCard';
// import LegacyWelcomeCard from './components/LegacyWelcomeCard';
// import CounterClass from './components/CounterClass';
// import CounterFunction from './components/CounterFunction';
// import Timer from './components/Timer';
import UserCard from './components/UserCard';
import Counter from './components/useStateLearnings/Counter';
function App() {
	return (
		<div>
			{/* <WelcomeCard name={'naresh'} isBoy={true} />
			<LegacyWelcomeCard name={'Naresh'} />
			<CounterClass count={0} />
			<CounterFunction counter={10} />
			<Timer /> */}
			<UserCard />
			<Counter counter={1} />
		</div>
	);
}

export default App;
