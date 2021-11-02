import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import CurrentWeatherData from './components/CurrentWeather/CurrentWeather';
import MoonInfo from './components/MoonInfo/MoonInfo';
import Nav from './components/Nav/Nav';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import React, { useState, useEffect } from 'react';

const App = () => {
	const [currentWeather, setCurrentWeather] = useState('');
	const [weatherForecast, setWeatherForecast] = useState('');
	const [weatherSearch, setWeatherSearch] = useState('');

	const handleSubmit = () => {
		let cityState = weatherSearch;
		let units = 'I';
		let days = '6';
		const key = 'f14fde324cf84653bcad1ab6ca1816e8';
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
			let units = 'I';
			let days = '6';
			const key = 'f14fde324cf84653bcad1ab6ca1816e8';
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

	useEffect(() => {
		let cityState = 'New York';
		let units = 'I';
		let days = '6';
		const key = 'f14fde324cf84653bcad1ab6ca1816e8';
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
	}, []);

	/// Credit: Convert UNIX Timestamp from --> https://gist.github.com/kmaida/6045266
	const convertTimestamp = (timestamp) => {
		let d = new Date(timestamp * 1000),
			hh = d.getHours(),
			h = hh,
			min = ('0' + d.getMinutes()).slice(-2),
			ampm = 'AM',
			time;
		if (hh > 12) {
			h = hh - 12;
			ampm = 'PM';
		} else if (hh === 12) {
			h = 12;
			ampm = 'PM';
		} else if (hh === 0) {
			h = 12;
		}
		time = h + ':' + min + ' ' + ampm;
		return time;
	};

	console.log(currentWeather);
	console.log(weatherForecast);

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
				convertTimestamp={convertTimestamp}
			/>
			<WeatherForecast
				weatherForecast={weatherForecast}
				convertTimestamp={convertTimestamp}
			/>
			<MoonInfo
				weatherForecast={weatherForecast}
				convertTimestamp={convertTimestamp}
			/>
			<ContactMe />
		</div>
	);
};

export default App;
