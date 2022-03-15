import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

/*const LoginPageList = styled.div`
  margin: 20px 0px 0px 0px;
  font-size: 1.0em;
  border : 1px solid black;
  height : 100px;
`;*/

const LoginPage = () => {
    return (
        <div>
            Login page
        </div>
        // old code building a login form page below
        /*<LoginPageList>
            Login page
            <Container>
                <body>
                <h2>Account Login</h2>
                <Row>
                    <Col sm={4}>blank place</Col>
                    <Col sm={4}>
                        <form>
                            <label>
                                Username or Email address
                                <input type="text" name="username-field" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </Col>
                    <Col sm={4}>blank place</Col>
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm={8}>sm=8</Col>
                </Row>
                </body>
            </Container>
        </LoginPageList>*/
    );
};

export default LoginPage;
