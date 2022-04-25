import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';




    

// This is the code that creates the navbar layout for MainPage.js
// right now the nav bar is not formatted to be horizontal, it needs fixed
// because it has overlap
const Menu = () => {

    //const handleSelect = (eventKey) => `${eventKey}`; //alert(`selected ${eventKey}`);
    // Create small script to handle what each event means.

    const [navigate, setNavigate] = useState();


    const logout =()=>{
        sessionStorage.clear();
        sessionStorage.removeItem("token");
        setNavigate({navigate:true});
        window.location.href="/";

    }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Commerce Bank</Navbar.Brand>
                    <Button variant="outline-success" onClick={logout} style={{position: 'relative', left: '6%'}}>Logout</Button> 
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;