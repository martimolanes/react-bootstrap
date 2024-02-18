import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

const Layout = () => {
  return (
      <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Martinho Website</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;
