import React, {Component} from 'react';
import logo from './logo.svg';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/ListPage';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn React</a>
                <Routes>
                    <Route path="/home" exact={true} element={<MainPage/>}/>
                    <Route path="/login" exact={true} element={<LoginPage/>}/>
                    <Route path="/write" exact={true} element={<CreatePage/>}/>
                    <Route path="/read" exact={true} element={<ListPage/>}/>
                </Routes>
                </Header>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
