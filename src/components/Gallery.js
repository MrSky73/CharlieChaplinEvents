import Masonry from "react-masonry-css";

const PhotoGallery = (props) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.pics.map((pic) => {
        return <img src={pic.src} key={pic.src} style={{ width: "100%" }} />;
      })}
    </Masonry>
  );
};

export default PhotoGallery;
