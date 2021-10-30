import React, { useEffect, useState } from 'react';

const WeatherForecast = () => {
	const [weatherForecast, setWeatherForecast] = useState('');

	useEffect(() => {
		let city = 'Denver';
		let state = 'CO';
		let cityState = city + ',' + state;
		let key = 'f14fde324cf84653bcad1ab6ca1816e8';
		let days = '6';
		let units = 'I';
		const weatherDataUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&key=${key}&city=${cityState}&days=${days}&units=${units}`;
		const makeApiCall = (weatherDataUrl) => {
			return fetch(weatherDataUrl)
				.then((response) => response.json())
				.then((data) => setWeatherForecast(data));
		};
		makeApiCall(weatherDataUrl);
	}, []);
	return (
		<div>
			<header>
				<div>
					<h3>Weather Forecast</h3>
				</div>
			</header>
			<main>
				<div>
					<h4>Day 1</h4>
					<div>
						{weatherForecast ? weatherForecast.data[1].weather.icon : ''}
					</div>
					<div>
						High Temperature:{' '}
						{weatherForecast ? weatherForecast.data[1].max_temp : ''} °F
					</div>
					<div>
						Low Temperature:{' '}
						{weatherForecast ? weatherForecast.data[1].min_temp : ''} °F
					</div>
					<div>
						Precipitation Chance:{' '}
						{weatherForecast ? weatherForecast.data[1].pop : ''}%
					</div>
				</div>
				<div>
					<h4>Day 2</h4>
					<div>
						{weatherForecast ? weatherForecast.data[2].weather.icon : ''}
					</div>
					<div>
						High Temperature:{' '}
						{weatherForecast ? weatherForecast.data[2].max_temp : ''} °F
					</div>
					<div>
						Low Temperature:{' '}
						{weatherForecast ? weatherForecast.data[2].min_temp : ''} °F
					</div>
					<div>
						Precipitation Chance:{' '}
						{weatherForecast ? weatherForecast.data[2].pop : ''}%
					</div>
				</div>
				<div>
					<h4>Day 3</h4>
					<div>
						{weatherForecast ? weatherForecast.data[3].weather.icon : ''}
					</div>
					<div>
						High Temperature:{' '}
						{weatherForecast ? weatherForecast.data[3].max_temp : ''} °F
					</div>
					<div>
						Low Temperature:{' '}
						{weatherForecast ? weatherForecast.data[3].min_temp : ''} °F
					</div>
					<div>
						Precipitation Chance:{' '}
						{weatherForecast ? weatherForecast.data[3].pop : ''}%
					</div>
				</div>
				<div>
					<h4>Day 4</h4>
					<div>
						{weatherForecast ? weatherForecast.data[4].weather.icon : ''}
					</div>
					<div>
						High Temperature:{' '}
						{weatherForecast ? weatherForecast.data[4].max_temp : ''} °F
					</div>
					<div>
						Low Temperature:{' '}
						{weatherForecast ? weatherForecast.data[4].min_temp : ''} °F
					</div>
					<div>
						Precipitation Chance:{' '}
						{weatherForecast ? weatherForecast.data[4].pop : ''}%
					</div>
				</div>
				<div>
					<h4>Day 5</h4>
					<div>
						{weatherForecast ? weatherForecast.data[5].weather.icon : ''}
					</div>
					<div>
						High Temperature:{' '}
						{weatherForecast ? weatherForecast.data[5].max_temp : ''} °F
					</div>
					<div>
						Low Temperature:{' '}
						{weatherForecast ? weatherForecast.data[5].min_temp : ''} °F
					</div>
					<div>
						Precipitation Chance:{' '}
						{weatherForecast ? weatherForecast.data[5].pop : ''}%
					</div>
				</div>
			</main>
		</div>
	);
};

export default WeatherForecast;
