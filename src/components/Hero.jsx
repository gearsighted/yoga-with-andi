import React from 'react';
import '../index.css';
import Navbar from './Navbar';

function Hero () {
    return (
        <div class="w-full h-screen relative text-white">
        <img src="https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Woman holding a yoga pose" class="absolute top-0 left-0 w-full h-full object-cover" />

        <Navbar/>

        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12">
            <div>
                <h1 class=" text-3xl md:text-6xl leading-tight mb-10">Andi Senatro <br class="hidden md:block font-thin" />Certified Yoga Instructor</h1>
                <p class="text-xl mx-auto max-w-lg text-center leading-relaxed mb-10">Specializing in personalized private yoga instruction</p>
                <a href="#private-sessions" class="text-black rounded-md bg-blue-400 font-normal py-4 px-8 hover:bg-pink-500 hover:text-white transition-all transition-300 ease-in">Get started</a>
            </div>
        </div>

    </div> 
    )
}

export default Hero;