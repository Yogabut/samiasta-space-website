import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "../../components/SpotlightCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    const services = [
        {
            id: 1,
            title: "Geo Decision Model",
            description: "Advanced geospatial analysis and decision-making tools that help organizations make data-driven choices based on location intelligence and spatial relationships.",
            color: "rgba(59, 130, 246, 0.4)" // Blue
        },
        {
            id: 2,
            title: "Land Investment",
            description: "Strategic land investment consulting services that leverage market analysis, zoning regulations, and development potential to maximize your property portfolio returns.",
            color: "rgba(16, 185, 129, 0.4)" // Green
        },
        {
            id: 3,
            title: "Optimasi Pendapatan Daerah",
            description: "Comprehensive regional revenue optimization strategies that enhance local government income through improved tax collection, asset management, and economic development.",
            color: "rgba(245, 158, 11, 0.4)" // Yellow
        }
    ];

    return (
        <section id="service" className="py-16 px-4">
            <style jsx>{`
                .learn-more-btn {
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .learn-more-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s;
                }
                .learn-more-btn:hover::before {
                    left: 100%;
                }
                .learn-more-btn:hover {
                    transform: translateX(5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }
            `}</style>

            <div className="max-w-6xl mx-auto relative">
                {/* Neon divider line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-200 h-1 bg-gradient-to-r from-black-800 via-blue-950 to-black-750 " />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative h-full pt-30">
                    {/* Heading */}
                    <div data-aos="fade-up" className="flex items-center">
                        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                            Our<br />
                            Services
                        </h1>
                    </div>

                    {/* Card 1 */}
                    <div data-aos="fade-right" data-aos-delay="100">
                        <SpotlightCard className="custom-spotlight-card h-full" spotlightColor={services[0].color}>
                            <div className="card-content p-8 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {services[0].title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {services[0].description}
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="/geo-decision-model">
                                        <button className="learn-more-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium">
                                            Learn More
                                            <ArrowRight size={18} />
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Card 2 */}
                    <div data-aos="fade-left" data-aos-delay="200">
                        <SpotlightCard className="custom-spotlight-card h-full" spotlightColor={services[1].color}>
                            <div className="card-content p-8 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {services[1].title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {services[1].description}
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="/land-invesment">
                                        <button className="learn-more-btn bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium">
                                            Learn More
                                            <ArrowRight size={18} />
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Card 3 */}
                    <div data-aos="fade-right" data-aos-delay="300">
                        <SpotlightCard className="custom-spotlight-card h-full" spotlightColor={services[2].color}>
                            <div className="card-content p-8 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {services[2].title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {services[2].description}
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="/optimalisasi-pendapatan-daerah">
                                        <button className="learn-more-btn bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium">
                                            Learn More
                                            <ArrowRight size={18} />
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
