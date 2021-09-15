import '../../index.css'
import React, { useEffect, useState } from "react";
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

export default function BlogPage() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
        <BlogHeader/>
        <div className="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">
        {allPostsData &&
          allPostsData.map((post, index) => (<Link to={"/" + post.slug.current} key={post.slug.current}>
          <span key={index}>
            <img src={post.mainImage.asset.url} alt="" />
            <span>
              <h2>{post.title}</h2>
            </span>
          </span>
        </Link>
      ))}
  </div>
  <BlogFooter/>
</div>

            // <div className="w-full md:pr-12 mb-12">
            //   <span key={index}>
            //     <img src={post.mainImage.asset.url} alt="" />
            //    </span>
            //     <article className="mb-12">
                    
            //         <Link to={"/" + post.slug.current} key={post.slug.current} className="text-black text-xl md:text-2xl no-underline hover:underline">
            //         <h2 className="mb-4"> {post.title} </h2>
            //         </Link>
            //       <div className="mb-4 text-sm text-gray-700">
            //             by <Link to="#" className="text-gray-700">{post.author}</Link> on 19th March 2019
            //             <span className="font-bold mx-1"> | </span>
            //             <Link to={post.category} className="text-gray-700">Uncategorised</Link>
            //         </div>
            //         <p className="text-gray-700 leading-normal">
            //             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            //             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            //         </p>
            //     </article>  
            //     </div>  
  );
}

    
   
    


   



        {/* <div className="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">

            <div className="w-full md:pr-12 mb-12">
                <article className="mb-12">
                    <h2 className="mb-4">
                        <a href="" className="text-black text-xl md:text-2xl no-underline hover:underline">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</a>
                    </h2>

                    <div className="mb-4 text-sm text-gray-700">
                        by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">Uncategorised</a>
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">2 Comments</a>
                    </div>

                    <p className="text-gray-700 leading-normal">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </article>

                <article className="mb-12">
                    <h2 className="mb-4">
                        <a href="#" className="text-black text-xl md:text-2xl no-underline hover:underline">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</a>
                    </h2>

                    <div className="mb-4 text-sm text-gray-700">
                        by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">Uncategorised</a>
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">2 Comments</a>
                    </div>

                    <p className="text-gray-700 leading-normal">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </article>

                <article className="mb-12">
                    <h2 className="mb-4">
                        <a href="#" className="text-black text-xl md:text-2xl no-underline hover:underline">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</a>
                    </h2>

                    <div className="mb-4 text-sm text-gray-700">
                        by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">Uncategorised</a>
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">2 Comments</a>
                    </div>

                    <p className="text-gray-700 leading-normal">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </article>

                <article className="mb-12">
                    <h2 className="mb-4">
                        <a href="#" className="text-black text-xl md:text-2xl no-underline hover:underline">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</a>
                    </h2>

                    <div className="mb-4 text-sm text-gray-700">
                        by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">Uncategorised</a>
                        <span className="font-bold mx-1"> | </span>
                        <a href="#" className="text-gray-700">2 Comments</a>
                    </div>

                    <p className="text-gray-700 leading-normal">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </article>

                <div className="flex justify-between text-xs">
                    <a href="#" className="bg-gray text-white no-underline py-2 px-3 rounded">Previous</a>
                    <a href="#" className="bg-black text-white no-underline py-2 px-3 rounded">Next</a>
                </div>
            </div>
            <div className="w-full md:w-64">

                <aside className="rounded shadow overflow-hidden mb-6">
                    <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Categories</h3>

                    <div className="p-4">
                        <ul className="list-reset leading-normal">
                            <li><a href="#" className="text-gray-darkest text-sm">Yoga</a></li>
                            <li><a href="#" className="text-gray-darkest text-sm">Meditation</a></li>
                            <li><a href="#" className="text-gray-darkest text-sm">Lifestyle</a></li>
                        </ul>
                    </div>
                </aside>

                <aside className="rounded shadow overflow-hidden mb-6">
                    <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Latest Posts</h3>

                    <div className="p-4">
                        <ul className="list-reset leading-normal">
                            <li><a href="#" className="text-gray-darkest text-sm">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="#" className="text-gray-darkest text-sm">Sit amet, consectetur adipisicing elit.</a></li>
                            <li><a href="#" className="text-gray-darkest text-sm">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="#" className="text-gray-darkest text-sm">Sit amet, consectetur adipisicing elit.</a></li>
                        </ul>
                    </div>
                </aside>

            </div>

        </div> */}


