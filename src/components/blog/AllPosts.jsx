import React from 'react';
import '../../index.css';
import Post from './Post';

const AllPosts = () => {
    return (
        <div className="w-full bg-white">
        <div className="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
            <h1 className=" text-xl md:text-4xl pb-4">Yoga With Andi Blog</h1>
            <p className="leading-loose text-gray-dark">
                My Thoughts on Yoga, Meditation, and A Life Well Lived
            </p>
            <div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">
                <div class="w-full md:pr-12 mb-12">
                    <Post/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AllPosts;