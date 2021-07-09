import { Nav, Navbar } from "react-bootstrap";
import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import { auth } from "../../services/firebase";

export default function NavBar() {
    return (

        auth().currentUser ? (
            <Navbar className="container mt-2" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link className="link-color" to="/">ReservApp</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="link-color mr-3" to="/About">Acerca de</Link>
                        <Link className="link-color mr-3" to="/Generos">Generos</Link>
                    </Nav>
                    <Nav>
                        <Link className="link-color" onClick={() => auth().signOut()}>
                            <img src="/images/logo.png" width="70" />Cerrar Sesión
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ) : (
            <Navbar className="container mt-2" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link className="link-color" to="/"><img src="/images/logo.png" width="70"/>ReservApp</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="link-color mr-3" to="/About">Acerca de</Link>

                    </Nav>
                    <Nav>
                        <Link className="link-color" to="/Login">Iniciar Sesión</Link>
                        <Link className="link-color ml-2" to="/Signup">Registrate</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    )
}
