import { useKeywordContext } from "../context/keywordContext";

interface SearchBarProps {
  searchImages: () => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { setKeyword } = useKeywordContext();

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    props.searchImages();
  }

  return (
    <div className="searchBlock">
      <h1>Search free photos from Unsplash</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="keywordInput"
          type="text"
          name="photo"
          autoComplete="off"
          placeholder="Search photos by a keyword"
          onChange={setKeyword}
        />
        <input className="submitBtn" type={"submit"} value={"Search"} />
      </form>
    </div>
  );
};

export default SearchBar;
