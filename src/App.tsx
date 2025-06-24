import WelcomeCard from './components/WelcomeCard';
import LegacyWelcomeCard from './components/LegacyWelcomeCard';
function App() {
	return (
		<div>
			<WelcomeCard name={'naresh'} isBoy={true} />
			<LegacyWelcomeCard name={'Naresh'} />
		</div>
	);
}

export default App;
