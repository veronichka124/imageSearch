import { downloadImage } from "../utils/functions";
import { ReactComponent as DownloadIcon } from "../assets/download.svg"; // Import SVG as a React component
import { Image } from "../types/images";

interface ImageCardProps {
  image: Image;
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="imageCard">
      <div className="imageCover">
        <div className="cardFooter">
          <div className="cardFooterContent">
            <a className="author" href={image.user.portfolio_url}>
              <img
                className="profilePic"
                loading="lazy"
                src={image.user.profile_image.small}
                alt={image.user.name}
                width={32}
                height={32}
              />
              {image.user.name}
            </a>
            <span className="downloadBtn" onClick={() => downloadImage(image)}>
              <DownloadIcon />
            </span>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
