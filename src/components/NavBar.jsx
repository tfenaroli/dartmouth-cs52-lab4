import React from 'react';
import {
  Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
  return (
    <Nav className="justify-content-between align-items-center bg-dark py-2" activeKey="/home">
      <Nav.Item>
        <Nav.Link className="text-light ms-5" as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light me-5" as={Link} to="/posts/new">
          <FontAwesomeIcon
            style={{
              fontSize: 28,
            }}
            icon={faSquarePlus}
          />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
