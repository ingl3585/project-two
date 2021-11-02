import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Favorites from './components/Favorites/Favorites';
import ContactMe from './components/ContactMe/ContactMe';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';

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
		let date = new Date(timestamp * 1000),
			hh = date.getHours(),
			h = hh,
			min = ('0' + date.getMinutes()).slice(-2),
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

	return (
		<div className='App'>
			<Route path='/' render={(props) => <Nav {...props} />} />
			<Route path='/favorites' component={Favorites} />
			<Route
				exact
				path='/'
				render={(props) => (
					<Weather
						{...props}
						currentWeather={currentWeather}
						weatherForecast={weatherForecast}
						convertTimestamp={convertTimestamp}
						handleSubmit={handleSubmit}
						setWeatherSearch={setWeatherSearch}
						handleClick={handleClick}
					/>
				)}
			/>
			<Route path='/contact' render={(props) => <ContactMe {...props} />} />
			<Footer />
		</div>
	);
};

export default App;
