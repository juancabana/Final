import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import SendEmail from "../../components/SendEmail/SendEmail";
import Footer from "../../components/Foooter/Footer";

const Home = () => {

  const [frase, setFrase] = useState([])


  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((response) => {
        setFrase(response.quote);
        // setIsLoading(false);
      });
  }, []);
  const obtenerDatos = async () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((response) => {
        setFrase(response.quote);
        // setIsLoading(false);
      });
  };

  return (
    <div className="Home">
      <div className="wrapper-logo">
        <div className="logo"></div>
      </div>
      <div className="wrapper-content-home">
        <div className="content-home">
          <h1 className="h1-home">
            {frase}              
          </h1>
          <div className="wrapper-p-home">

          <p className="p-content-home">
            This is you Kanye West quote for today, click below to get another
            one
          </p>
          </div>
          <button className="button-home"
          onClick={obtenerDatos}>
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
