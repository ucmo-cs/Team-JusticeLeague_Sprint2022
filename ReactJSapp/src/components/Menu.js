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
    return (
        <Nav componentClass={Link} variant="pills" activeKey="1" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="1" href="/home" to="/home">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" href="/login" to="/login">
                    Login
                </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link eventKey="3" disabled>
                    Page Options
                </Nav.Link>
            </Nav.Item> */}
            <NavDropdown title="Page Options" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">List Pages</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Create Page</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>               
    );
};

export default Menu;
