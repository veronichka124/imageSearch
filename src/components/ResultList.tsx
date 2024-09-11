import InfiniteScroll from "react-infinite-scroll-component";
import ImageList from "./ImageList";
import { useImagesContext } from "../context/imagesContext";
import useLoader from "../hoooks/useLoader";
import useImageAdding from "../hoooks/useImageAdding";

interface ResultListProps {
  loading: boolean;
  searchKey: string;
}

const ResultList = ({ loading, searchKey }: ResultListProps) => {
  const { images, totalImages } = useImagesContext();
  const [loader] = useLoader(loading);
  const { addImagesOnScroll } = useImageAdding();
  const hasMore = images.length < totalImages;
  const endMessage: string = hasMore
    ? "You have reached request limit"
    : "You have seen it all";

  if (images.length === 0) return <p>No results</p>;

  return (
    <InfiniteScroll
      className="infiniteScroll"
      next={() => addImagesOnScroll(searchKey)}
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
