import 'bootstrap/dist/css/bootstrap.min.css';
import { unregister } from './registerServiceWorker';
import App from './App';
import { createRoot } from 'react-dom/client';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
unregister();
