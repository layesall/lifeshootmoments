import React, {useState, useEffect} from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import Config from "../../config/Config";
import Logo from '../../assets/logo/logo-light.png';
import "./Header.css";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      document.documentElement.scrollTop >= 121
      ? setScrolled(true)
      : setScrolled(false);
    }
  });

  return (
    <header className={ scrolled === false ? "header-component" : "header-component onScroll"}>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand
          href="/"
          title="Nikouone, starter-kit"
          className="nav-brand"
        >
          <Image src={Logo} alt="Logo Lifeshoot" className="logo" />
          {Config.AppName}

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nikounav" className="nav-toggle" />
        <Navbar.Collapse id="nikounav" className="nav-collapse">
          <Nav className="me-auto nav-link-group">
            <Nav.Link href="/" className="nav-link-item">
              Welcome
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-item">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link-item">
              Services
            </Nav.Link>
            <Nav.Link href="#gallery" className="nav-link-item">
              Gallry
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
