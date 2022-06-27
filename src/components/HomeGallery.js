import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import PhotoGallery from "./Gallery";

const HomeGallery = (props) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Container className="mt-5 mb-5" style={{ alignItems: "center" }}>
      <h2 className="text-center mb-3" style={{ fontSize: "50px" }}>
        The Charlie Chaplin <strong>Gallery</strong>
      </h2>
      <PhotoGallery pics={props.pics} />
      <center>
        <Button variant="outline-dark" href="/gallery">
          View all Gallery
        </Button>
      </center>
    </Container>
  );
};

export default HomeGallery;
