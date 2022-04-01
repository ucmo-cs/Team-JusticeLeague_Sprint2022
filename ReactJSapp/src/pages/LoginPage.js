import React from 'react';
import {Button, Modal, Form, Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {render} from "react-dom";

// For good styling info visit: https://styled-components.com/docs/basics

// should use <SaveForm></SaveForm>
function LoginPage(props){

    const [modalShow, setModalShow] = React.useState(true);
    // const showing = setModalShow(true)
    return (
    <div>
        <Modal
            {...props}
            show={modalShow}
            focus={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{background: "linear-gradient(rgb(78,255, 149), transparent)",
                backgroundColor: "#3bff00",}}

        >
            <Modal.Header>
                <Container>
                    {/*Row for navbar*/}
                    <Row>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Login</li>
                            </ol>
                        </nav>
                    </Row>
                    <Row>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Please enter your login credentials:
                        </Modal.Title>
                    </Row>
                </Container>
            </Modal.Header>
            <Modal.Body>
            <Container>
            <Form id="loginPanel" action={"/action.js"}>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="email" for="emailAddrss"><b>Email address</b></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row style={{margin: "5px auto", width:"45%"}}>
                    <a className="btn btn-primary btn-lg" href="/list" role="button">Login</a>
                </Row>
                </Form>
            </Container>
            </Modal.Body>
        </Modal>
    </div>
    );
};

export default LoginPage;