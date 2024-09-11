import Main from "../Main";
import { ImagesContextProvider } from "../../context/imagesContext";

function App() {
  return (
    <main className="App">
      <ImagesContextProvider>
        <Main />
      </ImagesContextProvider>
    </main>
  );
}

export default App;
