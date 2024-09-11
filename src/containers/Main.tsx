import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import { useImagesContext } from "../context/imagesContext";
import useImageAdding from "../hooks/useImageAdding";

const ImageSearch = () => {
  const { setImages, clearImages } = useImagesContext();
  const { searchNewImages, loading } = useImageAdding();
  const [searchKey, setSearchKey] = useState<string>("");

  const onSearchChange = (key: string) => {
    setSearchKey(key);
  };

  function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();
    clearImages();
    searchNewImages(searchKey);
  }

  return (
    <>
      <SearchBar
        onFormSubmit={handleSearchSubmit}
        onSearchChange={onSearchChange}
      />
      <ResultList loading={loading} searchKey={searchKey} />
    </>
  );
};

export default ImageSearch;
