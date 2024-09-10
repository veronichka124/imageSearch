import ImageCard from "./ImageCard";
import { useImagesContext } from "../context/imagesContext";

const ImageList = () => {
  const { images } = useImagesContext();

  const listOfImages = images.map((img) => {
    return <ImageCard key={`imageCard-${img.id}`} image={img} />;
  });

  return (
    <div className="imagesContainer">
      <div className="imageList">{listOfImages}</div>;
    </div>
  );
};

export default ImageList;
