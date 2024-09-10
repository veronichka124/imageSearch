import { useRef } from "react";
import { downloadImage } from "../utils/functions";
import useGridRowEnd from "../hoooks/useGridRowEnd";
import { ReactComponent as DownloadIcon } from "../assets/download.svg"; // Import SVG as a React component

interface ImageCardProps {
  image: any;
}

const ImageCard = ({ image }: ImageCardProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { gridSpan } = useGridRowEnd(imageRef);

  const downloadHandler = () => {
    downloadImage(image);
  };

  return (
    <div className="imageCard" style={{ gridRowEnd: `span ${gridSpan}` }}>
      <img
        loading="lazy"
        ref={imageRef}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className="imageCover">
        <div className="cardFooter">
          <div className="cardFooterContent">
            <a className="author" href={image.user.portfolio_url}>
              By {image.user.name}
            </a>
            <span className="downloadBtn" onClick={downloadHandler}>
              <DownloadIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
