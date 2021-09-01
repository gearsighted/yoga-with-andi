import React from 'react';
import '../../index.css';


const Post = () => {
    return (
        <article class="mb-12">
                    <h2 class="mb-4">
                        <a href="#" class="text-black text-xl md:text-2xl no-underline hover:underline">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</a>
                    </h2>

                    <div class="mb-4 text-sm text-gray-700">
                        by <a href="#" class="text-gray-700">Joe Bloggs</a> on 19th March 2019
                        <span class="font-bold mx-1"> | </span>
                        <a href="#" class="text-gray-700">Uncategorised</a>
                        <span class="font-bold mx-1"> | </span>
                        <a href="#" class="text-gray-700">2 Comments</a>
                    </div>

                    <p class="text-gray-700 leading-normal">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </article>
    )
}

export default Post;