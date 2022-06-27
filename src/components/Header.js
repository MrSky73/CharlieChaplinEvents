import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

const Header = () => {
  let expand = "md";

  return (
    <>
      <Navbar
        fixed="top"
        key={expand}
        bg="dark"
        variant="dark"
        expand={expand}
        className="mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            The Charlie Chaplin Events
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Charlie Chaplin Events
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/gallery"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Gallery
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/contact"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
