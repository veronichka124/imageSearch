import { useState } from "react";
import { useImagesContext } from "../context/imagesContext";
import { getImages } from "../utils/api";
import { capitalizeFirstLetter } from "../utils/helpers";

function useImageAdding() {
  const { appendImages, requests, page, setImages, setTotalImages } =
    useImagesContext();
  const [loading, setLoading] = useState(false);
  const requestLimit = 3;
  const per_page = 15;

  function searchNewImages(keyword: string) {
    const page = 1;
    setLoading(true);
    getImages(page, per_page, keyword)
      .then((response) => {
        setTotalImages(response.total);
        setImages(response.results);
        document.title = `${capitalizeFirstLetter(keyword)} Pictures`;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function addImagesOnScroll(keyword: string) {
    if (requests >= requestLimit) return;
    setLoading(true);
    getImages(page, per_page, keyword)
      .then((response) => {
        appendImages(response.results);
        setTotalImages(response.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    addImagesOnScroll,
    searchNewImages,
    loading,
  };
}

export default useImageAdding;
