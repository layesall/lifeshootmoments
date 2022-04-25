import React from "react";
import "./Welcome.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Config from "../../config/Config";
import About from "../About/About";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

export default function Welcome() {
  return (
    <>
      <Header />
      <div className="welcome-component">
        <div className="welcome-box">
          <h2>Welcome in</h2>
          <h1> {Config.AppName} </h1>
          <p>Let me light up your world with my natural flashlight.</p>
        </div>
      </div>
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
