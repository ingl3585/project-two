import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
	let favoritesArray = { favorites };
	let newFavoritesArray = favoritesArray.favorites.map((city) => (
		<li key={city}>{city}</li>
	));

	// Next step: Link to homepage with the city as the setCurrentWeather and setWeatherForecast.
	// Deleting setCurrentWeather prop and onClick={setCurrentWeather} function from the Link tag.

	return (
		<div className='favorites-container'>
			<div className='favorites-title'>Favorites</div>
			<Link to='/' className='favorites-list'>
				<ul className='favorites-list'>{newFavoritesArray}</ul>
			</Link>
		</div>
	);
};

export default Favorites;
