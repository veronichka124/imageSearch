interface SearchBarProps {
  searchImages: () => void;
  onSearchChange: (key: string) => void;
}

const SearchBar = ({ searchImages, onSearchChange }: SearchBarProps) => {
  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    searchImages();
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
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <input className="submitBtn" type={"submit"} value={"Search"} />
      </form>
    </div>
  );
};

export default SearchBar;
