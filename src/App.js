import React from 'react'
import { Article, Brand, CTA, Navbar } from './components';
import { Header, Footer, Possibility, Features, WhatGPT, Blog } from './containers';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App