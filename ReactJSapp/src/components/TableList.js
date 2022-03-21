import React from 'react';
import {Nav, NavDropdown, Table} from 'react-bootstrap';
import styled from 'styled-components';

const ListPg = styled.div`
    margin: 5% 15% 5% 15%;
    padding: 5% 10% 5% 10%;
`;

const TableList = () => {

return (
        <div>
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
            </div>
    );
};

export default TableList;