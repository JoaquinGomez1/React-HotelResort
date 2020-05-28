import React, { useState } from 'react';
import './Styles/RoomCard.scss';

function RoomCard({ room }) {
	const price = room.price;
	const img = room.img;
	const name = room.name;

	useState(() => console.log(img), []);

	const imageBackground = {
		backgroundImage: `url(${img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	};

	return (
		<div className="roomCard">
			<div className="roomCard-price">${price}</div>
			<div style={imageBackground} className="roomCard-image" />
			<div className="roomCard-name">{name}</div>
			<button className="roomCard-btn">View Room</button>
		</div>
	);
}

export default RoomCard;
