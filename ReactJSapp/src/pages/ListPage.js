import React, { useState } from 'react';
import styled from 'styled-components';
import {Container, Nav, NavDropdown, Table} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import data from '../table-data.json';

const innerListPg = styled.div`
    margin: 2% 15% 2% 15%;
    padding: 5% 10% 5% 10%;
`;

const ListPage = () => {

    const [contacts, setContacts] = useState(data);

    return (
        // Listing contents in table format:
        <div>
            <Header></Header>
            <innerListPg>
            <Container>
            <Table striped bordered hover size="sm">
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
            </Container>
            </innerListPg>
            <Footer></Footer>
        </div>
    );
};

export default ListPage;