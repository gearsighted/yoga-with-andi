import React from 'react';
import NavBar from './Navbar'
import About from './About';
import Carousel from './Carousel';
import Hero from './Hero';
import Footer from './Footer';
import '../index.css';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Carousel />
            <About />
            <Footer />
        </div>
    )
}

export default HomePage;