import { createContext, useState, useContext, ReactNode } from "react";

interface ImagesContextProps {
  images: any[];
  requests: number;
  page: number;
  totalImages: number;
  setImages: (newImages: any[]) => void;
  appendImages: (newImages: any[]) => void;
  clearImages: () => void;
  setTotalImages: (total: number) => void;
}

const ImagesContext = createContext<ImagesContextProps | undefined>(undefined);

const ImagesContextProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImagesState] = useState<any[]>([]);
  const [requests, setRequests] = useState(0);
  const [page, setPage] = useState(2);
  const [totalImages, setTotalImages] = useState(0);

  const setImages = (newImages: any[]) => {
    setImagesState(newImages);
    setRequests((prevRequests) => prevRequests + 1);
    setPage((prevPage) => prevPage + 1);
  };

  const clearImages = () => {
    setImagesState([]);
    setRequests(0);
    setPage(2);
  };

  const appendImages = (newImages: any[]) => {
    setImagesState((prevImages) => [...prevImages, ...newImages]);
    setRequests((prevRequests) => prevRequests + 1);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <ImagesContext.Provider
      value={{
        images,
        requests,
        page,
        totalImages,
        setImages,
        appendImages,
        clearImages,
        setTotalImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

const useImagesContext = () => {
  const context = useContext(ImagesContext);
  if (context === undefined) {
    throw new Error(
      "useImagesContext must be used within an ImagesContextProvider"
    );
  }
  return context;
};

export { ImagesContextProvider, useImagesContext };
