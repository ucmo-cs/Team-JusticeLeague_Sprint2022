import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <p>body text</p>
            </div>
            <div>
                <p>Footer text</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;