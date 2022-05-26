import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        // <nav>
        //     <Link to={'/'}>Home</Link>
        //     <Link to={'/friends'}>Friends</Link>
        //     <Link to={'/about'}>About</Link>
        // </nav>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Router</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;