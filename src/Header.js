import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    const route = useLocation();

    return (
        <Navbar collapseOnSelect expand="md" className="header" fixed="top">
            <div className="container">
                <Navbar.Brand className="brand" as={Link} to="/">
                    LUCAS MAY PETRY
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu" />
                <Navbar.Collapse
                    id="menu"
                    className="justify-content-end">
                    <Nav className="menu-popup">
                        <Nav.Item
                            className={route.pathname === '/' ? 'active' : null}>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            className={route.pathname === '/projects' ? 'active' : null}>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            className={route.pathname === '/research' ? 'active' : null}>
                            <Nav.Link as={Link} to="/research">Research</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}