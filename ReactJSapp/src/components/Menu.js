import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


// This is the code that creates the navbar layout for MainPage.js
// right now the nav bar is not formatted to be horizontal, it needs fixed
// because it has overlap
const Menu = () => {

    const handleSelect = (eventKey) => `${eventKey}`; //alert(`selected ${eventKey}`);
    // Create small script to handle what each event means.

    return (// add fixe="top" ... or side?
        // <Navbar componentClass={Link} activeKey="1" onSelect={handleSelect} bg="dark" variant="dark">
        <Navbar componentClass={Link} activeKey="1" onSelect={handleSelect} bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">Commerce Bank</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link eventKey="1" href="/home" to="/home">Home</Nav.Link>
                        <Nav.Link eventKey="2" href="/login" to="/login">
                            Login
                        </Nav.Link>
                        <NavDropdown title="Page Options" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" href="/list" to="/list">List Pages</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" href="/create" to="/create">Create Page</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;
