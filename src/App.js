import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import CurrentWeatherData from './components/CurrentWeather/CurrentWeather';
import MoonInfo from './components/MoonInfo/MoonInfo';
import Nav from './components/Nav/Nav';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import React, { useEffect, useState } from 'react';
// import '../node_modules/amcharts_weather_icons_1.0.0/animated';
// import '../node_modules/weather-api-icons';

const App = () => {
	const [currentWeather, setCurrentWeather] = useState('');
	const [weatherForecast, setWeatherForecast] = useState('');

	let city = 'Minneapolis';
	let state = 'MN';
	let cityState = city + ',' + state;
	let key = 'f14fde324cf84653bcad1ab6ca1816e8';
	let units = 'I';
	let days = '6';
	const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?&key=${key}&city=${cityState}&units=${units}`;
	const forecastWeatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&key=${key}&city=${cityState}&days=${days}&units=${units}`;

	useEffect(() => {
		const makeApiCall = (currentWeatherUrl) => {
			return fetch(currentWeatherUrl)
				.then((response) => response.json())
				.then((data) => setCurrentWeather(data.data[0]));
		};
		makeApiCall(currentWeatherUrl);
	}, [currentWeatherUrl]);

	useEffect(() => {
		const makeApiCall = (forecastWeatherUrl) => {
			return fetch(forecastWeatherUrl)
				.then((response) => response.json())
				.then((data) => setWeatherForecast(data));
		};
		makeApiCall(forecastWeatherUrl);
	}, [forecastWeatherUrl]);

	return (
		<div className='App'>
			<Nav className='nav-container' />
			<CurrentWeatherData currentWeather={currentWeather} />
			<WeatherForecast weatherForecast={weatherForecast} />
			<MoonInfo weatherForecast={weatherForecast} />
			<ContactMe />
		</div>
	);
};

export default App;
