import React from 'react';
import "./Header.css";
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Genius Mechanics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="#shop">Shop</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#blog">Blog</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;