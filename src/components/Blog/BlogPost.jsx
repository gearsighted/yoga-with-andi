import React from 'react';

const Blogpost = () => {
    return(
        <div>
        <header className="w-full px-6 bg-white">
            <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
                <a href="/" className="block py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center">
                        Single Blog Post
                    </a>
                <div className="w-full md:w-auto text-center md:text-right">
                </div>
            </div>
        </header>
        <nav className="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light">
            <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
                <div className="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
                    <a href="/" className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Home</a>
                    <a href="/" className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Book Private Session</a>
                    <a href="/contact" className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-darkest no-underline">Contact</a>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-right">
                </div>
            </div>
        </nav>
        <div className="w-full bg-white">
    
            <div className="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
                <h1 className=" text-xl md:text-4xl pb-4">Yoga With Andi Blog</h1>
                <p className="leading-loose text-gray-dark">
                    My Thoughts on Yoga, Meditation, and A Life Well Lived
                </p>
            </div>
            </div>


   
    <footer className="w-full bg-white px-6 border-t">
        <div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
            &copy;2021 Yoga With Andi. All rights reserved.
            <div className="pt-4 md:p-0 text-center md:text-right text-xs">
                <a href="contact-1.html" className="text-black no-underline hover:underline ml-4">Contact Me</a>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default Blogpost;