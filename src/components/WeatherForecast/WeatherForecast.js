import React from 'react';

const WeatherForecast = ({ weatherForecast }) => {
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
