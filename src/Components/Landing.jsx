import React from 'react';
import './Styles/Landing.scss';
import { Link } from 'react-router-dom';

function Landing() {
	return (
		<div className="landing">
			<div className="landing-filter" />
			<div className="landing-container">
				<h1>The Best Hotel Rooms</h1>
				<hr />
				<h2>Find the best room for you at the lowest price</h2>
				<Link to="/rooms/">
					{' '}
					<button className="landing-button">FIND ROOMS</button>{' '}
				</Link>
			</div>
		</div>
	);
}

export default Landing;
