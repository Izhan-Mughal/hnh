import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-dark navbar-dark py-lg-3 py-2"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav__links">
              <Nav.Link
                as={Link}
                className={props.active == 0 ? "nav__active" : ""}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={props.active == 1 ? "nav__active" : ""}
                to="/about"
              >
                About us
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={props.active == 2 ? "nav__active" : ""}
                to="/Services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={props.active == 3 ? "nav__active" : ""}
                to="/Work"
              >
                Work
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={props.active == 4 ? "nav__active" : ""}
                to="/Pages"
              >
                Pages
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={props.active == 5 ? "nav__active" : ""}
                to="/Contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
