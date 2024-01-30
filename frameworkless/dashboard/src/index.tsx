import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import { createRoot } from 'react-dom/client';



(window as any).renderDashboard = (containerId: any, history: any) => {
    const container = document.getElementById(containerId);
    const root = createRoot(container!);
    root.render(<App history={history} basename='' />);

    unregister();
};

(window as any).unmountDashboard = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as Element);
};
