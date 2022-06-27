import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { RiInstagramFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiUserLocationFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "7rem",
          paddingBlock: "0.5rem",
          background: "#e8e8e8",
          textAlign: "center",
          color: "grey",
        }}
      >
        <Container>
          <Row>
            <Col>
              <a href="" style={{ color: "inherit", textDecoration: "none" }}>
                <RiInstagramFill size={30} /> <br /> InstaGram
              </a>
            </Col>
            <Col>
              <a href="" style={{ color: "inherit", textDecoration: "none" }}>
                <RiFacebookBoxFill size={30} />
                <br /> Facebook
              </a>
            </Col>
            <Col>
              <a href="" style={{ color: "inherit", textDecoration: "none" }}>
                <RiTwitterFill size={30} />
                <br /> Twitter
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "black", paddingBlock: "2rem" }}>
        <Container style={{ color: "Darkgray" }}>
          <Row>
            <h2
              className="text-center mb-3"
              style={{ fontSize: "50px", color: "White" }}
            >
              <img
                alt=""
                src={logo}
                width="80"
                height="80"
                className="pe-1 d-inline-block align-top"
              />
              The Charlie Chaplin <strong>Events</strong>
            </h2>
            <Col style={{ borderRight: "1px solid white" }}>
              <h4 className="mb-2">
                <RiUserLocationFill /> Address
              </h4>
              <p
                className="blockquote-footer mt-2"
                style={{ fontSize: "20px" }}
              >
                near mini nagar, Ambica Society,
                <br /> Rawalpada, Dahisar East, Mumbai 400068
              </p>
              <h4 className="mb-2">
                <RiPhoneFill /> Phone
              </h4>
              <p
                className="blockquote-footer mt-2"
                style={{ fontSize: "20px" }}
              >
                099307 68427
              </p>
              <h4 className="mb-2">
                <RiMailFill /> Email
              </h4>
              <p
                className="blockquote-footer mt-2"
                style={{ fontSize: "20px" }}
              >
                example@email.com
              </p>
            </Col>
            <Col className="text-center">
              <h4>Useful Links</h4>
              <ul style={{ listStyle: "none", fontSize: "20px" }}>
                <li>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          paddingBlock: "1rem",
          background: "#e8e8e8",
          textAlign: "center",
        }}
      >
        ©2022 <strong>The Charlie Chaplin Events</strong> | All right reserved |
        made ❤️ with by{" "}
        <strong>
          <a
            href="https://github.com/MrSky73"
            target="_blank"
            style={{ textDecoration: "none", color: "red" }}
          >
            MrSky73
          </a>
        </strong>
      </div>
    </>
  );
};

export default Footer;
