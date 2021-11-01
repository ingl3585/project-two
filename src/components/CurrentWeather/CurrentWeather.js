import React from 'react';

const CurrentWeatherData = ({ currentWeather }) => {
	// // Sunrise/sunset
	// let date = new Date();
	// let timezoneOffset = date.getTimezoneOffset() / 60;

	return (
		<div>
			<div>
				Location: {currentWeather.city_name}, {currentWeather.state_code}
			</div>
			<div>Image: {currentWeather ? currentWeather.weather.icon : ''}</div>
			<div>Temperature: {currentWeather.temp}°F</div>
			<div>High Temperature: ? °F</div>
			<div>Low Temperature: ? °F</div>
			<div>
				Conditions: {currentWeather ? currentWeather.weather.description : ''}
			</div>
			<div>Pressure: {currentWeather.slp} mb</div>
			<div>Wind Speed: {currentWeather.wind_spd} mph</div>
			<div>
				Wind Direction: {currentWeather.wind_dir}° {currentWeather.wind_cdir}
			</div>
			<div>Wind Gusts: ? mph</div>
			<div>Visibility: {currentWeather ? currentWeather.vis : ''} mi</div>
			<div>Sunrise: ?</div>
			<div>Sunset: ?</div>
		</div>
	);
};

export default CurrentWeatherData;
