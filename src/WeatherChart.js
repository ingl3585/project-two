import React, { useEffect, useState } from 'react';

const CurrentWeatherData = () => {
	const [currentWeatherData, setCurrentWeatherData] = useState('');

	useEffect(() => {
		let cityName = 'Denver';
		let stateId = 'Minnesota';
		let key = 'b31bbe71e9d5a52bb445f901478d7116';
		let units = 'imperial';
		const weatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateId}&appid=${key}&units=${units}`;
		// const weatherDataUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
		const makeApiCall = (weatherDataUrl) => {
			return fetch(weatherDataUrl)
				.then((response) => response.json())
				.then((data) => console.log(data));
		};
		makeApiCall(weatherDataUrl);
	}, []);

	return (
		<div>
			{/* <div>Location: {currentWeatherData.name}</div>
			<div>Image: {currentWeatherData.name}</div>
			<div>Hi Temp: {currentWeatherData.name}</div>
			<div>Low Temp: {currentWeatherData.name}</div>
			<div>Temperature: {currentWeatherData.name}</div>
			<div>Conditions: {currentWeatherData.name}</div>
			<div>Pressure: {currentWeatherData.name}</div>
			<div>Wind Speed: {currentWeatherData.name}</div>
			<div>Wind Direction: {currentWeatherData.name}</div>
			<div>Wind Gusts: {currentWeatherData.name}</div>
			<div>Visibility: {currentWeatherData.name}</div>
			<div>Sunrise: {currentWeatherData.name}</div>
			<div>Sunset: {currentWeatherData.name}</div> */}
		</div>
	);
};

export default CurrentWeatherData;
