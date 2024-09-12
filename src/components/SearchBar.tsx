import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as ClearIcon } from "../assets/clear.svg";

interface SearchBarProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

const SearchBar = ({ onFormSubmit }: SearchBarProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="searchBlock">
      <form onSubmit={onFormSubmit}>
        <input
          className="keywordInput"
          type="text"
          name="search"
          autoComplete="off"
          value={value}
          placeholder="Search photos by a keyword"
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <>
            <button
              className="iconBtn clearIcon"
              type="button"
              title="Clear"
              onClick={() => setValue("")}
            >
              <ClearIcon className="icon" />
            </button>
            <span className="divider" />
          </>
        )}
        <button className="iconBtn searchIcon" type="submit" title="Search">
          <SearchIcon className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
