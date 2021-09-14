import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Hero from './Hero';
import Footer from './Footer';
import '../index.css';
import './Main.css';

const HomePage = (props) => {
    return (
        <div>
            <Hero/>
            <Carousel classes={ props.classes }/>
            <About />
            <Footer />
        </div>
    )
}

export default HomePage;