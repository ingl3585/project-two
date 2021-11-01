import React from 'react';

const CurrentWeatherData = ({ currentWeather, weatherForecast }) => {
	/// Credit: Convert UNIX Timestamp from --> https://gist.github.com/kmaida/6045266
	const convertTimestamp = (timestamp) => {
		var d = new Date(timestamp * 1000),
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
