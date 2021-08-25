import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap'

const MyNavbar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Strive BookStore</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Browse by Category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">fantasy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">history</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">horror</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">romance</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">scifi</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default MyNavbar