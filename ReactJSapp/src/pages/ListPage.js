import React, { useState } from 'react';
import styled from 'styled-components';
import {Container, Row, Col, Table} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import data from '../table-data.json';

const MyBody = styled.body`
    width: 100%;
    margin: 15px auto;
    background-color: #09fa98;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 0em;
  width: 100% auto; 
  background-color: forest;
`;

const ListPage = () => {

    const [contacts, setContacts] = useState(data);

    return (
        // Listing contents in table format:
        <div>

        <Header></Header>
        <Container fluid>
            <Row xs={0.75} sm={2} md={8} lg={12}>
            <Col xs sm md={1} lg={1.5}></Col>
            <Col xs={5} sm={6} md lg>
            <MyBody>
            <Table variant="default"
                style={{width: "100%", margin:"15px auto", backgroundColor:"#00fa68",
                        border: "2px solid", borderColor:"#00622c",
                        boxShadow:"8px 3px 3px 1px #00622c", textAlign:"left",}}
                striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Requester</th>
                    <th>License</th>
                    <th>State</th>
                    <th>Date Requested</th>
                    <th>Date Approved</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact)=> (
                <tr>
                    <td>{contact.project}</td>
                    <td>{contact.requester}</td>
                    <td>{contact.license}</td>
                    <td>{contact.state}</td>
                    <td>{contact.dateRequested}</td>
                    <td>{contact.dateApproved}</td>
                </tr>
                ))}
            </tbody>
            </Table>
            </MyBody>
            </Col>
            <Col xs sm md={1} lg={1.5}></Col>
            </Row>
        </Container>
            {/*this footer wont move ...*/}
            {/*read this page to learn how to fix*/}
            {/*https://thewebdev.info/2021/10/03/how-to-keep-the-page-footer-at-the-bottom-of-the-page-with-react/*/}
        <Container>
            <Row>
            <Footer></Footer>
            </Row>
        </Container>

    </div>
    );
};

export default ListPage;