import React from 'react';
import styled from 'styled-components';
import {Nav, NavDropdown, Table} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TableList from '../components/TableList';

const innerListPg = styled.div`
    margin: 5% 15% 5% 15%;
    padding: 5% 10% 5% 10%;
`;
const outerListPg = styled.h2`
    
    border: 2px solid black;
`;
const upperListPg = styled.h3`
    border: 1px solid black;
`;

const ListPage = () => {
    return (
        // Listing contents in table format:
        <div>
            <Header></Header>
            <outerListPg>Open Source Projects</outerListPg>
            <upperListPg>Search Bar goes here</upperListPg>


            <innerListPg>
                 <TableList></TableList>
            </innerListPg>
            <Footer></Footer>
        </div>
    );
};

export default ListPage;