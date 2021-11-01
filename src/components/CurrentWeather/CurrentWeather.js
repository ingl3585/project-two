import React, { useEffect, useState } from 'react';

const CurrentWeatherData = () => {
	const [currentWeatherData, setCurrentWeatherData] = useState('');

	useEffect(() => {
		let city = 'Denver';
		let state = 'CO';
		let cityState = city + ',' + state;
		let key = 'f14fde324cf84653bcad1ab6ca1816e8';
		let units = 'I';
		const weatherDataUrl = `https://api.weatherbit.io/v2.0/current?&key=${key}&city=${cityState}&units=${units}`;
		const makeApiCall = (weatherDataUrl) => {
			return fetch(weatherDataUrl)
				.then((response) => response.json())
				.then((data) => setCurrentWeatherData(data.data[0]));
		};
		makeApiCall(weatherDataUrl);
	}, []);

	// Sunrise/sunset Time

	let date = new Date();
	let timezoneOffset = date.getTimezoneOffset() / 60;
	console.log(timezoneOffset);

	return (
		<div>
			<div>
				Location: {currentWeatherData.city_name},{' '}
				{currentWeatherData.state_code}
			</div>
			<div>
				Image: {currentWeatherData ? currentWeatherData.weather.icon : ''}
			</div>
			<div>Temperature: {currentWeatherData.temp}°F</div>
			<div>High Temperature: ? °F</div>
			<div>Low Temperature: ? °F</div>
			<div>
				Conditions:{' '}
				{currentWeatherData ? currentWeatherData.weather.description : ''}
			</div>
			<div>Pressure: {currentWeatherData.slp} mb</div>
			<div>Wind Speed: {currentWeatherData.wind_spd} mph</div>
			<div>
				Wind Direction: {currentWeatherData.wind_dir}°{' '}
				{currentWeatherData.wind_cdir}
			</div>
			<div>Wind Gusts: ? mph</div>
			<div>Visibility: {currentWeatherData.vis} mi</div>
			<div>Sunrise: ?</div>
			<div>Sunset: ?</div>
		</div>
	);
};

export default CurrentWeatherData;
