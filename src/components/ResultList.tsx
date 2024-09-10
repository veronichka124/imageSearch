import InfiniteScroll from "react-infinite-scroll-component";
import ImageList from "./ImageList";
import { useImagesContext } from "../context/imagesContext";
import useLoader from "../hoooks/useLoader";
import useImageAdding from "../hoooks/useImageAdding";

interface ResultListProps {
  loading: boolean;
}

const ResultList = (props: ResultListProps) => {
  const { images } = useImagesContext();
  const [loader] = useLoader(props.loading);
  const { hasMore, endMessage, addImagesOnScroll } = useImageAdding();

  if (images.length === 0) return <p>No results</p>;

  return (
    <InfiniteScroll
      className="infiniteScroll"
      next={addImagesOnScroll}
      hasMore={hasMore}
      loader={loader}
      dataLength={images.length}
      endMessage={
        <p style={{ textAlign: "center", marginBottom: 40 }}>
          <b>{endMessage}</b>
        </p>
      }
    >
      <ImageList />
    </InfiniteScroll>
  );
};

export default ResultList;
