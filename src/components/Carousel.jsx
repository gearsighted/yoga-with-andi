import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';
import '../styles/carousel.css';
import Slider from "react-slick";

function Carousel(props) {

let classes = props.classes;

    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      className: 'react__slick__slider__parent',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    return (
      <div className="" id="classes">    
      <Slider {...settings}>
        {classes.map((c) => (
           <div className=" w-full md:w-2/5 p-4 mb-12">
           <h2 className="block text-2xl text-black text-center mb-2">{c.name}</h2>
           <div className="flex justify-center items-center">
               <img src={c.image} className="block w-80 h-80 object-cover mb-5 rounded" alt={c.altImage}/>
           </div>
           <p className="mb-6 mx-auto text-gray-600 text-center leading-relaxed text-sm w-3/4 md:w-1/2">{c.description}
           </p>
           <p className="mb-6 mx-auto text-gray-600 text-center leading-relaxed text-sm w-3/4 md:w-1/2">{c.time}</p>
           <div className="flex justify-center items-center">
               <a href="contact-1.html" className="rounded-md bg-blue-400 font-normal py-4 px-8 hover:bg-pink-500 hover:text-white transition-all transition-300 ease-in">Schedule A Session</a>
           </div>
       </div>
        ))}
      </Slider>
      </div>
    );
  }
  
  export default Carousel;
  