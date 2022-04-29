import './App.css';
import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
// Following imports are our pages
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function setToken(userToken) {
    console.log("tokenTEst")
    console.log(userToken)
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

 

function App(){
 
    const token = getToken();

    if(!token){

        return (
            <div className="App">
                <Routes>
                    <Route path="/" exact={true} element={<LoginPage setToken={setToken}/>}/>
                </Routes>
            </div>
        );


    }
    
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact={true} element={<LoginPage setToken={setToken}/>}/> 
                <Route path="/list" exact={true} element={<ListPage/>}/>
            </Routes>
        </div>
    );
 
}
export default App;
