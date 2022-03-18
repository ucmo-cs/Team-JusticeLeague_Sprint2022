import React from 'react';

import {Nav, NavDropdown, Table} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ListPage = () => {
    return (
        // Listing contents in table format:
        <div>
            <Header></Header>
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

            <Footer></Footer>
        </div>
    );
};

export default ListPage;