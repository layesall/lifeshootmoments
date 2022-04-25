import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import AboutImage from '../../assets/about/aboutme.jpg';

import "./About.css";

export default function About() {
  return (
    <div id="about" className="about-component">
      <Container>
        <Row>
          <Col md={4}>
            <Image
              src={AboutImage}
              alt="about image"
              className="about-image"
            />
          </Col>
          <Col md={8}>
            <h1 className="about-title">Who is behind the lens</h1>
            <p className="about-text">
              I entered the photography world in 2016. But before that, I was a model for 2 years. I was used to be in front of the camera, but I wanted to know what it felt like to be behind the camera. That's when my passion for photography began.
            </p>
            <p className="about-text">
              I started by myself as a freelancer, but in 2018 I started having photography courses to understand more about my camera. With the knowledge I have learnt nd the experience I have acquired, I am sure that I will do my best to bring your wishes into reality.
            </p>
            <p className="about-text">
              My sincere satisfaction comes from seeing my client's individual style emerge, while I am helping them bring their own vision into life. I hope you will allow me to point the picture you have dreamt in your heart.
            </p>
            <h3 className="about-signature"> Lifeshoot Moments </h3>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
