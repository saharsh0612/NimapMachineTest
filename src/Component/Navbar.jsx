import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavbarMenu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Nimap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {localStorage.getItem('user-info') ? 
                            <>
                                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                                <Nav.Link as={Link} to={'/task'}>Task</Nav.Link>
                                <Nav.Link as={Link} to={'/user'}>User</Nav.Link>}
                            </>
                            :
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu