import React, { useState } from "react";
import "./Styles/Form.scss";
import MainButton from "./MainButton";

export default function Form() {
  const [userSure, setUserSure] = useState(false);

  const askYouSure = () => {};

  return (
    <div className="dummyFormContainer">
      {/*--------- Name ---------*/}
      <div className="name">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Please enter your full name"
        />
      </div>
      {/*--------- Address ---------*/}
      <div className="address">
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          placeholder="Please enter your address"
        />
      </div>
      {/*--------- Payment ---------*/}
      <div className="payment">
        <label htmlFor="name">Payment: </label>
        <input
          type="text"
          name="payment"
          placeholder="Please enter your payment information"
        />
        <input
          id="secCode"
          type="text"
          name="payment"
          placeholder="Security Code"
        />
        <select name="creditCardOptions">
          <option value="-"> - </option>
          <option value="mastercard">Mastercard</option>
          <option value="visa">Visa</option>
        </select>
      </div>

      <MainButton onClick={askYouSure} content="PAY!"></MainButton>
    </div>
  );
}
