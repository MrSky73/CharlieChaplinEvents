import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import img1 from "../images/bday/img10.jpg";
import img2 from "../images/wedding/img1.jpg";
import img3 from "../images/babyshower/img3.jpg";
import img4 from "../images/gettogetherservice.jpg";
import img5 from "../images/sangeet-sandhya-service.jpeg";
import img6 from "../images/coorporateservice.jpg";
import img7 from "../images/engagement-decor/img3.jpg";
import img8 from "../images/anchor/img5.jpg";

const ServicesCarousel = () => {
  const servicesData = [
    {
      key: 1,
      title: "Birthday Partys",
      desc: "Make your Birthday memorable.",
      src: img1,
    },
    {
      key: 2,
      title: "Weddings",
      desc: "Let us make your most important event, THE BEST event of your life.",
      src: img2,
    },
    {
      key: 3,
      title: "Baby Shower",
      desc: "Make your Birthday memorable.",
      src: img3,
    },
    {
      key: 4,
      title: "Get Togeter",
      desc: "Make your Birthday memorable.",
      src: img4,
    },
    {
      key: 5,
      title: "Sangeet Sandhya",
      desc: "Make your Birthday memorable.",
      src: img5,
    },
    {
      key: 6,
      title: "Corporate Events",
      desc: "Make your Birthday memorable.",
      src: img6,
    },
    {
      key: 7,
      title: "Anniversary Function",
      desc: "Make your Birthday memorable.",
      src: img7,
    },
    {
      key: 8,
      title: "Prof Anchor",
      desc: "We make it special",
      src: img8,
    },
  ];

  return (
    <div style={{ paddingBlock: "3rem", background: "#e8e8e8" }}>
      <Container>
        <h6
          className="text-center "
          style={{ fontSize: "30px", color: "Darkgray" }}
        >
          Our Services
        </h6>
        <h2 className="text-center mb-3" style={{ fontSize: "50px" }}>
          The Charlie Chaplin <strong>Expertices</strong>
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          breakpoints={
            // when window width is >= 320px
            {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              420: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }
          }
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {servicesData.map((data) => {
            return (
              <SwiperSlide key={data.key}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src={data.src}
                    style={{ height: "22rem" }}
                  />
                  <Card.Body style={{ paddingBottom: "0" }}>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.desc}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/services">
                      <Button variant="dark">Read More</Button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default ServicesCarousel;
