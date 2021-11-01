import React from 'react';

const MoonInfo = ({ weatherForecast }) => {
	let moonRise = weatherForecast ? weatherForecast.data[0].moonrise_ts : '';
	let moonSet = weatherForecast ? weatherForecast.data[0].moonset_ts : '';
	let phase = weatherForecast
		? weatherForecast.data[0].moon_phase_lunation
		: '';

	const moonPhase = () => {
		if (phase === 0) {
			return <span>New Moon</span>;
		}
		if (phase < 0.25 && phase > 0) {
			return <span>Waxing Crescent</span>;
		}
		if (phase === 0.25) {
			return <span>First Quarter</span>;
		}
		if (phase > 0.25 && phase < 0.5) {
			return <span>Waxing Gibbous</span>;
		}
		if (phase === 0.5) {
			return <span>Full Moon</span>;
		}
		if (phase > 0.5 && phase < 0.75) {
			return <span>Waning Gibbous</span>;
		}
		if (phase === 0.75) {
			return <span>Last Quarter</span>;
		}
		if (phase > 0.75 && phase < 1) {
			return <span>Waning Crescent</span>;
		}
	};

	moonPhase();

	/// Credit: Convert UNIX Timestamp from --> https://gist.github.com/kmaida/6045266
	const convertTimestamp = (timestamp) => {
		var d = new Date(timestamp * 1000),
			mm = ('0' + (d.getMonth() + 1)).slice(-2),
			dd = ('0' + d.getDate()).slice(-2),
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
		time = h + ':' + min + ' ' + ampm + ' - ' + mm + '/' + dd;
		return time;
	};

	return (
		<div>
			<h3>Moon Info</h3>
			<div className='moon-phase'>Moon Phase: {moonPhase(phase)}</div>
			<div>Moonrise: {convertTimestamp(moonRise)}</div>
			<div>Moonset: {convertTimestamp(moonSet)}</div>
		</div>
	);
};

export default MoonInfo;
