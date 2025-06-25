import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from '../../particles';
import Globe from './svg';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id='home'>
            {/* Background Particle Animation */}
            <div className="fixed inset-0 z-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h1 
                            className="font-sans text-base font-normal tracking-tight text-white text-opacity-70"
                            data-aos="fade-right"
                        >
                            Master of Geographic Information System
                        </h1>
                        <p 
                            className="mt-6 tracking-tighter text-white"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <span className="font-sans font-normal text-5xl lg:text-7xl">The ways to the</span><br />
                            <span className="font-serif italic font-normal text-6xl lg:text-8xl">Anyway</span>
                        </p>
                        <p 
                            className="mt-10 font-sans text-base font-normal leading-7 text-white text-opacity-70"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            PT Samiasta Space is your trusted partner in Geographic Information Systems (GIS) and land permit management. Combining advanced technology with expert insight, we streamline your land-related processes with speed, accuracy, and reliability.
                        </p>
                        <p 
                            className="mt-8 font-sans text-xl font-normal text-white"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            Discuss your universe you wanted to build.
                        </p>

                        <div 
                            className="flex flex-col sm:flex-row items-start sm:items-center mt-5 space-y-3 sm:space-y-0 sm:space-x-4"
                        >
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                Get started
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-white hover:bg-white hover:text-black sm:text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                                data-aos = "fade-left"
                                data-aos-delay="400"
                            >
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Watch our profile
                            </a>
                        </div>
                    </div>

                    {/* Right SVG Element */}
                    <div 
                        className="order-1 lg:order-2 flex items-center justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
