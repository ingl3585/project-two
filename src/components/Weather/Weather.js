import './Weather.css';
import React from 'react';
import newMoon from '../../img/new-moon.png';
import waxingCrescent from '../../img/waxing-crescent.png';
import firstQuarter from '../../img/first-quarter.png';
import waxingGibbous from '../../img/waxing-gibbous.png';
import fullMoon from '../../img/full-moon.png';
import waningGibbous from '../../img/waning-gibbous.png';
import lastQuarter from '../../img/last-quarter.png';
import waningCrescent from '../../img/waning-crescent.png';
import locationIcon from '../../img/pin.png';
import emptyFav from '../../img/empty-fav.png';
// import fullFav from '../../img/full-fav.png';
import sunrise from '../../img/sunrise.png';
import sunset from '../../img/sunset.png';
import precipitation from '../../img/precipitation.png';

const Weather = ({
	addToFavorites,
	currentWeather,
	weatherForecast,
	convertTimestamp,
	convertTimestampMoon,
	dailyHoliday,
	handleSubmit,
	setWeatherSearch,
	weatherSearch,
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
				<div className='moon-phase-info-container'>
					<span className='moon-phase-title'>Phase: New Moon</span>
					<img className='moon-img' src={newMoon} alt='New Moon' />
				</div>
			);
		}
		if (phase < 0.25 && phase > 0) {
			return (
				<div className='moon-phase-info-container'>
					<span>Phase: Waxing Crescent</span>
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
				<div className='moon-phase-info-container'>
					<img className='moon-img' src={firstQuarter} alt='First Quarter' />
					<span className='moon-phase-title'>Phase: First Quarter</span>
				</div>
			);
		}
		if (phase > 0.25 && phase < 0.5) {
			return (
				<div className='moon-phase-info-container'>
					<img className='moon-img' src={waxingGibbous} alt='Waxing Gibbous' />
					<span className='moon-phase-title'>Phase: Waxing Gibbous</span>
				</div>
			);
		}
		if (phase === 0.5) {
			return (
				<div className='moon-phase-info-container'>
					<img className='moon-img' src={fullMoon} alt='Full Moon' />
					<span className='moon-phase-title'>Phase: Full Moon</span>
				</div>
			);
		}
		if (phase > 0.5 && phase < 0.75) {
			return (
				<div className='moon-phase-info-container'>
					<img className='moon-img' src={waningGibbous} alt='Waning Gibbous' />
					<span className='moon-phase-title'>Phase: Waning Gibbous</span>
				</div>
			);
		}
		if (phase === 0.75) {
			return (
				<div className='moon-phase-info-container'>
					<img className='moon-img' src={lastQuarter} alt='Last Quarter' />
					<span className='moon-phase-title'>Phase: Last Quarter</span>
				</div>
			);
		}
		if (phase > 0.75 && phase < 1) {
			return (
				<div className='moon-phase-info-container'>
					<img
						className='moon-img'
						src={waningCrescent}
						alt='Waning Crescent'
					/>
					<span className='moon-phase-title'>Phase: Waning Crescent</span>
				</div>
			);
		}
	};

	moonPhase();

	return (
		<div className='weather-container'>
			<div className='current-weather-container'>
				<div className='national-holiday-container'>
					Today's National Holiday: {dailyHoliday}
				</div>
				<div className='search-container'>
					<img
						className='empty-fav-icon'
						onClick={() => addToFavorites(weatherSearch)}
						src={emptyFav}
						alt='fav-icon'
					/>
					<input
						className='location-form'
						onChange={(event) => {
							let input = event.target.value;
							setWeatherSearch(input.replace(/\s+/g, '')); //Remove spaces from input -> https://stackoverflow.com/questions/24580912/remove-all-white-space-from-string-javascript
						}}
						type='text'
						placeholder='New York City, NY'></input>
					<button
						className='location-button'
						onClick={handleSubmit}
						type='submit'>
						Submit
					</button>
					<img
						className='location-icon'
						onClick={handleClick}
						src={locationIcon}
						alt='location'
					/>
				</div>
				<div className='current-weather-icon-container'>
					<img
						src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
						alt='weather-icon'
					/>
				</div>
				<div className='first-current-weather-info-container'>
					<div>
						{currentWeather.city_name}, {currentWeather.state_code}
					</div>
					<div>{currentWeather.temp}°F</div>
					<div>{currentWeather ? currentWeather.weather.description : ''}</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[0].high_temp : ''}°F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[0].low_temp : ''}°F
					</div>
				</div>
				<div className='second-current-weather-info-container'>
					<div>
						<img src={sunrise} alt='sunrise-icon' />
						{convertTimestamp(sunRise)}
					</div>
					<div>
						<img src={precipitation} alt='precip-chance-icon' />
						{weatherForecast ? weatherForecast.data[0].pop : ''}%
					</div>
					<div>
						<img src={sunset} alt='sunset-icon' />
						{convertTimestamp(sunSet)}
					</div>
				</div>
			</div>
			<div className='moon-info-container'>
				<div className='moon-info-title'>Moon Information</div>
				<div className='moon-phase'>{moonPhase(phase)}</div>
				<div className='moonrise-moonset-section'>
					<div className='moonrise-section'>
						Moonrise: {convertTimestampMoon(moonRise)}
					</div>
					<div className='moonset-section'>
						Moonset: {convertTimestampMoon(moonSet)}
					</div>
				</div>
			</div>
			<div className='weather-forecast-container'>
				<header className='weather-forecast-title'>
					<div>
						<div>5 Day Forecast</div>
					</div>
				</header>
				<div className='day-one-forecast'>
					<h4>Day 1</h4>
					<div>
						<img
							className='forecast-weather-icons'
							src={`https://www.weatherbit.io/static/img/icons/${dayOneIcon}.png`}
							alt='weather-icon'
						/>
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[1].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[1].min_temp : ''} °F
					</div>
					<div>
						<img src={precipitation} alt='precip-chance-icon' />
						{weatherForecast ? weatherForecast.data[1].pop : ''}%
					</div>
					<div className='forecast-sunrise-icon'>
						<img src={sunrise} alt='sunrise-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[1].sunrise_ts : ''
						)}
					</div>
					<div className='forecast-sunset-icon'>
						<img src={sunset} alt='sunset-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[1].sunset_ts : ''
						)}
					</div>
				</div>
				<div className='day-two-forecast'>
					<h4>Day 2</h4>
					<div>
						<img
							className='forecast-weather-icons'
							src={`https://www.weatherbit.io/static/img/icons/${dayTwoIcon}.png`}
							alt='weather-icon'
						/>
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[2].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[2].min_temp : ''} °F
					</div>
					<div>
						<img src={precipitation} alt='precip-chance-icon' />
						{weatherForecast ? weatherForecast.data[2].pop : ''}%
					</div>
					<div className='forecast-sunrise-icon'>
						<img src={sunrise} alt='sunrise-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[2].sunrise_ts : ''
						)}
					</div>
					<div className='forecast-sunset-icon'>
						<img src={sunset} alt='sunset-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[2].sunset_ts : ''
						)}
					</div>
				</div>
				<div className='day-three-forecast'>
					<h4>Day 3</h4>
					<div>
						<img
							className='forecast-weather-icons'
							src={`https://www.weatherbit.io/static/img/icons/${dayThreeIcon}.png`}
							alt='weather-icon'
						/>
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[3].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[3].min_temp : ''} °F
					</div>
					<div>
						<img src={precipitation} alt='precip-chance-icon' />
						{weatherForecast ? weatherForecast.data[3].pop : ''}%
					</div>
					<div className='forecast-sunrise-icon'>
						<img src={sunrise} alt='sunrise-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[3].sunrise_ts : ''
						)}
					</div>
					<div className='forecast-sunset-icon'>
						<img src={sunset} alt='sunset-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[3].sunset_ts : ''
						)}
					</div>
				</div>
				<div className='day-four-forecast'>
					<h4>Day 4</h4>
					<div>
						<img
							className='forecast-weather-icons'
							src={`https://www.weatherbit.io/static/img/icons/${dayFourIcon}.png`}
							alt='weather-icon'
						/>
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[4].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[4].min_temp : ''} °F
					</div>
					<div>
						<img src={precipitation} alt='precip-chance-icon' />
						{weatherForecast ? weatherForecast.data[4].pop : ''}%
					</div>
					<div className='forecast-sunrise-icon'>
						<img src={sunrise} alt='sunrise-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[4].sunrise_ts : ''
						)}
					</div>
					<div className='forecast-sunset-icon'>
						<img src={sunset} alt='sunset-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[4].sunset_ts : ''
						)}
					</div>
				</div>
				<div className='day-five-forecast'>
					<h4>Day 5</h4>
					<div>
						<img
							className='forecast-weather-icons'
							src={`https://www.weatherbit.io/static/img/icons/${dayFiveIcon}.png`}
							alt='weather-icon'
						/>
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[5].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[5].min_temp : ''} °F
					</div>
					<div>
						<img src={precipitation} alt='precip-chance-icon' />
						{weatherForecast ? weatherForecast.data[5].pop : ''}%
					</div>
					<div className='forecast-sunrise-icon'>
						<img src={sunrise} alt='sunrise-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[5].sunrise_ts : ''
						)}
					</div>
					<div className='forecast-sunset-icon'>
						<img src={sunset} alt='sunset-icon' />
						{convertTimestamp(
							weatherForecast ? weatherForecast.data[5].sunset_ts : ''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
