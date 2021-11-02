import React from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ weatherForecast, convertTimestamp }) => {
	let dayOneIcon = weatherForecast ? weatherForecast.data[1].weather.icon : '';
	let dayTwoIcon = weatherForecast ? weatherForecast.data[2].weather.icon : '';
	let dayThreeIcon = weatherForecast
		? weatherForecast.data[3].weather.icon
		: '';
	let dayFourIcon = weatherForecast ? weatherForecast.data[4].weather.icon : '';
	let dayFiveIcon = weatherForecast ? weatherForecast.data[5].weather.icon : '';

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
						<img
							src={`https://www.weatherbit.io/static/img/icons/${dayOneIcon}.png`}
							alt='weather-icon'
						/>
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
					<div>
						Sunrise:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[1].sunrise_ts : ''
						)}
					</div>
					<div>
						Sunset:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[1].sunset_ts : ''
						)}
					</div>
				</div>
				<div>
					<h4>Day 2</h4>
					<div>
						<img
							src={`https://www.weatherbit.io/static/img/icons/${dayTwoIcon}.png`}
							alt='weather-icon'
						/>
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
					<div>
						Sunrise:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[2].sunrise_ts : ''
						)}
					</div>
					<div>
						Sunset:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[2].sunset_ts : ''
						)}
					</div>
				</div>
				<div>
					<h4>Day 3</h4>
					<div>
						<img
							src={`https://www.weatherbit.io/static/img/icons/${dayThreeIcon}.png`}
							alt='weather-icon'
						/>
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
					<div>
						Sunrise:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[3].sunrise_ts : ''
						)}
					</div>
					<div>
						Sunset:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[3].sunset_ts : ''
						)}
					</div>
				</div>
				<div>
					<h4>Day 4</h4>
					<div>
						<img
							src={`https://www.weatherbit.io/static/img/icons/${dayFourIcon}.png`}
							alt='weather-icon'
						/>
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
					<div>
						Sunrise:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[4].sunrise_ts : ''
						)}
					</div>
					<div>
						Sunset:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[4].sunset_ts : ''
						)}
					</div>
				</div>
				<div>
					<h4>Day 5</h4>
					<div>
						<img
							src={`https://www.weatherbit.io/static/img/icons/${dayFiveIcon}.png`}
							alt='weather-icon'
						/>
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
					<div>
						Sunrise:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[5].sunrise_ts : ''
						)}
					</div>
					<div>
						Sunset:{' '}
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[5].sunset_ts : ''
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default WeatherForecast;
