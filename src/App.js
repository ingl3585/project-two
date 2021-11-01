import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import CurrentWeatherData from './components/CurrentWeather/CurrentWeather';
import MoonInfo from './components/MoonInfo/MoonInfo';
import Nav from './components/Nav/Nav';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import React, { useState } from 'react';

const App = () => {
	const [currentWeather, setCurrentWeather] = useState('');
	const [weatherForecast, setWeatherForecast] = useState('');
	const [weatherSearch, setWeatherSearch] = useState('');

	const handleSubmit = () => {
		let cityState = weatherSearch;
		let key = 'f14fde324cf84653bcad1ab6ca1816e8';
		let units = 'I';
		let days = '6';
		const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?&key=${key}&city=${cityState}&units=${units}`;
		const forecastWeatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&key=${key}&city=${cityState}&days=${days}&units=${units}`;

		const makeApiCallOne = (currentWeatherUrl) => {
			return fetch(currentWeatherUrl)
				.then((response) => response.json())
				.then((data) => setCurrentWeather(data.data[0]));
		};
		makeApiCallOne(currentWeatherUrl);
		const makeApiCallTwo = (forecastWeatherUrl) => {
			return fetch(forecastWeatherUrl)
				.then((response) => response.json())
				.then((data) => setWeatherForecast(data));
		};
		makeApiCallTwo(forecastWeatherUrl);
	};

	const handleClick = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			let key = 'f14fde324cf84653bcad1ab6ca1816e8';
			let units = 'I';
			let days = '6';
			const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${key}&units=${units}`;
			const forecastWeatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&key=${key}&lat=${latitude}&lon=${longitude}&days=${days}&units=${units}`;
			const makeApiCallOne = (currentWeatherUrl) => {
				return fetch(currentWeatherUrl)
					.then((response) => response.json())
					.then((data) => setCurrentWeather(data.data[0]));
			};
			makeApiCallOne(currentWeatherUrl);
			const makeApiCallTwo = (forecastWeatherUrl) => {
				return fetch(forecastWeatherUrl)
					.then((response) => response.json())
					.then((data) => setWeatherForecast(data));
			};
			makeApiCallTwo(forecastWeatherUrl);
		});
	};

	return (
		<div className='App'>
			<Nav
				className='nav-container'
				handleSubmit={handleSubmit}
				setWeatherSearch={setWeatherSearch}
				handleClick={handleClick}
			/>
			<CurrentWeatherData
				currentWeather={currentWeather}
				weatherForecast={weatherForecast}
			/>
			<WeatherForecast weatherForecast={weatherForecast} />
			<MoonInfo weatherForecast={weatherForecast} />
			<ContactMe />
		</div>
	);
};

export default App;
