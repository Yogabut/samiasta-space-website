import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Aos from "aos";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Data projects - Anda bisa mengganti dengan data real
    const projects = [
        {
            id: 1,
            title: "Perizinan Tanah Pererenan",
            description: "PT Samiasta Space telah mengerjakan sebuah kasus yang dimana menyangkut perizinan tanah yang memiliki permasalahan pada lokasi tertentu.",
            image: "./GIS.jpeg"
        },
        {
            id: 2,
            title: "Pembangunan Kompleks Perumahan",
            description: "Proyek pembangunan kompleks perumahan modern dengan fasilitas lengkap yang berlokasi di area strategis kota.",
            image: "./GIS2.jpeg"
        },
        {
            id: 3,
            title: "Konsultasi Hukum Properti",
            description: "Layanan konsultasi hukum properti untuk berbagai kasus kepemilikan tanah dan sengketa properti.",
            image: "./GIS3.jpeg"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    // Auto slide (opsional)
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    return (
       <section id="projects">
             <div className="w-full max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div 
                className="text-center mb-12"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1000"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 font-serif">
                        Projects
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto font-sans">
                        PT Samiasta Space memiliki projects yang telah dikerjakan.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative  rounded-lg shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between p-8 md:p-12">
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[02022c] hover:bg-blue-700 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-100" />
                        </button>

                        {/* Content */}
                        <div className="w-full mx-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Left Column - Image */}
                                <div 
                                className="order-2 md:order-1"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="500"
                                >
                                    <div className="bg-[#05025f] rounded-lg p-8 flex items-center justify-center h-64 md:h-80 shadow-2xl">
                                        {/* Placeholder Image - Ganti dengan image real */}
                                        <div className="w-full h-full bg-[#0d0536] rounded-lg flex items-center justify-center border-1 border-gray-200">
                                            <div className="text-center">
                                                <img
                                                    src={projects[currentIndex].image}
                                                    alt={projects[currentIndex].title}
                                                    className="w-full h-full object-cover"
                                                    style={{ maxHeight: '300px', maxWidth: '100%' }}
                                                    > 
                                                </img>
                                                <div className="flex space-x-2 justify-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Project Info */}
                                <div className="order-1 md:order-2">
                                    <h2 
                                    className="text-2xl md:text-3xl font-bold text-gray-200 mb-4"
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                    >
                                        {projects[currentIndex].title}
                                    </h2>
                                    <p 
                                    className="text-gray-100 text-lg leading-relaxed mb-6"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    >
                                        {projects[currentIndex].description}
                                    </p>
                                    <button 
                                    className="bg-blue-600 hover:bg-[#ffa47a] text-gray-100 px-6 py-3 rounded-full font-medium font-sans transition-colors duration-200"
                                    data-aos="fade-up"
                                    data-aos-delay="200">
                                        see project 
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[02022c] hover:bg-blue-700 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-100" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 pb-6">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                    index === currentIndex 
                                        ? 'bg-gray-800' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Project Counter */}
                <div className="text-center mt-6 text-gray-500">
                    {currentIndex + 1} / {projects.length}
                </div>
            </div>
       </section>
    );
};

export default Projects;