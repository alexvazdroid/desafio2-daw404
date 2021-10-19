import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Desafio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to='/products'><Nav.Link href="#link">Productos</Nav.Link></Link>
              <Link to='/user'><Nav.Link href="#link">Registrarse</Nav.Link></Link>
              <Link to='/payment'><Nav.Link href="#link">Pagos</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default Header;