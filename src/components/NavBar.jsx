import React from 'react';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar bg="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-light" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="text-light" as={Link} to="/posts/new">New</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
