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
          <Col md={12}>
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
      <Container className="footer-copyright">
        &copy; {Config.AppName} &middot; 2022 | by 
        <Link to="https://layesall.com/" className="footer-author" title="Layesall">
          Layesall
        </Link>
      </Container>
    </footer>
  );
}
