import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { FaRegHandshake, FaGlassCheers } from "react-icons/fa";
import { GiBalloons, GiPartyHat } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";

const HomeAbout = () => {
  const homeAboutData = [
    {
      key: 1,
      icon: <FaRegHandshake size={100} />,
      title: "Friendly Team",
      desc: "More than 20 friendly people",
    },
    {
      key: 2,
      icon: <GiBalloons size={100} />,
      title: "Perfect Venues",
      desc: "We choose the perfect spot",
    },
    {
      key: 3,
      icon: <FaGlassCheers size={100} />,
      title: "Unique Scenarios",
      desc: "We think out of the box",
    },
    {
      key: 4,
      icon: <GiPartyHat size={100} />,
      title: "Unforgetable time",
      desc: "We make your event Perfect",
    },
    {
      key: 5,
      icon: <HiLightBulb size={100} />,
      title: "Brilliant ideas",
      desc: "Make your event stand out.",
    },
    {
      key: 6,
      icon: <RiCustomerService2Line size={100} />,
      title: "Reilable support",
      desc: "Anytime Anywhere",
    },
  ];

  return (
    <div style={{ paddingBlock: "3rem", background: "#e8e8e8" }}>
      <Container>
        <Row>
          <Col lg={5} md={12} className="pe-5">
            <Container>
              <h3>
                We are <br />
                <span>The Charlie Chaplin Events </span>
              </h3>
              <h1>
                <b>No.1</b> Events <br />
                Management
              </h1>
              <p>
                Commodo eiusmod excepteur consectetur incididunt laboris
                exercitation. Veniam incididunt ad ea laborum ex anim ad quis
                aliqua aliquip. Ut non incididunt incididunt commodo sint non
                cupidatat dolore enim eu. Laborum occaecat sunt nisi sunt quis
                consequat exercitation pariatur deserunt anim Lorem adipisicing
                ea dolor.
              </p>
              <Button variant="dark" href="/services">
                Hire Us!
              </Button>
            </Container>
          </Col>
          <Col lg={7} md={12}>
            <Row>
              {homeAboutData.map((data) => {
                return (
                  <Col key={data.key} lg={4} md={6} style={{ padding: "0" }}>
                    <div className="about-features">
                      <span>{data.icon}</span>
                      <h6>{data.title}</h6>
                      <p>{data.desc}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeAbout;
