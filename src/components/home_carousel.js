import Button from "react-bootstrap/Button";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bdayCarousel from "../images/bdayCarousel.jpg";
import weddingCarousel from "../images/weddingCarousel.jpg";
import coorporateEvent from "../images/coorporateEvent.jpg";
import first from "../images/bday/img5.jpg";
import second from "../images/dj/img2.jpg";
import third from "../images/anchor/img2.JPG";

function HomeCarousel() {
  const CarouselData = [
    {
      key: "1",
      src: first,
      header: "First Slide Title",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      key: "2",
      src: second,
      header: "Second Slide Title",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      key: "3",
      src: third,
      header: "Third Slide Title",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <Carousel fade interval={4000}>
      {CarouselData.map((data) => {
        return (
          <Carousel.Item key={data.key}>
            <img
              className="d-block"
              src={data.src}
              alt="carousel image"
              style={{ width: "100%", height: "90vh" }}
            />
            <Carousel.Caption style={{ color: "white", fontSize: "20px" }}>
              <h3
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                {data.header}
              </h3>
              <p>{data.desc}</p>
              <Button variant="dark" className="m-1" href="/services">
                Know More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HomeCarousel;
