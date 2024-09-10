import { useEffect, useState } from "react";

function useGridRowEnd(imageRef: React.RefObject<HTMLImageElement>) {
  const [gridSpan, setGridSpan] = useState<Number>(0);

  useEffect(() => {
    const handleLoad = () => {
      setGridSpan(imageRef.current?.clientHeight || 0);
    };
    imageRef.current?.addEventListener("load", handleLoad);
    return () => {
      imageRef.current?.removeEventListener("load", handleLoad);
    };
  }, [imageRef]);

  return { gridSpan };
}

export default useGridRowEnd;
