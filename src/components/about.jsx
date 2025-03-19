import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import LageMat from "../assets/IMG_0724 (1).jpg";
import Cooking from "../assets/POP-UP.jpg";  
import Restaurant from "../assets/cateringSamosa.png";  
import Catering from "../assets/catering-pakket.jpg"

const About = () => {
    // Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
    };

    return (
        <section className="py-6 px-6 md: flex flex-col md:flex-row items-center gap-12 w-full bg-[#F5E9E2] max-w-7xl mx-auto">
            {/* 🔥 Smooth Image Carousel */}
            <motion.div 
                className="w-full rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <Slider {...settings}>
                    <img src={LageMat} alt="Cooking" className="w-full h-[600px] object-cover rounded-lg" />
                    <img src={Cooking} alt="Cooking" className="w-full h-[600px] object-cover rounded-lg" />
                    <img src={Restaurant} alt="Restaurant" className="w-full h-[600px] object-cover rounded-lg" />
                    <img src={Catering} alt="Restaurant" className="w-full h-[600px] object-cover rounded-lg" />
                </Slider>
            </motion.div>

            {/* 🔥 Text Content with Animation */}
            <motion.div 
                className="text-center md:text-left w-full"
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-4xl font-bold text-[#B05C40]" style={{ fontFamily: '"Rubik Dirt", cursive' }} >ABOUT</h2>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    The Burmese kitchen can best be described as a delightful mix of well-known 
                    Asian cuisines such as Thai, Chinese, and Indian.  
                    We serve <span className="text-[#B05C40] font-semibold">homemade Burmese food</span>, 
                    based on mom's recipes.
                </p>
            </motion.div>
        </section>
    );
};

export default About;