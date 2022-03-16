import React from 'react';
import {Nav, NavDropdown} from 'react-bootstrap';


// This is the code that creates the navbar layout for MainPage.js
// right now the nav bar is not formatted to be horizontal, it needs fixed
// because it has overlap
const Menu = () => {

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    /// ^^^ can use this format, but use <Redirect> from react-router-dom
    // plug in the file path name and force redirect.

    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="1" href="#/home">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" title="Item">
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
