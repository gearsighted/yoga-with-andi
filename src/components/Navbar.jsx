import React from 'react';
import '../index.css';
import {
    BrowserRouter as Router,
    NavLink,
  } from "react-router-dom";

function Navbar () {
    return (
        <header class="z-10 relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center">

        <p class="text-xl tracking-wider"><span class="hover:text-pink-400 transition-all transition-300 ease-in">Andi</span> <span class="hover:text-blue-400 transition-all transition-300 ease-in">Senatro</span></p>

        <Router>
        <ul class="hidden md:flex uppercase text-sm text-gray-500">
            <li>
            <NavLink to="/" activeClassName="selected" className="text-white focus:ring-blue-400 hover:text-blue-400">
            Home
            </NavLink>
            </li>
            <li>
            <a href="#private-classes" className="ml-6 focus:ring-blue-400 hover:text-blue-400">
            Schedule A Session
            </a>
            </li>
            <li>
            <NavLink to="/blog" class="ml-6 focus:ring-blue-400 hover:text-blue-400">
            Blog
            </NavLink>
            </li>
            <li>
            <NavLink to="/contact" class="ml-6 focus:ring-blue-400 hover:text-blue-400">
             Contact
            </NavLink>
            </li>
        </ul>
        </Router>

    </header>
    )
}

export default Navbar;