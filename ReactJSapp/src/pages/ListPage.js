import React from 'react';
import styled from 'styled-components';
import {Nav, NavDropdown, Table} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const innerListPg = styled.div`
    margin: 2% 15% 2% 15%;
    padding: 5% 10% 5% 10%;
`;

const ListPage = () => {
    return (
        // Listing contents in table format:
        <div>
            <Header></Header>
            <innerListPg>

            <Table responsive>

                <thead>
                <tr>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Project Name</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                </tbody>
            </Table>
            </innerListPg>
            <Footer></Footer>
        </div>
    );
};

export default ListPage;