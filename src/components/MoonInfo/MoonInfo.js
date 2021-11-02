import React from 'react';
import './MoonInfo.css';
import newMoon from '../../img/new-moon.png';
import waxingCrescent from '../../img/waxing-crescent.png';
import firstQuarter from '../../img/first-quarter.png';
import waxingGibbous from '../../img/waxing-gibbous.png';
import fullMoon from '../../img/full-moon.png';
import waningGibbous from '../../img/waning-gibbous.png';
import lastQuarter from '../../img/last-quarter.png';
import waningCrescent from '../../img/waning-crescent.png';

const MoonInfo = ({ weatherForecast, convertTimestamp }) => {
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
	);
};

export default MoonInfo;
