import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='title'>
				<Link className='nav-links' to='/weather-app/'>
					<div className='title-font'>Home</div>
				</Link>
			</div>
		</div>
	);
};

export default Nav;
