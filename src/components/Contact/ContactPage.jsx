import React from 'react';
import '../../index.css';

const ContactPage = () => {
    return (
        <div>
    <header class="w-full px-6 bg-white">
        <div class="container mx-auto max-w-4xl md:flex justify-between items-center">
            <a href="/" class="block py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center">
					Andy Senatro
				</a>
            <div class="w-full md:w-auto text-center md:text-right">
            </div>
        </div>
    </header>
    <nav class="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-300">
        <div class="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
            <div class="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
                <a href="index.html" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-300">Home</a>
                <a href="/about" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">About</a>
                <a href="blog-1.html" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Blog</a>
            </div>
            <div class="w-full md:w-1/2 text-center md:text-right">
            </div>
        </div>
    </nav>
    <div class="w-full bg-white">
        <div class="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
            <h1 class=" text-xl md:text-4xl pb-4">Contact Me</h1>
            <p class="leading-loose text-gray-dark">
                Contact me to schedule a personal or group session.
            </p>
        </div>
        <div class="container max-w-4xl mx-auto pb-10 px-12 md:px-0">

            <div class="flex flex-wrap justify-start items-start -mx-4">

                <div class="w-full md:w-1/2 p-4">

                    <form>
                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-dark pb-2">Name</label>
                            <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
                          <p class="text-xs pt-2 text-gray">This is some helper text...</p> 
                        </fieldset>

                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-dark pb-2">Email</label>
                            <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
                        </fieldset>

                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-dark pb-2">Message</label>
                            <textarea class="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"></textarea>
                            <p class="text-xs pt-2 text-red-400">This field is required...</p>
                        </fieldset>

                        <button class="text-sm py-2 px-3 bg-black text-white rounded">Submit</button>
                    </form>

                </div>

                <div class="w-full md:w-1/2 p-4">
                    <div class="overflow-hidden mb-6">
                        <img src="https://res.cloudinary.com/gearscloud/image/upload/q_auto:good/v1628440103/Yoga%20With%20Andi/andi-headshot_gvo3ql.webp" class="block w-96 h-96 object-cover mb-12" alt="andi senatro headshot"/>
                    </div>

                    <p class="text-black font-bold mb-1">
                        Yoga With Andi
                    </p>
                    <p class="text-sm mb-2">
                        Charlottesville VA.
                    </p>

                    <p class="text-black font-bold">fakeemail@fake.fake</p>
                </div>

            </div>

        </div>

    </div>
    <footer class="w-full bg-white px-6 border-t">
        <div class="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
            &copy;2021 Yoga With Andi. All rights reserved.
            <div class="pt-4 md:p-0 text-center md:text-right text-xs">
                <a href="contact-1.html" class="text-black no-underline hover:underline ml-4">Contact Me</a>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default ContactPage;