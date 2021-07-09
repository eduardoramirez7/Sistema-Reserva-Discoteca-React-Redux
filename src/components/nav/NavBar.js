import { Nav, Navbar } from "react-bootstrap";
import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

export default function NavBar() {
    return (
        <Navbar className="container mt-2"collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className="link-color" to="/">ReservApp</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="link-color" to="/About">Acerca de</Link>
                </Nav>
                <Nav>
                    <Link className="link-color" to="/Login">Iniciar Sesión</Link>
                    <Link className="link-color ml-2" to="/Signup">Registrate</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
