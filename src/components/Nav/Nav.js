import './Nav.css';
import fullFav from '../../img/full-fav.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='logo'>
				<Link className='nav-links' to='/'>
					<div>Logo</div>
				</Link>
			</div>
			<div className='title'>
				<div>Weather App</div>
			</div>
			<div className='favorites-icon'>
				<Link className='nav-links' to='/favorites'>
					<div>
						<img className='full-fav-icon' src={fullFav} alt='fav-icon' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Nav;
