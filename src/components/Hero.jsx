import React from 'react';
import '../index.css';
import '../styles/hero.css';
import Navbar from './Navbar';

function Hero () {
    return (
        <div className="w-full h-screen relative text-white">  
        <img src="https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Woman holding a yoga pose" className="absolute top-0 left-0 w-full h-full object-cover " />

        <Navbar/>
        
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12 z-2">
            <div>
                <h1 className=" text-3xl md:text-6xl leading-tight mb-10">Andi Senatro</h1>
                <br className="hidden md:block font-thin" />
                <h2>Certified Yoga Instructor</h2>
                <p className="text-xl mx-auto max-w-lg text-center leading-relaxed mb-10">I have a passion for teaching yoga in order to encourage self-love and cultivate peace and healing.</p>
                <div>
                <a href="#about" className="text-black rounded-md bg-yellow-500 font-normal py-4 px-8 mr-3 hover:bg-pink-500 hover:text-white transition-all transition-300 ease-in">About Me</a>
                <a href="#private-classes" className="text-black rounded-md bg-blue-400 font-normal py-4 px-8 ml-3 hover:bg-pink-500 hover:text-white transition-all transition-300 ease-in">Get started</a>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Hero;