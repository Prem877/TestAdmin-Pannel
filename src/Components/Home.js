import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Sidebar />
            <main class="main-wrapper">
                <Header />
                <Dashboard />
                <Footer />
            </main>

        </>
    )
}

export default Home
