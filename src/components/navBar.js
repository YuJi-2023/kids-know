import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="#home">Kids Know</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#todos">ToDos</Nav.Link>
            <Nav.Link href="#expenseTracker">$ Tracker</Nav.Link>
            <NavDropdown title="Tips" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Money Smart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Time Master
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
