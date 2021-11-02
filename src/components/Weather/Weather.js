import React from 'react';
import { Link } from 'react-router-dom';
import './Weather.css';
import newMoon from '../../img/new-moon.png';
import waxingCrescent from '../../img/waxing-crescent.png';
import firstQuarter from '../../img/first-quarter.png';
import waxingGibbous from '../../img/waxing-gibbous.png';
import fullMoon from '../../img/full-moon.png';
import waningGibbous from '../../img/waning-gibbous.png';
import lastQuarter from '../../img/last-quarter.png';
import waningCrescent from '../../img/waning-crescent.png';
import locationIcon from '../../img/locationpin.png';

const Weather = ({
	currentWeather,
	weatherForecast,
	convertTimestamp,
	handleSubmit,
	setWeatherSearch,
	handleClick,
}) => {
	let sunRise = weatherForecast ? weatherForecast.data[0].sunrise_ts : '';
	let sunSet = weatherForecast ? weatherForecast.data[0].sunset_ts : '';
	let icon = currentWeather ? currentWeather.weather.icon : '';
	let dayOneIcon = weatherForecast ? weatherForecast.data[1].weather.icon : '';
	let dayTwoIcon = weatherForecast ? weatherForecast.data[2].weather.icon : '';
	let dayThreeIcon = weatherForecast
		? weatherForecast.data[3].weather.icon
		: '';
	let dayFourIcon = weatherForecast ? weatherForecast.data[4].weather.icon : '';
	let dayFiveIcon = weatherForecast ? weatherForecast.data[5].weather.icon : '';
	let moonRise = weatherForecast ? weatherForecast.data[0].moonrise_ts : '';
	let moonSet = weatherForecast ? weatherForecast.data[0].moonset_ts : '';
	let phase = weatherForecast
		? weatherForecast.data[0].moon_phase_lunation
		: '';

	const moonPhase = () => {
		if (phase === 0) {
			return (
				<div>
					<span>New Moon</span>
					<img className='moon-img' src={newMoon} alt='New Moon' />
				</div>
			);
		}
		if (phase < 0.25 && phase > 0) {
			return (
				<div>
					<span>Waxing Crescent</span>
					<img
						className='moon-img'
						src={waxingCrescent}
						alt='Waxing Crescent'
					/>
				</div>
			);
		}
		if (phase === 0.25) {
			return (
				<div>
					<span>First Quarter</span>
					<img className='moon-img' src={firstQuarter} alt='First Quarter' />
				</div>
			);
		}
		if (phase > 0.25 && phase < 0.5) {
			return (
				<div>
					<span>Waxing Gibbous</span>
					<img className='moon-img' src={waxingGibbous} alt='Waxing Gibbous' />
				</div>
			);
		}
		if (phase === 0.5) {
			return (
				<div>
					<span>Full Moon</span>
					<img className='moon-img' src={fullMoon} alt='Full Moon' />
				</div>
			);
		}
		if (phase > 0.5 && phase < 0.75) {
			return (
				<div>
					<span>Waning Gibbous</span>
					<img className='moon-img' src={waningGibbous} alt='Waning Gibbous' />
				</div>
			);
		}
		if (phase === 0.75) {
			return (
				<div>
					<span>Last Quarter</span>
					<img className='moon-img' src={lastQuarter} alt='Last Quarter' />
				</div>
			);
		}
		if (phase > 0.75 && phase < 1) {
			return (
				<div>
					<span>Waning Crescent</span>
					<img
						className='moon-img'
						src={waningCrescent}
						alt='Waning Crescent'
					/>
				</div>
			);
		}
	};

	moonPhase();

	return (
		<div>
			<div>
				<div>
					<input
						onChange={(event) => {
							let input = event.target.value;
							setWeatherSearch(input.replace(/\s+/g, '')); //Remove spaces from input -> https://stackoverflow.com/questions/24580912/remove-all-white-space-from-string-javascript
						}}
						type='text'
						placeholder='New York City, NY'></input>
					<button onClick={handleSubmit} type='submit'>
						Submit
					</button>
					<img
						className='location-icon'
						onClick={handleClick}
						src={locationIcon}
						alt='location'
					/>
				</div>
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
			<div>
				<h3>Moon Info</h3>
				<div className='moon-phase'>Moon Phase: {moonPhase(phase)}</div>
				<div>Moonrise: {convertTimestamp(moonRise)}</div>
				<div>Moonset: {convertTimestamp(moonSet)}</div>
				<a
					target='_blank'
					href='https://icons8.com/icons/set/moon-phases'
					rel='noreferrer'>
					Moon Icons
				</a>{' '}
				by{' '}
				<a target='_blank' href='https://icons8.com' rel='noreferrer'>
					Icons8
				</a>
			</div>
			<Link to='/contact'>Contact Me</Link>
		</div>
	);
};

export default Weather;
