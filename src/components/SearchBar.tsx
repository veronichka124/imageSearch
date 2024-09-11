import { ReactComponent as SearchIcon } from "../assets/search.svg"; // Import SVG as a React component

interface SearchBarProps {
  onFormSubmit: (event: React.FormEvent) => void;
  onSearchChange: (key: string) => void;
}

const SearchBar = ({ onFormSubmit, onSearchChange }: SearchBarProps) => {
  return (
    <div className="searchBlock">
      <h1>Search photos from Unsplash</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="keywordInput"
          type="text"
          name="photo"
          autoComplete="off"
          placeholder="Search photos by a keyword"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="searchIcon" type="submit">
          <SearchIcon className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
