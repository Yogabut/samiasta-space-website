import Aos from 'aos';
import React, { useState, useEffect } from 'react';

const About = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }
);
    const [faq, setFaq] = useState([
        {
            question: 'What is PT Samiasta Space ?',
            answer: 'PT Samiasta Space is a professional company specializing in geospatial solutions, building permits, and land administration services. We help clients navigate spatial planning, infrastructure compliance, and regulatory approvals to support development and investment decisions.',
            open: false
        },
        {
            question: 'How our service works ?',
            answer: 'Our service begins with understanding your project needs, followed by detailed geospatial analysis, regulatory mapping, and technical consulting. We provide end-to-end support — from site assessment and documentation to permit processing — ensuring your project complies with local regulations and spatial planning requirements.',
            open: false
        },
        {
            question: 'What service we deliver to you ?',
            answer: 'At PT Samiasta Space, we provide integrated services that support land and building-related development. Our offerings include spatial suitability analysis (KKPR) for both business and non-business purposes, assistance in obtaining land certificates, and end-to-end support for building permits such as PBG and SLF. We also deliver geospatial data analysis, land use mapping, and investment advisory services tailored for land development. Through our expertise in geospatial technology and regulatory compliance, we ensure your projects are well-planned, legally sound, and aligned with spatial regulations.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }));
    }


    return (
        <section 
        className="relative py-10 sm:py-16 lg:py-24 min-h-screen" 
        id='about'
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
        >

            {/* Neon divider line on top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-200 h-1 bg-gradient-to-r from-black-800 via-blue-950 to-black-750 " />


            <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 
                        className="text-3xl font-bold leading-tight text-shadow-blue-500 sm:text-4xl lg:text-5xl animate-pulse"
                        style={{
                            textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
                            animation: 'flicker 4s infinite alternate'
                        }}
                    >
                        About Us
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 md:mt-16">
                    {faq.map((item, index) => (
                        <div 
                            key={index} 
                            className="mb-4 transition-all duration-300 bg-blue bg-opacity-95 border border-gray-300 cursor-pointer hover:bg-opacity-100 rounded-lg shadow-lg overflow-hidde"
                        >
                            <button 
                                type="button" 
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 focus:outline-none" 
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="flex text-lg font-semibold text-shadow-white text-left"> 
                                    {item.question} 
                                </span>
                                <svg 
                                    className={`w-6 h-6 text-gray-100 transition-transform duration-300 ${item.open ? 'rotate-180' : ''}`} 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                item.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6 border-t border-gray-200">
                                    <p 
                                        className="text-gray-100 pt-4"
                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-200 text-base mt-9">
                    Didn't find the answer you are looking for? 
                    <a href="#" title="" className="font-medium text-blue-400 transition-all duration-200 hover:text-blue-300 focus:text-blue-300 hover:underline ml-1">
                        Contact our support
                    </a>
                </p>
            </div>

            {/* Flicker animation keyframes */}
            <style>
                {`
                    @keyframes flicker {
                        0%, 100% { opacity: 1; text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff; }
                        50% { opacity: 0.7; text-shadow: 0 0 2px #0ff; }
                    }
                `}
            </style>
        </section>
    );
}

export default About;
