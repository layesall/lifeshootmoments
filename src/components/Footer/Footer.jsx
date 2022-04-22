import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGooglePlusSquare,
  FaYoutube,
} from "react-icons/fa";
import Config from "../../config/Config";
import Logo from "../../assets/logo/logo-light.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-component">
      <Container fluid className="footer-top">
        <Row className="footer-top">
          <Col md={6}>
            <div className="footer-about">
              <Image src={Logo} alt="logo Lifeshoot" className="footer-logo" />
              <p>
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
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-media">
              <Link to="" className="media-link">
                <FaInstagramSquare />
              </Link>
              <Link to="" className="media-link">
                <FaFacebookSquare />
              </Link>
              <Link to="" className="media-link">
                <FaGooglePlusSquare />
              </Link>
              <Link to="" className="media-link">
                <FaYoutube />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright">
        &copy; {Config.AppName} &middot; 2022 | by 
        <Link to="https://layesall.com/" className="footer-author" title="Layesall">
          Layesall
        </Link>
      </div>
    </footer>
  );
}
