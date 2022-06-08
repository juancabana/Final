import React from "react";
import './SendEmail.css';

const SendEmail = () =>{
    return(
        <div className="SendEmail">
            <div className="wrapper-sendEmailContent">
                
            <div className="content-description">
                <h1 className="h1-description text">Be the first to access it</h1>
                <h4 className="h4-description text">Subscribeto receive updates and join our beta list.</h4>
            </div>
            <div className="wrapper-form-sendEmail">
                <input placeholder="Enter your email" type="text" className="input-sendemail" />
                <button className="button-sendEmail">
              SUBSCRIBE
          </button>

            </div>
            </div>
        </div>
    );

}

export default SendEmail;