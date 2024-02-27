
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import AppLayout from './AppHeader';

const {
  REACT_APP_DASHBOARD_HOST: dashboardHost,
  REACT_APP_INVENTORY_HOST: inventoryHost,
  REACT_APP_PRODUCT_HOST: productHost
} = process.env;


const Dashboard = () => (
  <MicroFrontend history={history} host={dashboardHost} document={document} name="Dashboard" window={window} />
);

const Inventory = () => (
  <MicroFrontend history={history} host={inventoryHost} document={document} name="Inventory" window={window} />
);

const Product = () => (
  <MicroFrontend history={history} host={productHost} document={document} name="Product" window={window} />
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />
      <Route key={'inventory'} path={'inventory/*'} element={<Inventory />} />
      <Route key={'product'} path={'product/*'} element={<Product />} />
    </Route>
  )
);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
