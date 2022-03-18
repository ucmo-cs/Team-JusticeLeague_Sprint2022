import React from 'react';
import {Button, Modal, Form, Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

// For good styling info visit: https://styled-components.com/docs/basics

// Using this to stylize the <div>
const LoginList = styled.div`  
  background-color: lightgreen;
  margin-top: 5%; margin-bottom: 10%;
  margin-left: 10%; margin-right: 3%;
  padding: 1.25% 0% 1.25% 3%;
  font-size: 1.0em;
  text-align: left;
  border : 3px solid black;
  border-radius: 5% 65% 2.5% 10%;
  height : 65%;
  width: 80%;
`;
// using Inner to stylize the elements in <Form>
// const InnerLoginList = styled.div`
//   margin-top: 0%; margin-bottom: 1%;
//   margin-left: 0%; margin-right: 20%;
//   padding: 0% 0% 0% 0%;
//   width: 70%;
// `;

// should use <SaveForm></SaveForm>
const LoginPage = () => {
    return (
            <div>
            <Header></Header>
            <Container>
            <Row>
                <Col sm={4}>sm=true</Col>
            </Row>
            </Container>
            <LoginList>
            {/* row1 */}
            <Container>
                <Row><Col sm={4}>
                    <h3>Please enter login information:</h3>
                </Col></Row>
            <Form>
                {/* row2 */}
                <Row><Col sm={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                </Col></Row>
                {/* row3 */}
                <Row><Col sm={4}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Col></Row>
                <Nav fill variant="pills" activeKey="1">
                <Row sm={2}>

                        <Col sm={"2"}>
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="/createAccount">Create Account</Nav.Link>
                        </Nav.Item>
                        </Col>
                        <Col sm={"2"}>
                        <Nav.Item>
                            <Nav.Link eventKey="2" href="/forgotPass">Forgot your password?</Nav.Link>
                        </Nav.Item>
                        </Col>
                </Row>
                    <Row>
                        <Nav.Item>
                            <Nav.Link eventKey="3" href="/listPage"></Nav.Link>
                        </Nav.Item>

                    </Row>
                </Nav>
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
        </div>
    );
};

export default LoginPage;
