import React from 'react';
import '../index.css';

function Navbar () {
    return (
        <header class="z-10 relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center">

        <p class="text-xl tracking-wider"><span class="hover:text-pink-400 transition-all transition-300 ease-in">Andi</span> <span class="hover:text-blue-400 transition-all transition-300 ease-in">Senatro</span></p>

        <ul class="hidden md:flex uppercase text-sm text-gray-500">
            <li>
                <a href="#home" class="text-white focus:ring-blue-400 hover:text-blue-400">Home</a>
            </li>
            <li class="ml-6 focus:ring-blue-400 hover:text-blue-400">
                <a href="#private-sessions">Private Sessions
                </a>
            </li>
            <li class="ml-6 focus:ring-blue-400 hover:text-blue-400">
                <a href="blog-1.html">Blog</a>
            </li>
            <li class="ml-6 focus:ring-blue-400 hover:text-blue-400">
                <a href="contact-1.html">Contact</a>
            </li>
        </ul>

    </header>
    )
}

export default Navbar;