import HomeAbout from "../components/Home_About";
import HomeCarousel from "../components/home_carousel";
import Numbers from "../components/Numbers";
import ServicesCarousel from "../components/Services_carousel";
import Testimonials from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import img1 from "../images/bdayparty.jpg";
import img2 from "../images/wedservice.jpg";
import img3 from "../images/babyshowerservice.jpg";
import img4 from "../images/gettogetherservice.jpg";
import img5 from "../images/sangeet-sandhya-service.jpeg";
import img6 from "../images/coorporateservice.jpg";
import img7 from "../images/aniversary-service.jpg";
import img8 from "../images/bdayCarousel.jpg";
import img9 from "../images/weddingCarousel.jpg";
import img10 from "../images/coorporateEvent.jpg";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
  const pics = [
    {
      id: 1,
      src: img1,
    },
    {
      id: 2,
      src: img2,
    },
    {
      id: 3,
      src: img3,
    },
    {
      id: 4,
      src: img4,
    },
    {
      id: 10,
      src: img10,
    },
    {
      id: 5,
      src: img5,
    },
    {
      id: 6,
      src: img6,
    },

    {
      id: 7,
      src: img7,
    },
    {
      id: 8,
      src: img8,
    },
  ];
  return (
    <div className="outer">
      <HomeCarousel />
      <HomeAbout />
      <Numbers />
      <ServicesCarousel />
      <HomeGallery pics={pics} />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
