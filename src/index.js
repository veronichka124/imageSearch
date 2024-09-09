import { createRoot } from 'react-dom/client';
import App from './containers/App/App';
import "./styles/global.scss";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
