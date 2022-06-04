import React, { Component } from 'react';
import { NavBar, Nav, NavItem, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Mynav() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>

                        <Link style={{ textDecoration: 'none' }} to="/">
                            <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        </Link>

                        <Nav className="me-auto">

                            <Link style={{ textDecoration: 'none' }} to="/home">
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/services">
                                <Nav.Link href="/services">Services</Nav.Link>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/post">
                                <Nav.Link href="/post">Post</Nav.Link>
                            </Link>

                        </Nav>
                    </Container>
                </Navbar>


            </>
        </div>
    )
}

export default Mynav