import ImageSearch from "../ImageSearch";
import { ImagesContextProvider } from "../../context/imagesContext";

function App() {
  return (
    <main className="App">
      <ImagesContextProvider>
        <ImageSearch />
      </ImagesContextProvider>
    </main>
  );
}

export default App;
