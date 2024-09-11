import InfiniteScroll from "react-infinite-scroll-component";
import ImageList from "./ImageList";
import { useImagesContext } from "../context/imagesContext";
import useImageAdding from "../hooks/useImageAdding";
import Loader from "./Loader";

interface ResultListProps {
  loading: boolean;
  searchKey: string;
}

const ResultList = ({ loading, searchKey }: ResultListProps) => {
  const { images, totalImages } = useImagesContext();
  const { addImagesOnScroll } = useImageAdding();
  const hasMore = images.length < totalImages;
  const endMessage: string = hasMore
    ? "You have reached request limit"
    : "You have seen it all";

  if (loading) return <Loader />;
  else if (images.length === 0 && !!searchKey) return <p>No results</p>;

  return (
    <InfiniteScroll
      className="infiniteScroll"
      next={() => addImagesOnScroll(searchKey)}
      hasMore={hasMore}
      loader={<Loader />}
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
