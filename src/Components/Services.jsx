import React from 'react';
import './Styles/Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faGlassMartini, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

function Services() {
	return (
		<div className="services">
			<div className="services-container">
				<h1 className="services-header">What we offer</h1>
				<hr />
				<div className="services-cards">
					<div className="card">
						<FontAwesomeIcon className="icon" icon={faMountain} /> <h3>Stunning views</h3>
					</div>
					<div className="card">
						<FontAwesomeIcon className="icon" icon={faConciergeBell} /> <h3>Fantastic service</h3>
					</div>
					<div className="card">
						<FontAwesomeIcon className="icon" icon={faGlassMartini} /> <h3>Drinks</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
