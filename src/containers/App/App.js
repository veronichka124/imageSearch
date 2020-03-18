import React, { useState, useEffect } from "react";
import { getImages } from "../../utils/functions";
import ImageList from "../../components/ImageList";
import SearchBar from "../../components/SearchBar";
import Loader from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Image Search App");
  const [hasMore, setHasMore] = useState(true);
  const [fetchLimit, setFetchLimit] = useState(0);
  const maxFetchLimit = 2;

  useEffect(() => {
    document.title = title;
    setFetchLimit(0);
  }, [title]);

  function searchImages(page = 1, per_page = 30, moreImages = false) {
    setLoading(true);
    setFetchLimit(fetchLimit + 1);
    if (fetchLimit < maxFetchLimit) {
      getImages(page, per_page, keyword).then(response => {
        setLoading(false);
        setTitle(keyword + " Pictures");
        setTotalImages(response.total);
        let newImages;
        if (moreImages) {
          if (images.length !== response.total) {
            newImages = [...images, ...response.results];
          }
        } else {
          newImages = response.results;
          setHasMore(true);
        }
        setImages(newImages);

        if (images.length !== 0) {
          setHasMore(false);
        }
      });
    } else {
      setHasMore(false);
      setFetchLimit(0);
    }
  }

  const keywordInputHandler = input => {
    setKeyword(input);
  };

  let loader = loading ? (
    <Loader
      className="loader"
      type="ThreeDots"
      color="#somecolor"
      height={80}
      width={80}
    />
  ) : (
    ""
  );
  let noResultText = images.length === 0 ? "No Results" : "";
  let endMessage =
    images.length !== totalImages
      ? "You have reached limit"
      : "You have seen it all";

  return (
    <div className="App">
      <SearchBar searchImages={searchImages} setKeyword={keywordInputHandler} />
      <InfiniteScroll
        className="infiniteScroll"
        next={() => {
          searchImages(page + 1, 5, true);
          setPage(page + 1);
        }}
        hasMore={hasMore}
        loader={loader}
        dataLength={images.length}
        endMessage={
          <p style={{ textAlign: "center", marginBottom: 40 }}>
            <b>{endMessage}</b>
          </p>
        }
      >
        <ImageList foundImages={images} loading={loading} />
      </InfiniteScroll>
      {noResultText}
    </div>
  );
}

export default App;
