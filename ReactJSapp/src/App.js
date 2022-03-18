import './App.css';
import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
// Following imports are our pages
import MainPage from './pages/MainPage'; // change to "Home"?
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/home" exact={true} element={<MainPage/>}/>
                    <Route path="/login" exact={true} element={<LoginPage/>}/>
                    <Route path="/create" exact={true} element={<CreatePage/>}/>
                    <Route path="/list" exact={true} element={<ListPage/>}/>
                </Routes>
                {/*Old starter code from reactjs install*/}
                {/*<Header className="App-header">*/}
                {/*    /!*<img src={logo} className="App-logo" alt="logo"/>*!/*/}
                {/*    /!*<a*!/*/}
                {/*    /!*    className="App-link"*!/*/}
                {/*    /!*    href="https://reactjs.org"*!/*/}
                {/*    /!*    target="_blank"*!/*/}
                {/*    /!*    rel="noopener noreferrer"*!/*/}
                {/*    /!*>Learn React</a>*!/*/}
                {/*</Header>*/}
            </div>
        );
    };
}
export default App;


