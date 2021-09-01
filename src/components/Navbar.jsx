import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <header class="z-10 relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center">

        <p class="text-xl tracking-wider"><span class="hover:text-pink-400 transition-all transition-300 ease-in">Andi</span> <span class="hover:text-blue-400 transition-all transition-300 ease-in">Senatro</span></p>

        <ul class="hidden md:flex uppercase text-sm text-gray-500">
            <li>
                <Link to="/" className="text-white focus:ring-blue-400 hover:text-blue-400">Home</Link>
            </li>
            <li class="ml-6 mr-6 focus:ring-blue-400 hover:text-blue-400">
                <a href="#classes">Schedule a Class
                </a>
            </li>
            <li>
                <Link to="/blog" className="text-white focus:ring-blue-400 hover:text-blue-400">Blog</Link>
            </li>
            <li class="ml-6 focus:ring-blue-400 hover:text-blue-400">
            <Link to="/contact" className="text-white focus:ring-blue-400 hover:text-blue-400">Contact</Link>
            </li>
        </ul>

    </header>
    )
}

export default Navbar;