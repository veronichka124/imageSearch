import { ProgressBar } from "react-loader-spinner";

function useLoader(loading: boolean) {
  const loader = loading ? <ProgressBar height={80} width={80} /> : "";

  return [loader];
}

export default useLoader;
