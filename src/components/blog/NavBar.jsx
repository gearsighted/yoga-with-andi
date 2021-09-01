import React from 'react';
import '../../index.css';

const NavBar = () => {
    return (
        <nav class="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light">
            <div class="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
                <div class="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start        md:items-start">
                    <a href="index.html" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Home</a>
                    <a href="index.html" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Book Private Session</a>
                    <a href="contact-1.html" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-darkest no-underline">Contact</a>
                </div>
                <div class="w-full md:w-1/2 text-center md:text-right">
                </div>
            </div>
        </nav>
    )
}

export default NavBar;