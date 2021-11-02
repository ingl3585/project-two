import React from 'react';
import './CurrentWeather.css';

const CurrentWeatherData = ({
	currentWeather,
	weatherForecast,
	convertTimestamp,
}) => {
	let sunRise = weatherForecast ? weatherForecast.data[0].sunrise_ts : '';
	let sunSet = weatherForecast ? weatherForecast.data[0].sunset_ts : '';
	let icon = currentWeather ? currentWeather.weather.icon : '';

	return (
		<div>
			<div>
				Location: {currentWeather.city_name}, {currentWeather.state_code}
			</div>
			<div>
				<img
					src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
					alt='weather-icon'
				/>
			</div>
			<div>Temperature: {currentWeather.temp}°F</div>
			<div>
				High Temperature:{' '}
				{weatherForecast ? weatherForecast.data[0].high_temp : ''}°F
			</div>
			<div>
				Low Temperature:{' '}
				{weatherForecast ? weatherForecast.data[0].low_temp : ''}°F
			</div>
			<div>
				Conditions: {currentWeather ? currentWeather.weather.description : ''}
			</div>
			<div>
				Precipitation Chance:{' '}
				{weatherForecast ? weatherForecast.data[0].pop : ''}%
			</div>
			<div>Relative Humidity: {currentWeather ? currentWeather.rh : ''}%</div>
			<div>Barometric Pressure: {currentWeather.pres} mb</div>
			<div>Wind Speed: {currentWeather.wind_spd} mph</div>
			<div>
				Wind Direction: {currentWeather.wind_dir}° {currentWeather.wind_cdir}
			</div>
			<div>Visibility: {currentWeather ? currentWeather.vis : ''} mi</div>
			<div>Sunrise: {convertTimestamp(sunRise)}</div>
			<div>Sunset: {convertTimestamp(sunSet)}</div>
		</div>
	);
};

export default CurrentWeatherData;
