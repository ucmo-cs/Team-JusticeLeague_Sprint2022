import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                    About
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" title="Item">
                    Academics
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" disabled>
                    NavLink 3 content
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>

    );
};

export default Menu;
