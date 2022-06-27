import Hero from "../components/Hero";
import bg from "../images/service-hero.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Forms from "../components/Form";
import contact from "../images/contact.jpg";
import Card from "react-bootstrap/Card";
import { RiUserLocationFill, RiMailFill, RiPhoneFill } from "react-icons/ri";

const Contact = () => {
  const details = [
    {
      title: "Address",
      desc: "Near mini nagar, Ambica Society,Rawalpada, Dahisar East, Mumbai 400068",
      logo: <RiUserLocationFill />,
    },
    {
      title: "Phone",
      desc: "099307 68427",
      logo: <RiPhoneFill />,
    },
    { title: "Email", desc: "example@email.com", logo: <RiMailFill /> },
  ];
  const variant = "dark";
  return (
    <div className="outer">
      <Hero bg={bg} title="with" tagline="Get in Touch" />
      <Container className="mt-5 text-center">
        <h4>
          Contact us if you need our services. We will be happy to make your
          events memorable!
        </h4>
        <Row className="pt-5 pb-5 mt-5 mb-5">
          {details.map((detail) => {
            return (
              <Col>
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    {detail.title} {detail.logo}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{detail.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60268.01600627766!2d72.83221243356654!3d19.249680686417037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7b0e93b519509%3A0x22efc93b469eeb6a!2sMini%20Nagar%2C%20Shyam%20Narayan%20Dubey%20Road%2C%20Rawalpada%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068!3m2!1d19.249603!2d72.867318!5e0!3m2!1sen!2sin!4v1656346588201!5m2!1sen!2sin"
              width="600"
              height="550"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
