import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainList = styled.div`
  background-color: lightgreen;
  margin-top: 5%; margin-bottom: 10%;
  margin-left: 10%; margin-right: 3%;
  padding: 1.25% 0% 1.25% 3%;
  font-size: 1.0em;
  text-align: center;
  border : 3px solid black;
  border-radius: 5% 5% 5% 5%;
  height : 65%;
  width: 80%;
`;

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <MainList>
                <h1>Welcome to Commerce Bank</h1>
                <h3>Employee Logins</h3>
            </MainList>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;