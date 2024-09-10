import { useState, useEffect } from "react";
import { getImages } from "../utils/functions";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import { useKeywordContext } from "../context/keywordContext";
import { useImagesContext } from "../context/imagesContext";

const ImageSearch = () => {
  const { keyword } = useKeywordContext();
  const { setImages } = useImagesContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("Image Search App");

  useEffect(() => {
    document.title = title;
  }, [title]);

  function searchImages(page = 1, per_page = 30) {
    setLoading(true);
    getImages(page, per_page, keyword).then((response) => {
      setImages(response.results);
      setLoading(false);
      setTitle(keyword + " Pictures");
    });
  }

  return (
    <>
      <SearchBar searchImages={searchImages} />
      <ResultList loading={loading} />
    </>
  );
};

export default ImageSearch;
