import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import { useImagesContext } from "../context/imagesContext";
import useImageAdding from "../hooks/useImageAdding";
import { capitalizeFirstLetter } from "./../utils/helpers";

const ImageSearch = () => {
  const { clearImages } = useImagesContext();
  const { searchNewImages, loading } = useImageAdding();
  const [searchKey, setSearchKey] = useState<string>("");
  const title = searchKey
    ? `${capitalizeFirstLetter(searchKey)} photos`
    : "Search photos from Unsplash";

  function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const keyword = formData.get("search") as string;
    setSearchKey(keyword);
    clearImages();
    if (!!keyword) searchNewImages(keyword);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <SearchBar onFormSubmit={handleSearchSubmit} />
      <ResultList loading={loading} searchKey={searchKey} />
    </div>
  );
};

export default ImageSearch;
