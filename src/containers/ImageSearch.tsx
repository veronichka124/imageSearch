import { useState, useEffect } from "react";
import { getImages } from "../utils/functions";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import { useImagesContext } from "../context/imagesContext";

const ImageSearch = () => {
  const { setImages } = useImagesContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("Image Search App");
  const [searchKey, setSearchKey] = useState<string>("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const onSearchChange = (key: string) => {
    setSearchKey(key);
  };

  function searchImages(page = 1, per_page = 30) {
    setLoading(true);
    getImages(page, per_page, searchKey).then((response) => {
      setImages(response.results);
      setLoading(false);
      setTitle(searchKey + " Pictures");
    });
  }

  return (
    <>
      <SearchBar searchImages={searchImages} onSearchChange={onSearchChange} />
      <ResultList loading={loading} searchKey={searchKey} />
    </>
  );
};

export default ImageSearch;
