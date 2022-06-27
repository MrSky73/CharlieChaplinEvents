// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "Obi Wan Kenobi",
      location: "Tattoieen",
      desc: "Adipisicing minim non minim qui est aliquip ipsum occaecat est. Laboris consequat fugiat tempor est nostrud officia non officia labore enim laboris ea quis consequat. Ea do duis magna cillum veniam commodo. Qui laborum ea amet magna magna laboris nostrud est adipisicing sunt occaecat ea ad duis. Dolor consectetur aute do reprehenderit dolore dolor.",
    },
    {
      id: 2,
      author: "Anakin",
      location: "Naboo",
      desc: "Non anim minim pariatur incididunt et anim proident ipsum pariatur anim Lorem id irure. Ipsum culpa esse duis ad laboris veniam. Est mollit deserunt eu Lorem deserunt.",
    },
    {
      id: 3,
      author: "Yoda",
      location: "Dagoba",
      desc: "Est ut nostrud cupidatat est quis ullamco sit et ipsum est magna. Consectetur ut reprehenderit pariatur cupidatat consequat nisi incididunt commodo eu dolore nulla deserunt. Amet aute tempor exercitation culpa voluptate ut ad commodo incididunt exercitation anim minim. Reprehenderit nisi tempor commodo ex Lorem sit.",
    },
    {
      id: 4,
      author: "Darth Vader",
      location: "Mustafar",
      desc: "Cillum excepteur adipisicing laboris culpa velit qui non nulla. Proident dolor aute duis duis commodo. Nisi consequat qui deserunt cupidatat ut.",
    },
  ];

  return (
    <div style={{ paddingBlock: "3rem", background: "#e8e8e8" }}>
      <Container>
        <h6
          className="text-center "
          style={{ fontSize: "30px", color: "Darkgray" }}
        >
          We value your Opinion
        </h6>
        <h2 className="text-center mb-3" style={{ fontSize: "50px" }}>
          Our <strong>Testimonials</strong>
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          grabCursor={true}
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className="mySwiper testimonials-swiper"
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <Card>
                  <Card.Body>
                    <FaQuoteLeft color="darkgray" size={60} />
                    <Container>
                      <blockquote className="blockquote mb-0 ms-5">
                        <p className="mb-4">{testimonial.desc}</p>
                        <hr />
                        <footer className="blockquote-footer">
                          {testimonial.author} ,
                          <cite title="Source Title">
                            {testimonial.location}
                          </cite>
                        </footer>
                      </blockquote>
                    </Container>
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

export default Testimonials;
