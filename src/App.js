import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import CurrentWeatherData from './components/CurrentWeather/CurrentWeather';
import MoonInfo from './components/MoonInfo/MoonInfo';
import Nav from './components/Nav/Nav';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
// import '../node_modules/amcharts_weather_icons_1.0.0/animated';
// import '../node_modules/weather-api-icons';

const App = () => {
	return (
		<div className='App'>
			<Nav className='nav-container' />
			<CurrentWeatherData />
			<WeatherForecast />
			<MoonInfo />
			<ContactMe />
		</div>
	);
};

export default App;
