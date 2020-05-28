import React, { useState } from 'react';
import './Styles/SearchRooms.scss';
import rooms from '../rooms.json';
import RoomCard from './RoomCard';
import { Link } from 'react-router-dom';

function SearchRooms() {
	const backgroundImage = {
		backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/06.jpg'})`
	};

	// Rooms imported from json file
	const [ results, setResults ] = useState(rooms);

	const handleSearch = () => {
		const name = document.querySelector('.input-name').value.toLowerCase();
		const pets = document.querySelector('.pets').checked;
		const breakfast = document.querySelector('.breakfast').checked;

		const startPrice = document.querySelector('.startPrice').value;
		const endPrice = document.querySelector('.endPrice').value;

		let possibleResults = [];

		if (name === '' && !pets && !breakfast && startPrice === '' && endPrice === '') {
			setResults(rooms);
			return null; // if there is no input then do nothing
		} else {
			rooms.map(room => {
				// name not defined or name matches                 //  price is within the given range or is not defined                                   // only one is specified or none of them are
				if (
					(name === room.name.toLowerCase() || name === '') &&
					(startPrice <= room.price &&
						(endPrice >= room.price || endPrice === '') &&
						((breakfast && room.breakfast) || (pets && room.pets) || (!breakfast && !pets)))
				) {
					possibleResults.push(room);
				}
			});
		}

		setResults(possibleResults);
	};

	return (
		<div className="searchRooms">
			<div style={backgroundImage} className="searchRooms-landing">
				<h1>Our Rooms</h1>
			</div>

			<div className="searchRooms-search">
				<div className="searchElements">
					<input placeholder="Search by name" className="input-name" type="text" />

					<div className="petsContainer">
						<label htmlFor="pets">Pets? </label>
						<input name="pets" onChange={handleSearch} className="pets" type="checkbox" />
					</div>

					<div className="breakfastContainer">
						<label htmlFor="breakfast">Breakfast? </label>
						<input name="breakfast" onChange={handleSearch} className="breakfast" type="checkbox" />
					</div>

					<div className="price-range">
						<input className="startPrice" onChange={handleSearch} type="text" placeholder="From $" />
						<input className="endPrice" onChange={handleSearch} type="text" placeholder="To $" />
					</div>

					<button onClick={handleSearch} className="search">
						Search Rooms
					</button>
				</div>
			</div>

			<div className="searchRooms-results">
				{results.map(room => (
					<Link to={{ pathname: room.name, state: { room: room } }}>
						{' '}
						<RoomCard key={room.name} room={room} />{' '}
					</Link>
				))}
			</div>
		</div>
	);
}

export default SearchRooms;
