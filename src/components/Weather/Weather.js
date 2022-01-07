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
import sunrise from '../../img/sunrise.png';
import sunset from '../../img/sunset.png';
import precipitation from '../../img/precipitation.png';
import thunderstorm from '../../img/amcharts_weather_icons_1.0.0 2/animated/thunderstorm.svg';
import drizzle from '../../img/amcharts_weather_icons_1.0.0 2/animated/drizzle.svg';
import rain from '../../img/amcharts_weather_icons_1.0.0 2/animated/mod-light-rain.svg';
import heavyRain from '../../img/amcharts_weather_icons_1.0.0 2/animated/heavy-rain.svg';
import freezingRain from '../../img/amcharts_weather_icons_1.0.0 2/animated/freezing-rain.svg';
import lightSnow from '../../img/amcharts_weather_icons_1.0.0 2/animated/light-snow.svg';
import snow from '../../img/amcharts_weather_icons_1.0.0 2/animated/snow.svg';
import cloudy from '../../img/amcharts_weather_icons_1.0.0 2/animated/cloudy.svg';
import clear from '../../img/amcharts_weather_icons_1.0.0 2/animated/clear.svg';
import fewClouds from '../../img/amcharts_weather_icons_1.0.0 2/animated/broken-clouds.svg';
import mostlyCloudy from '../../img/amcharts_weather_icons_1.0.0 2/animated/mostly-cloudy.svg';
import unknownPrecip from '../../img/amcharts_weather_icons_1.0.0 2/animated/weather.svg';

const Weather = ({
	addToFavorites,
	currentWeather,
	weatherForecast,
	convertTimestamp,
	convertTimestampMoon,
	handleSubmit,
	setWeatherSearch,
	weatherSearch,
	handleClick,
}) => {
	let sunRise = weatherForecast ? weatherForecast.data[0].sunrise_ts : '';
	let sunSet = weatherForecast ? weatherForecast.data[0].sunset_ts : '';
	let weatherCode = currentWeather ? currentWeather.weather.code : '';
	let dayOneIcon = weatherForecast ? weatherForecast.data[1].weather.code : '';
	let dayTwoIcon = weatherForecast ? weatherForecast.data[2].weather.code : '';
	let dayThreeIcon = weatherForecast
		? weatherForecast.data[3].weather.code
		: '';
	let dayFourIcon = weatherForecast ? weatherForecast.data[4].weather.code : '';
	let dayFiveIcon = weatherForecast ? weatherForecast.data[5].weather.code : '';
	let moonRise = weatherForecast ? weatherForecast.data[0].moonrise_ts : '';
	let moonSet = weatherForecast ? weatherForecast.data[0].moonset_ts : '';
	let phase = weatherForecast
		? weatherForecast.data[0].moon_phase_lunation
		: '';

	const moonPhase = () => {
		if (phase === 0) {
			return (
				<div className='moon-phase-info-container'>
					<img className='moon-img' src={newMoon} alt='New Moon' />
					<span className='moon-phase-title'>Phase: New Moon</span>
				</div>
			);
		}
		if (phase < 0.25 && phase > 0) {
			return (
				<div className='moon-phase-info-container'>
					<img
						className='moon-img'
						src={waxingCrescent}
						alt='Waxing Crescent'
					/>
					<span>Phase: Waxing Crescent</span>
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

	const currentWeatherIcon = () => {
		if (weatherCode >= 200 && weatherCode <= 233) {
			return <img src={thunderstorm} alt='thunderstorm-icon' />;
		}
		if (weatherCode >= 300 && weatherCode <= 302) {
			return <img src={drizzle} alt='drizzle-icon' />;
		}
		if (weatherCode >= 500 && weatherCode <= 501) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (weatherCode === 502) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (weatherCode === 511) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (weatherCode >= 520 && weatherCode <= 521) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (weatherCode === 522) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (weatherCode === 600) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (weatherCode >= 601 && weatherCode <= 602) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (weatherCode >= 610 && weatherCode <= 612) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (weatherCode >= 621 && weatherCode <= 622) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (weatherCode === 623) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (weatherCode >= 700 && weatherCode <= 751) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (weatherCode === 800) {
			return <img src={clear} alt='clear-icon' />;
		}
		if (weatherCode >= 801 && weatherCode <= 802) {
			return <img src={fewClouds} alt='few-clouds-icon' />;
		}
		if (weatherCode === 803) {
			return <img src={mostlyCloudy} alt='mostly-cloudy-icon' />;
		}
		if (weatherCode === 804) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (weatherCode === 900) {
			return <img src={unknownPrecip} alt='unknown-precip-icon' />;
		}
	};

	const dayOneWeatherIcon = () => {
		if (dayOneIcon >= 200 && dayOneIcon <= 233) {
			return <img src={thunderstorm} alt='thunderstorm-icon' />;
		}
		if (dayOneIcon >= 300 && dayOneIcon <= 302) {
			return <img src={drizzle} alt='drizzle-icon' />;
		}
		if (dayOneIcon >= 500 && dayOneIcon <= 501) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayOneIcon === 502) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayOneIcon === 511) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayOneIcon >= 520 && dayOneIcon <= 521) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayOneIcon === 522) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayOneIcon === 600) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayOneIcon >= 601 && dayOneIcon <= 602) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayOneIcon >= 610 && dayOneIcon <= 612) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayOneIcon >= 621 && dayOneIcon <= 622) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayOneIcon === 623) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayOneIcon >= 700 && dayOneIcon <= 751) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayOneIcon === 800) {
			return <img src={clear} alt='clear-icon' />;
		}
		if (dayOneIcon >= 801 && dayOneIcon <= 802) {
			return <img src={fewClouds} alt='few-clouds-icon' />;
		}
		if (dayOneIcon === 803) {
			return <img src={mostlyCloudy} alt='mostly-cloudy-icon' />;
		}
		if (dayOneIcon === 804) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayOneIcon === 900) {
			return <img src={unknownPrecip} alt='unknown-precip-icon' />;
		}
	};

	const dayTwoWeatherIcon = () => {
		if (dayTwoIcon >= 200 && dayTwoIcon <= 233) {
			return <img src={thunderstorm} alt='thunderstorm-icon' />;
		}
		if (dayTwoIcon >= 300 && dayTwoIcon <= 302) {
			return <img src={drizzle} alt='drizzle-icon' />;
		}
		if (dayTwoIcon >= 500 && dayTwoIcon <= 501) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayTwoIcon === 502) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayTwoIcon === 511) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayTwoIcon >= 520 && dayTwoIcon <= 521) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayTwoIcon === 522) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayTwoIcon === 600) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayTwoIcon >= 601 && dayTwoIcon <= 602) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayTwoIcon >= 610 && dayTwoIcon <= 612) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayTwoIcon >= 621 && dayTwoIcon <= 622) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayTwoIcon === 623) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayTwoIcon >= 700 && dayTwoIcon <= 751) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayTwoIcon === 800) {
			return <img src={clear} alt='clear-icon' />;
		}
		if (dayTwoIcon >= 801 && dayTwoIcon <= 802) {
			return <img src={fewClouds} alt='few-clouds-icon' />;
		}
		if (dayTwoIcon === 803) {
			return <img src={mostlyCloudy} alt='mostly-cloudy-icon' />;
		}
		if (dayTwoIcon === 804) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayTwoIcon === 900) {
			return <img src={unknownPrecip} alt='unknown-precip-icon' />;
		}
	};

	const dayThreeWeatherIcon = () => {
		if (dayThreeIcon >= 200 && dayThreeIcon <= 233) {
			return <img src={thunderstorm} alt='thunderstorm-icon' />;
		}
		if (dayThreeIcon >= 300 && dayThreeIcon <= 302) {
			return <img src={drizzle} alt='drizzle-icon' />;
		}
		if (dayThreeIcon >= 500 && dayThreeIcon <= 501) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayThreeIcon === 502) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayThreeIcon === 511) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayThreeIcon >= 520 && dayThreeIcon <= 521) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayThreeIcon === 522) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayThreeIcon === 600) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayThreeIcon >= 601 && dayThreeIcon <= 602) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayThreeIcon >= 610 && dayThreeIcon <= 612) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayThreeIcon >= 621 && dayThreeIcon <= 622) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayThreeIcon === 623) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayThreeIcon >= 700 && dayThreeIcon <= 751) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayThreeIcon === 800) {
			return <img src={clear} alt='clear-icon' />;
		}
		if (dayThreeIcon >= 801 && dayThreeIcon <= 802) {
			return <img src={fewClouds} alt='few-clouds-icon' />;
		}
		if (dayThreeIcon === 803) {
			return <img src={mostlyCloudy} alt='mostly-cloudy-icon' />;
		}
		if (dayThreeIcon === 804) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayThreeIcon === 900) {
			return <img src={unknownPrecip} alt='unknown-precip-icon' />;
		}
	};

	const dayFourWeatherIcon = () => {
		if (dayFourIcon >= 200 && dayFourIcon <= 233) {
			return <img src={thunderstorm} alt='thunderstorm-icon' />;
		}
		if (dayFourIcon >= 300 && dayFourIcon <= 302) {
			return <img src={drizzle} alt='drizzle-icon' />;
		}
		if (dayFourIcon >= 500 && dayFourIcon <= 501) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayFourIcon === 502) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayFourIcon === 511) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayFourIcon >= 520 && dayFourIcon <= 521) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayFourIcon === 522) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayFourIcon === 600) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayFourIcon >= 601 && dayFourIcon <= 602) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayFourIcon >= 610 && dayFourIcon <= 612) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayFourIcon >= 621 && dayFourIcon <= 622) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayFourIcon === 623) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayFourIcon >= 700 && dayFourIcon <= 751) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayFourIcon === 800) {
			return <img src={clear} alt='clear-icon' />;
		}
		if (dayFourIcon >= 801 && dayFourIcon <= 802) {
			return <img src={fewClouds} alt='few-clouds-icon' />;
		}
		if (dayFourIcon === 803) {
			return <img src={mostlyCloudy} alt='mostly-cloudy-icon' />;
		}
		if (dayFourIcon === 804) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayFourIcon === 900) {
			return <img src={unknownPrecip} alt='unknown-precip-icon' />;
		}
	};

	const dayFiveWeatherIcon = () => {
		if (dayFiveIcon >= 200 && dayFiveIcon <= 233) {
			return <img src={thunderstorm} alt='thunderstorm-icon' />;
		}
		if (dayFiveIcon >= 300 && dayFiveIcon <= 302) {
			return <img src={drizzle} alt='drizzle-icon' />;
		}
		if (dayFiveIcon >= 500 && dayFiveIcon <= 501) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayFiveIcon === 502) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayFiveIcon === 511) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayFiveIcon >= 520 && dayFiveIcon <= 521) {
			return <img src={rain} alt='rain-icon' />;
		}
		if (dayFiveIcon === 522) {
			return <img src={heavyRain} alt='rain-icon' />;
		}
		if (dayFiveIcon === 600) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayFiveIcon >= 601 && dayFiveIcon <= 602) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayFiveIcon >= 610 && dayFiveIcon <= 612) {
			return <img src={freezingRain} alt='mixed-precip-icon' />;
		}
		if (dayFiveIcon >= 621 && dayFiveIcon <= 622) {
			return <img src={snow} alt='snow-icon' />;
		}
		if (dayFiveIcon === 623) {
			return <img src={lightSnow} alt='snow-icon' />;
		}
		if (dayFiveIcon >= 700 && dayFiveIcon <= 751) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayFiveIcon === 800) {
			return <img src={clear} alt='clear-icon' />;
		}
		if (dayFiveIcon >= 801 && dayFiveIcon <= 802) {
			return <img src={fewClouds} alt='few-clouds-icon' />;
		}
		if (dayFiveIcon === 803) {
			return <img src={mostlyCloudy} alt='mostly-cloudy-icon' />;
		}
		if (dayFiveIcon === 804) {
			return <img src={cloudy} alt='cloudy-icon' />;
		}
		if (dayFiveIcon === 900) {
			return <img src={unknownPrecip} alt='unknown-precip-icon' />;
		}
	};

	return (
		<div className='weather-container'>
			<div className='current-weather-container'>
				<div className='search-container'>
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
				</div>
				<img
					className='location-icon'
					onClick={handleClick}
					src={locationIcon}
					alt='location'
				/>
				<div className='current-weather-info-container'>
					<div className='city-name'>
						{currentWeather.city_name}, {currentWeather.state_code}
					</div>
					<div className='current-temp'>{currentWeather.temp}°F</div>
					<div className='current-weather-icon'>
						{currentWeatherIcon(weatherCode)}
					</div>
					<div className='first-current-weather-section'>
						<div>
							{currentWeather ? currentWeather.weather.description : ''}
						</div>
						<div>
							H: {weatherForecast ? weatherForecast.data[0].high_temp : ''}°F
						</div>
						<div>
							L: {weatherForecast ? weatherForecast.data[0].low_temp : ''}°F
						</div>
					</div>
				</div>
				<div className='second-current-weather-section'>
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
				<div className='day-one-forecast'>
					<h4>Day 1</h4>
					<div className='forecast-weather-icons'>
						{dayOneWeatherIcon(dayOneIcon)}
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[1].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[1].min_temp : ''} °F
					</div>
					<div>
						P:
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
					<div className='forecast-weather-icons'>
						{dayTwoWeatherIcon(dayTwoIcon)}
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[2].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[2].min_temp : ''} °F
					</div>
					<div>
						P:
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
					<div className='forecast-weather-icons'>
						{dayThreeWeatherIcon(dayThreeIcon)}
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[3].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[3].min_temp : ''} °F
					</div>
					<div>
						P:
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
					<div className='forecast-weather-icons'>
						{dayFourWeatherIcon(dayFourIcon)}
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[4].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[4].min_temp : ''} °F
					</div>
					<div>
						P:
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
					<div className='forecast-weather-icons'>
						{dayFiveWeatherIcon(dayFiveIcon)}
					</div>
					<div>
						H: {weatherForecast ? weatherForecast.data[5].max_temp : ''} °F
					</div>
					<div>
						L: {weatherForecast ? weatherForecast.data[5].min_temp : ''} °F
					</div>
					<div>
						{/* <img src={precipitation} alt='precip-chance-icon' /> */}
						P:
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
