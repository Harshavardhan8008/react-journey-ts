import WelcomeCard from './components/WelcomeCard';
import LegacyWelcomeCard from './components/LegacyWelcomeCard';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
function App() {
	return (
		<div>
			<WelcomeCard name={'naresh'} isBoy={true} />
			<LegacyWelcomeCard name={'Naresh'} />
			<CounterClass count={0} />
			<CounterFunction counter={10} />
		</div>
	);
}

export default App;
