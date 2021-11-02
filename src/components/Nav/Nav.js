import React from 'react';
import './Nav.css';
import { Link, Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';

const Nav = ({ handleSubmit, setWeatherSearch, handleClick }) => {
	return (
		<>
			<div className='nav'>
				<div>
					<Link to='/'>
						<h1>Logo</h1>
					</Link>
				</div>
				<div>
					<h3>Total Weather</h3>
				</div>
				<div>
					<Link to='/favorites'>Favorites</Link>
					<Route path='/favorites' component={Favorites} />
				</div>
			</div>
		</>
	);
};

export default Nav;
