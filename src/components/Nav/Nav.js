import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<div>
				<Link to='/'>
					<h3>Logo</h3>
				</Link>
			</div>
			<div>
				<h3>Total Weather</h3>
			</div>
			<div>
				<Link to='/favorites'>
					<h3>Favorites</h3>
				</Link>
			</div>
		</div>
	);
};

export default Nav;
