import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Entete = ({search, handleSearch}) => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Workshop-E</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">A propos</Nav.Link>
            <NavDropdown title="Categorie" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hommes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Femmes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enfants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Accesoires</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
          </Form>
      </Container>
    </Navbar>
    </div>
  )
}

export default Entete