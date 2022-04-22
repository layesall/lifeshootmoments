import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import AboutImage from '../../assets/bg/bg-one.jpg'

import "./About.css";

export default function About() {
  return (
    <div id="about" className="about-component">
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="about-title">About</h1>
            <p className="about-text">
              Gingerbread chocolate bar candy gummi bears pastry jelly powder.
              Bear claw ice cream powder chupa chups halvah muffin jelly-o
              macaroon. Lemon drops sesame snaps lollipop macaroon muffin chupa
              chups chocolate cake ice cream halvah. Dessert dessert soufflé
              soufflé jelly pudding sesame snaps. Gummi bears chocolate bar
              pastry dessert bonbon lemon drops. Candy canes macaroon chocolate
              cake apple pie halvah marzipan jelly-o icing.
            </p>
            <p className="about-text">
              Pastry cheesecake marzipan ice cream dessert carrot cake toffee
              jelly-o. Caramels macaroon caramels topping sweet roll cupcake
              bear claw marshmallow. Tootsie roll sugar plum chocolate muffin
              cake biscuit. Gummies liquorice marshmallow cheesecake powder
              bonbon marzipan candy canes apple pie. Bonbon sugar plum candy
              canes pastry bonbon carrot cake. Chocolate cake bear claw marzipan
              jelly-o chocolate gingerbread dragée biscuit candy. Powder bear
              claw jelly beans sesame snaps shortbread muffin. Pie jelly beans
              chocolate bear claw pudding sesame snaps marshmallow.
            </p>
          </Col>
          <Col md={4}>
            <Image
              src={AboutImage}
              alt="about image"
              className="about-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
