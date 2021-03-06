import React, { useState } from 'react';

import {Button, Form, Container, Row, Col, Nav, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


// For good styling info visit: https://styled-components.com/docs/basics

const MainList = styled.div`
  background-color: lightgreen;
  margin-top: 1%; margin-bottom: 1%;
  margin-left: 10%; margin-right: 3%;
  padding: 1.25% 0% 1.25% 3%;
  font-size: 1.0em;
  text-align: center;
  border : 3px solid black;
  border-radius: 5% 5% 5% 5%;
  height : 65%;
  width: 80%;
`;

// Using this to stylize the <div>
const LoginList = styled.div`  
  background-color: lightgreen;
  margin-top: 0%; margin-bottom: 10%;
  margin-left: 15%; margin-right: 0%;
  padding: 1.25% 0% 1.25% 0%;
  font-size: 1.0em;
  text-align: left;
  border : 3px solid black;
  border-radius: 5% 5% 5% 5%;
  height : 65%;
  width: 70%;
`;

// using Inner to stylize the elements in <Form>
// const InnerLoginList = styled.div`
//   margin-top: 0%; margin-bottom: 1%;
//   margin-left: 0%; margin-right: 20%;
//   padding: 0% 0% 0% 0%;
//   width: 70%;
// `;

// should use <SaveForm></SaveForm>


  


function LoginPage({setToken}){

    const [user, setNewUser] = useState({
        email: "",
        adminAccess: "No",
        password: " "
    });
    

    console.log("create user");
    console.log(user);
    const onInputChange2 = (e) => {
        console.log(e);
        setNewUser({
            ...user,[e.target.name]: e.target.value
        });
}

const handleCreateUserSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/user', {
   
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' },
      body: JSON.stringify(user),
      credentials : 'same-origin',
      }).then((res) => {
        console.log(res)     
        return res.json(); 
      }).then((res) =>{
        console.log(res);
        window.location.href="/"

      });

  }

const [login, setLogin] = useState({
    email:'',
    password:''

})

const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Login ");
    fetch('http://localhost:8080/login', {
   
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' },
      body: JSON.stringify(login),
      credentials : 'same-origin',
      }).then((res) => {
        console.log(res)     
        return res.json(); 
      }).then((res) =>{
        console.log(res);
        setToken(res);
        window.location.href="/list";
      });

  }


const onInputChange = (e) => {
        console.log(e);
        setLogin({
            ...login,[e.target.name]: e.target.value
        });
}
    

 const [show, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);


    return (
            <div className="loginPg">
            <img src="commercebanklogo.png" style={{width:'40%'}}/>
            {/* row1 */}
            <LoginList>
            <Container>
                <Row><Col sm={4} lg={8}>
                    <h3>Please enter your login credentials:</h3>
                </Col></Row>
            <Form onSubmit={handleSubmit}>
                {/* row2 */}
                <Row><Col sm={4} lg={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" onChange={ (e) => onInputChange(e)} placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                </Col></Row>
                {/* row3 */}
                <Row><Col sm={4} lg={8}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" onChange={ (e) => onInputChange(e)} placeholder="Password" name="password"/>
                </Form.Group>
                </Col></Row>
                <Row>
                    <Col md={2} lg={2}>
                        <Button size="sm" variant="success" onClick={handleShow}>Create Account</Button>{' '}
                    </Col>
                    <Col md={3} lg={5}>
                        <Button size="sm" variant="success">Forgot Password?</Button>{' '}
                    </Col>
                </Row>

                <Row>
                    <Nav.Item>
                        <Nav.Link eventKey="3" href="/listPage"></Nav.Link>
                    </Nav.Item>
                </Row>
                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                {/*</Form.Group>*/}
                {/* row4 */}
                <Row><Col>
                    <Button size="lg" variant="success" type="submit">Login</Button>{' '}
                    </Col>
                </Row>
            </Form>
            </Container>
            </LoginList>
            <Footer></Footer>


            <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
            <Modal.Header style={{backgroundColor: 'forestgreen'}}>
                    <Modal.Title>
                        New User
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleCreateUserSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={ (e) => onInputChange2(e)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={ (e) => onInputChange2(e)} placeholder="Password" />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Submit
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
            </Modal.Footer>
        </Modal>

        </div>
    );
};

export default LoginPage;