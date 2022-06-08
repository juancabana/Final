import React from "react";
import { useState } from "react";
import "./SendEmail.css";


const SendEmail = () => {
    const [email, setEmail] = useState('')
  var jsonData = {
    email: {email},
  };

  function handleClick() {
    // Send data to the backend via POST
    fetch("https://webhook.site/446d761a-297d-4da0-83b5-ffa2e1b30243", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
    });
  }

  return (
    <div className="SendEmail">
      <div className="wrapper-sendEmailContent">
        <div className="content-description">
          <h1 className="h1-description text">Be the first to access it</h1>
          <h4 className="h4-description text">
            Subscribeto receive updates and join our beta list.
          </h4>
        </div>
        <div className="wrapper-form-sendEmail">
          <input
            placeholder="Enter your email"
            type="text"
            className="input-sendemail"
            onChange={event => setEmail(event.target.value)}
          />
          <button className="button-sendEmail" onClick={handleClick}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
