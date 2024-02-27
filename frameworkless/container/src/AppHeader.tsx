import { Outlet } from 'react-router-dom';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import Footer from './Footer';

const AppLayout = () => (
  <Navbar className="bg-body-tertiary">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href={'/'}>Home</Nav.Link>
        <Nav.Link href={'/dashboard'}>Dashboard</Nav.Link>
        <Nav.Link href={'/inventory'}>Inventory</Nav.Link>
        <Nav.Link href={'/product'}>Product</Nav.Link>
      </Nav>
      <Outlet />
      <Footer></Footer>
    </Container>

  </Navbar>
)

export default AppLayout;
