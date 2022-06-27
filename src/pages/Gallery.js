import Hero from "../components/Hero";
import bg from "../images/service-hero.jpg";
import { Tab } from "bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import PhotoGallery from "../components/Gallery";
import {
  anchor1,
  anchor2,
  anchor3,
  anchor4,
  anchor5,
  babyshower1,
  babyshower2,
  babyshower3,
  babyshower4,
  bday10,
  bday11,
  bday12,
  bday2,
  bday3,
  bday4,
  bday5,
  bday6,
  bday7,
  bday8,
  bday9,
  dj1,
  dj2,
  engagement1,
  engagement2,
  engagement3,
  flower1,
  flower10,
  flower2,
  flower3,
  flower4,
  flower5,
  flower6,
  flower7,
  flower8,
  flower9,
  haldi1,
  haldi2,
  haldi3,
  haldi4,
  haldi5,
  haldi6,
  haldi7,
  haldi8,
  wedding1,
  wedding2,
  wedding3,
  logo,
} from "../images";

const Gallery = () => {
  const allImages = [
    {
      title: "Birthdays",
      images: [
        { src: bday2 },
        { src: bday11 },
        { src: bday3 },
        { src: bday4 },
        { src: bday12 },
        { src: bday5 },
        { src: bday6 },
        { src: bday7 },
        { src: bday8 },
        { src: bday9 },
        { src: bday10 },
      ],
    },
    {
      title: "Wedding",
      images: [{ src: wedding1 }, { src: wedding2 }, { src: wedding3 }],
    },
    {
      title: "Anchor",
      images: [
        { src: anchor5 },
        { src: anchor1 },
        { src: anchor2 },
        { src: anchor3 },
      ],
    },
    {
      title: "Baby-Shower",
      images: [
        { src: babyshower1 },
        { src: babyshower2 },
        { src: babyshower3 },
        { src: babyshower4 },
      ],
    },
    {
      title: "DJs",
      images: [{ src: dj1 }, { src: dj2 }],
    },
    {
      title: "Engagement",
      images: [
        { src: engagement1 },
        { src: engagement2 },
        { src: engagement3 },
      ],
    },
    {
      title: "Flower Decor",
      images: [
        { src: flower1 },
        { src: flower2 },
        { src: flower3 },
        { src: flower4 },
        { src: flower5 },
        { src: flower6 },
        { src: flower7 },
        { src: flower8 },
        { src: flower9 },
        { src: flower10 },
      ],
    },
    {
      title: "Haldi",
      images: [
        { src: haldi1 },
        { src: haldi2 },
        { src: haldi3 },
        { src: haldi4 },
        { src: haldi5 },
        { src: haldi6 },
        { src: haldi7 },
        { src: haldi8 },
      ],
    },
  ];

  return (
    <div className="outer">
      <Hero bg={bg} tagline={"Events Gallery"} title="Gallery of" />
      <Container className="mt-5 text-center">
        <h4>Few snaps of the happy merrories that we have created!</h4>
        <Tabs
          defaultActiveKey="Birthdays"
          id="uncontrolled-tab-example"
          className="mb-5 pt-5  mb-5"
          variant="pills"
        >
          {allImages.map((tab) => {
            return (
              <Tab eventKey={tab.title} title={tab.title}>
                <PhotoGallery pics={tab.images} />
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </div>
  );
};

export default Gallery;
