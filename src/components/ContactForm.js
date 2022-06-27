import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import contact from "../images/contact.jpg";
import Forms from "../components/Form";

const ContactForm = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h6
            className="text-center "
            style={{ fontSize: "15px", color: "Darkgray" }}
          >
            Send us a message for your personalized event booking.
          </h6>
          <h2 className="text-center mb-3" style={{ fontSize: "25px" }}>
            CC <strong>Contact Form</strong>
          </h2>
          <Forms />
        </Col>
        <Col className="d-none d-md-block">
          <img src={contact} style={{ width: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
