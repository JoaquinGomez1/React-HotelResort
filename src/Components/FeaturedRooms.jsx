import React from 'react';
import RoomCard from './RoomCard';
import './Styles/FeaturedRooms.scss';
import { Link } from 'react-router-dom';

function FeaturedRooms({ featuredRooms }) {
	return (
		<div className="featured">
			<h2>Featured Rooms</h2>
			<div className="underline" />
			<div className="featured-container">
				{featuredRooms.map(room => (
					<Link to={{ pathname: 'rooms/' + room.name, state: { room: room } }}>
						{' '}
						<RoomCard key={room.name} room={room} />{' '}
					</Link>
				))}
			</div>
		</div>
	);
}

export default FeaturedRooms;
