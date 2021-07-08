import { Nav, Navbar } from "react-bootstrap";
import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar className="mt-2"collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">ReservApp</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/About">Acerca de</Link>
                </Nav>
                <Nav>
                    <Link to="/Login">Iniciar Sesión</Link>
                    <Link className="ml-2" to="/Signup">Registrate</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
