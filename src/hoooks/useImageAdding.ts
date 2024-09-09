import { useEffect, useState } from "react";
import { useImagesContext } from "../context/imagesContext";
import { getImages } from "../utils/functions";
import { useKeywordContext } from "../context/keywordContext";

interface ImageAddingProps {
  hasMore: boolean;
  endMessage: string;
  addImagesOnScroll: () => void;
}

function useImageAdding(): ImageAddingProps {
  const { images, appendImages, requests, page } = useImagesContext();
  const [totalImages, setTotalImages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { keyword } = useKeywordContext();
  const requestLimit = 2;

  useEffect(() => {
    setHasMore(true);
  }, [images]);

  function addImagesOnScroll() {
    if (requests < requestLimit) {
      getImages(page, 5, keyword).then((response) => {
        setTotalImages(response.total);
        if (images.length !== response.total) {
          const newImages = [...images, ...response.results];
          appendImages(newImages);
        } else {
          setHasMore(false);
        }
      });
    } else {
      setHasMore(false);
    }
  }

  const endMessage: string =
    images.length !== totalImages
      ? "You have reached limit"
      : "You have seen it all";

  return { hasMore, endMessage, addImagesOnScroll };
}

export default useImageAdding;
