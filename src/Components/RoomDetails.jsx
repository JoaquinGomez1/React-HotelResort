import React, { Component } from "react";
import "./Styles/RoomDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import MainButton from "./MainButton";
import Form from "./Form";

class RoomDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.state);
    this.state = {
      room: this.props.location.state.room,
    };
  }

  // Scroll to top on Component render
  componentWillMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  closeModal = (event) => {
    if (
      event.target == document.querySelector(".modal") ||
      event.target == document.querySelector(".icon")
    ) {
      document.querySelector(".modal").style.display = "none";
    }
  };

  showModal = () => {
    document.querySelector(".modal").style.display = "flex";
  };

  render() {
    const { room } = this.state;
    const backgroundImg = {
      backgroundImage: `url(${room.img})`,
    };

    return (
      <div className="roomDetails">
        <div className="modal" onClick={this.closeModal}>
          <div className="modal-container">
            <div className="iconContainer">
              <FontAwesomeIcon
                onClick={this.closeModal}
                className="icon"
                icon={faWindowClose}
              />
            </div>
            <div className="modal-content">
              <Form></Form>
              {/* <h3>
                I'm sorry. This is only a simple and (very) modest showcase web
                application for a React software developer position with no real
                logistic (nor database for that matter) behind it. If you would
                like to contact me you can do it by visiting my{" "}
                <a href="https://github.com/JoaquinGomez1" target="_blank">
                  {" "}
                  github profile{" "}
                </a> 
              </h3>*/}
            </div>
          </div>
        </div>

        <div style={backgroundImg} className="room-image-background">
          <div className="landing-filter" />
          <div className="roomDetails-main">
            <h1>{room.name}</h1>
            <hr />
            <MainButton
              content={"Book Now"}
              onClick={this.showModal}
            ></MainButton>
          </div>
        </div>
        <div className="roomDetails-outerContainer">
          <div className="roomDetails-container">
            <div className="roomDetails-details">
              <h2>Details:</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit .
                Quisquam fugit quaerat animi neque aspernatur molestiae corrupti
                adipisci culpa impedit aliquam, mollitia, similique error nisi
                veritatis, quo voluptate maiores repellendus odit. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Nulla animi, soluta
                neque cumque dignissimos ab ea amet reprehenderit voluptatum
                repellendus? Dolores perferendis adipisci commodi, modi debitis
                soluta alias hic dignissimos.{" "}
              </p>
            </div>

            <div className="roomDetails-info">
              <h2>Additional information:</h2>
              <ul>
                <li>- Price: ${room.price}</li>
                <li>- Size: {room.size} sqmts</li>
                <li>
                  - Max Capacity: {room.guest}{" "}
                  {room.guest === 1 ? "person" : "people"}
                </li>
                <li>- Pets: {room.pets ? "Allowed" : "NOT Allowed"}</li>
                {room.breakfast ? <li>Free Breakfast</li> : null}
              </ul>
            </div>

            <div className="roomDetails-extras">
              <h2>Extras:</h2>
              <ul>
                <li>- Minifridge</li>
                <li>- Comfortable beds</li>
                <li>- On Room Safebox</li>
                {room.internet ? <li>- Internet</li> : null}
                <li>- Full Size Bathroom</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RoomDetails;
