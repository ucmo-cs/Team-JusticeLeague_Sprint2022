import React from 'react';

import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import styled from 'styled-components';


// This is the code that creates the navbar layout for MainPage.js
// right now the nav bar is not formatted to be horizontal, it needs fixed
// because it has overlap
const Menu = () => {

    //const handleSelect = (eventKey) => `${eventKey}`; //alert(`selected ${eventKey}`);
    // Create small script to handle what each event means.
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Commerce Bank</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <NavDropdown className="me-auto" title="Page Options" id="nav-dropdown">
                        <Nav.Link href="/list">List Pages</Nav.Link>
                        <Nav.Link href="/create">Create Pages</Nav.Link>
                    </NavDropdown>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;
