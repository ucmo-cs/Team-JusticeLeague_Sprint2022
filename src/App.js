import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import ListPage from './pages/ListPage';

function App() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/home" exact={true} element={<MainPage/>}/>
                <Route path="/login" exact={true} element={<LoginPage/>}/>
                <Route path="/write" exact={true} element={<CreatePage/>}/>
                <Route path="/read" exact={true} element={<ListPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
