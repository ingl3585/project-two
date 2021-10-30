import React, { useState, useEffect } from 'react';

const MoonInfo = () => {
	const [moon, setMoon] = useState('');
	useEffect(() => {
		let city = 'Denver';
		let state = 'CO';
		let cityState = city + ',' + state;
		let key = 'f14fde324cf84653bcad1ab6ca1816e8';
		let units = 'I';
		let days = '1';
		const moonDataUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&key=${key}&city=${cityState}&days=${days}&units=${units}`;
		const makeApiCall = (moonDataUrl) => {
			return fetch(moonDataUrl)
				.then((response) => response.json())
				.then((data) => setMoon(data.data[0]));
		};
		makeApiCall(moonDataUrl);
	}, []);

	let phase = moon.moon_phase_lunation;
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
		} else if (hh == 0) {
			h = 12;
		}
		time = h + ':' + min + ' ' + ampm + ' - ' + mm + '/' + dd;
		return time;
	};

	return (
		<div>
			<h3>Moon Info</h3>
			<div className='moon-phase'>Moon Phase: {moonPhase(moon)}</div>
			<div>Moonrise: {convertTimestamp(moon.moonrise_ts)}</div>
			<div>Moonset: {convertTimestamp(moon.moonset_ts)}</div>
		</div>
	);
};

export default MoonInfo;
