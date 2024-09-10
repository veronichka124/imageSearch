import ImageSearch from "../ImageSearch";
import { KeywordContextProvider } from "../../context/keywordContext";
import { ImagesContextProvider } from "../../context/imagesContext";

function App() {
  return (
    <main className="App">
      <KeywordContextProvider>
        <ImagesContextProvider>
          <ImageSearch />
        </ImagesContextProvider>
      </KeywordContextProvider>
    </main>
  );
}

export default App;
