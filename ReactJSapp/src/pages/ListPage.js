import React, {useState} from 'react';
import {Table, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyBody = styled.body`
    width: 100% auto;
    margin: 15px auto;
    background-color: #09fa98;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 0em;
  width: 100% auto; 
  background-color: forest;
`;

// Manage the table values:
const colMax = 6;
let rowMax = 20; // We should allow rows to be added/removed/edited
const headerKey = ["Project", "Requester ID",
    "License", "Status",
    "Date Requested", "Date Approved"];

// row -> x , col -> y
let rowPos = [];
let colPos = [];
let cellPos = [rowPos, colPos];  // cellPos[x, y]  ... map these together
// need a data structure to use some temp row data for the table
// somehow map them together based off of the header array above
// id=col1, id=col2, col3, ..., something like this ?

                // props
const ListPage = () => {
    let str;
    return (
        // Listing contents in table format:
        <div>
            <Wrapper>
            <Header></Header>
            <MyBody>
            <Table
                variant="default"
                style={{width: "80%", margin: "250px auto",
                    backgroundColor:"#00fa68",
                    border: "2px solid", borderColor:"#00622c", boxShadow:"8px 3px 3px 1px #00622c",
                    textAlign: "left",
                }}
            striped bordered hover responsive>
            <caption>Summary of software product license management</caption>
    {/*---------- Table Header Row*/}
                <thead style={{backgroundColor:"#36dc07", textAlign:"center"}}>
{/*---- NOTE: tr elements using the js mapping will be useful to auto fill data into our tables*/}
                <tr>
                    <th width={1}>#</th>
                    {Array.from({ length: colMax }).map((_, index) => (
                        <th key={index}>{headerKey[index]}</th>
                    ))}
                </tr>
                </thead>
    {/*---------- End for Table Header Row*/}
                <tbody>
                <tr>
                    <td>1</td>
                    {Array.from({ length: colMax }).map((_, index) => (

                        <td key={index}>cell(1, {index})</td>
                    ))}
                </tr>
                <tr>
                    <td>2</td>
                    {Array.from({ length: colMax }).map((_, index) => (
                        <td key={index}>cell(2, {index})</td>
                    ))}
                </tr>
                <tr>
                    <td>3</td>
                    {Array.from({ length: colMax }).map((_, index) => (
                        <td key={index}>cell(3, {index})</td>
                    ))}
                </tr>
                </tbody>
            </Table>
            </MyBody>
            <Footer></Footer>
        </Wrapper>
        </div>
    );
};

export default ListPage;

// some example code I followed.
// havnt used this example yet
// <tbody>
// {movies.map(movie => {
//     return (
//         <tr key={movie.id}>
//             <td>{movie.popularity}</td>
//             <td>{movie.title}</td>
//             <td>{movie.release_date}</td>
//             <td>modal will go here…</td>
//         </tr>
//     );
// })}
// </tbody>