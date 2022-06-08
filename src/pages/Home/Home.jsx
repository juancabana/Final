import React from "react";
import "./Home.css";
import SendEmail from "../../components/SendEmail/SendEmail";
import Footer from "../../components/Foooter/Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="wrapper-logo">
        <div className="logo"></div>
      </div>
      <div className="wrapper-content-home">
        <div className="content-home">
          <h1 className="h1-home">"Life is the ultimate gitf"</h1>
          <div className="wrapper-p-home">

          <p className="p-content-home">
            This is you Kanye West quote for today, click below to get another
            one
          </p>
          </div>
          <button className="button-home">
              GET NEW ONE
          </button>
        </div>
        <div className="image-home"></div>
      </div>
      <SendEmail/>
      <Footer/>
    </div>
  );
};

export default Home;
