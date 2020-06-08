import React from "react";

export default function Form() {
  return (
    <div>
      <div className="name">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Please enter your full name"
        />
      </div>
      <div className="address">
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          placeholder="Please enter your address"
        />
      </div>
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
          <option value="mastercard">Mastercard</option>
          <option value="visa">Visa</option>
        </select>
      </div>
    </div>
  );
}
