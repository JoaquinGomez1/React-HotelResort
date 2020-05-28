import React, { Component } from 'react';
import Landing from './Components/Landing';
import Services from './Components/Services';
import FeaturedRooms from './Components/FeaturedRooms';
import roomsList from './rooms.json';

class App extends Component {
	constructor() {
		super();
		this.state = {
			rooms: roomsList,
			featuredRooms: roomsList.slice(0, 3)
		};
	}

	render() {
		return (
			<React.Fragment>
				<Landing />
				<Services />
				<FeaturedRooms rooms={this.state.rooms} featuredRooms={this.state.featuredRooms} />
			</React.Fragment>
		);
	}
}

export default App;
