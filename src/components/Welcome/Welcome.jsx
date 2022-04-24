import React from "react";
import "./Welcome.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Config from "../../config/Config";
import About from "../About/About";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";

export default function Welcome() {
  return (
    <>
      <Header />
      <div className="welcome-component">
        <div className="welcome-box">
          <h2>Welcome in</h2>
          <h1> {Config.AppName} </h1>
          <h2>Let me light up your world with my natural flashlight.</h2>
          <h2>I want people see the world through my lens.</h2>
        </div>
      </div>
      <About />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
}
