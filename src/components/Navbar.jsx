import React from "react";
import {Link} from 'react-router-dom'
import "../pages/alunos.css"
import { Navbar, Nav, Container } from "react-bootstrap";

function Menu() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand style={{ fontWeight: "600" }}>
                    CRUD de Alunos
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="menu-navbar" />

                <Navbar.Collapse id="menu-navbar">
                    <Nav className="ms-auto align-items-center">

                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/alunos">
                            Alunos
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;