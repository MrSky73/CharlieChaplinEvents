import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CountUp from "react-countup";
import { SiBuymeacoffee } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { RiAwardFill } from "react-icons/ri";

const Numbers = () => {
  const numberData = [
    {
      key: 1,
      count: 320,
      title: "Featured Events",
      icon: <SiBuymeacoffee color="#00000" size={80} />,
    },
    {
      key: 2,
      count: 520,
      title: "Loyal Customers",
      icon: <BsPersonFill color="#00000" size={80} />,
    },
    {
      key: 3,
      count: 250,
      title: "Good Comments",
      icon: <BiCommentDetail color="#00000" size={80} />,
    },
    {
      key: 4,
      count: 69,
      title: "Trophies Won",
      icon: <RiAwardFill color="#00000" size={80} />,
    },
  ];

  return (
    <Container className="mt-5 mb-5">
      <Row className="numbers">
        {numberData.map((data) => {
          return (
            <Col key={data.key} className="number" sm={6} md={3}>
              <Row>
                <Col>
                  <h3>
                    <CountUp
                      start={0}
                      end={data.count}
                      duration={3}
                      enableScrollSpy
                    />
                  </h3>
                  <p>{data.title}</p>
                </Col>
                <Col>
                  <span>{data.icon}</span>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Numbers;
