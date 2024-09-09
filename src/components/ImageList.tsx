import ImageCard from "./ImageCard";
import { useImagesContext } from "../context/imagesContext";

const ImageList = () => {
  const { images } = useImagesContext();

  const listOfImages = images.map((img, index) => {
    return <ImageCard key={index + "-" + img.id} image={img} />;
  });

  return (
    <div>
      <div className="imageList">{listOfImages}</div>
    </div>
  );
};

export default ImageList;
