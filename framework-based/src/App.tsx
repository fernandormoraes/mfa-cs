import { useModuleApps } from '@modern-js/plugin-garfish/runtime';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Footer from './_Footer';

const AppLayout = () => (
  <Navbar className="bg-body-tertiary">
    <Container>
        <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            <Nav.Link href={'/dashboard'}>Dashboard</Nav.Link>
            <Nav.Link href={'/inventory'}>Inventory</Nav.Link>
            <Nav.Link href={'/product'}>Product</Nav.Link>
        </Nav>
        <Outlet/>
        <Footer></Footer>
    </Container>

  </Navbar>
)

export default () => {
  const { apps, MApp, Inventory, Dashboard, Product } = useModuleApps();

  for (const app of apps) {
    app.sandbox = {modules: [() => ({
      override: {
        localStorage: window.localStorage,
      },
    })]}
  }

  // If you are not using the MApp component, you need to use createBrowserRouter to create the route.
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route key={'inventory'} path={'inventory/*'} element={<Inventory />} />
        <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />
        <Route key={'product'} path={'product/*'} element={<Product />} />
      </Route>
    )
  );

  return (
    // Approach 1: Use MApp to automatically load sub-applications based on the configured activeWhen parameter (this project is configured in modern.config.ts)
    // <BrowserRouter>
    //   <MApp />
    // </BrowserRouter>

    // Approach 2: Manually write Route components to load sub-applications, which is convenient for scenarios that require authentication and other pre-requisite operations
    <>
      <RouterProvider router={router} />
    </>
  );
};
