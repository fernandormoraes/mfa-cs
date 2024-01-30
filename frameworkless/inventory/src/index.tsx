import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import { createRoot } from 'react-dom/client';


(window as any).renderInventory = (containerId: any, history: any) => {
    const container = document.getElementById(containerId);
    const root = createRoot(container!);
    root.render(<App history={history} basename='' />);

    unregister();
};

(window as any).unmountInventory = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element);
};
