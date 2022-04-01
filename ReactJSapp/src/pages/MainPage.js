import React from 'react';
import {Container, Row, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainList = styled.div`
  background: linear-gradient(rgb(78,255, 149), #3bff00);
  backgroundColor: #3bff00;
  width: 100%;
`;

//const MainPage = () => {
function MainPage (props) {
    const [modalShow, setModalShow] = React.useState(true);
    return (
    <div className="jumbotron">
        <Modal
            {...props}
            show={modalShow}
            focus={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{border:"2px solid black", background: "linear-gradient(rgb(78,255, 149), transparent)",
            backgroundColor: "#3bff00",}}
        >
            <Modal.Body>
                <Container>
                    <Row style={{width:"100%"}}>
                        <hr class="my-1"></hr>
                        <h1 className="display-2" style={{textAlign: "center"}}>Welcome back!<br /></h1>
                    </Row>
                    <Row style={{margin:"0.1px auto", width:"80%"}}>
                        <hr class="my-4"></hr>
                        <p className="lead" style={{textAlign: "center"}}>Proceed to Employee Login:</p>
                    </Row>
                    <Row style={{margin: "5px auto", width:"65%"}}>
                        <a className="btn btn-primary btn-lg" href="/login" role="button">Login as Employee</a>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
        </div>
        );
};

export default MainPage;