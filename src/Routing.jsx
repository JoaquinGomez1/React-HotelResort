import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import React from "react";
import Navbar from "./Components/Navbar";
import RoomDetails from "./Components/RoomDetails";
import SearchRooms from "./Components/SearchRooms";

function Routing() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/rooms/" exact component={SearchRooms} />
          <Route path="/rooms/:id" component={RoomDetails} />
          <Route path="*" component={App} status={404}></Route> // Default 404
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default Routing;
