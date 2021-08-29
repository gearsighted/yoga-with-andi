import React from 'react';
import '../index.css';

function About () {
    return (
        <section className="flex justify-between align-center flex-col md:flex-row bg-gray-400 text-white">
            <div id="about-text" className="flex justify-center items-center w-full md:w-50% p-10">
                <p className="font-light text-3xl max-w-2xl text-center">Andi Senatro is a Certified Yoga Teacher in the  Charlottesville, VA area. Andi completed her 230-hour yoga teacher training at Asheville Yoga Center in Asheville, NC. She has been practicing yoga for 10 years and believes in the power yoga possesses to help everyone grow stronger physically, mentally, and spiritually.</p>
            </div>

            <div id="about-image" className=" md:w-50% order-first md:order-last md:mr-20 p-10">
                <img src="https://res.cloudinary.com/gearscloud/image/upload/q_auto:good/v1628440103/Yoga%20With%20Andi/andi-headshot_gvo3ql.webp" alt="Andi Senatro Portrait" className=" rounded-lg drop-shadow-lg"></img>
                </div>

        </section>
    )
}

export default About;  