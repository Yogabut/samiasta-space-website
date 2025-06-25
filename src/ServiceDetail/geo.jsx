import React, { use } from 'react';
import { useEffect } from 'react';
import Aos from 'aos';

// Data function to hold card information
const getCardData = () => {
  return [
    {
      id: 1,
      title: "Suitability Invesment",
      description: "A method used to evaluate how appropriate a specific location is for investment based on various factors such as land use, environmental conditions, accessibility, and infrastructure.",
      imageUrl: "./suitability.jpg",
      tags: ["Investment Analysis", "Land Use Planning", "Site Selection"],
      link: "#"
    },
    {
      id: 2,
      title: "Economic Impact",
      description: "The effect of a project, policy, or event on the economy of a specific area, typically measured by changes in income, employment, business growth, or GDP.",
      imageUrl: "./economic.jpg",
      tags: ["Economic Development", "Employment Effects" ,"Regional Growth"],
      link: "#"
    },
    {
      id: 3,
      title: "Waste Management",
      description: "The process of collecting, transporting, processing, and disposing of waste materials in a way that minimizes environmental and health risks.",
      imageUrl: "./waste.jpg",
      tags: ["Environmental Sustainability", "Waste Reduction", "Recycling Systems"],
      link: "#"
    },
    {
      id: 4,
      title: "Infrastructure and Transportation",
      description: "The physical systems and networks (such as roads, bridges, railways, and ports) that support the movement of people and goods efficiently across regions.",
      imageUrl: "./infrastructure.jpg",
      tags: ["Mobility", "Public Infrastructure", "Transport Networks"],
      link: "#"
    }
  ];
};


// Card component
const Card = ({ card }) => {
  return (
    <a 
      className="group flex flex-col focus:outline-hidden" 
      href={card.link}
      onClick={(e) => {
        e.preventDefault();
        console.log(`Clicked on ${card.title}`);
      }}
      data-aos='fade-right'
    >
      <div className="relative w-full h-120 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
        <img 
          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl w-full h-full" 
          src={card.imageUrl} 
          alt={`${card.title} Image`}
        />
      </div>

      <div className="pt-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-10 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          {card.title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          {card.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {card.tags.map((tag, index) => (
            <span 
              key={index}
              className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

// Main CardGrid component
const GeoDecisionModel = () => {
   useEffect(() => {
    Aos.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
        });
    }, []);
  const cards = getCardData();

  return (
    <div className="py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 pt-30 pl-10 pr-10">
         <div className="flex flex-col items-start text-white space-y-6 max-w-xl pl-5 pt-18">
            <h1 
            className="text-5xl md:text-7xl font-serif text-white leading-tight"
            data-aos = 'fade-up'
            >
                 Geo<br />
                Decision Model
            </h1>
            <p data-aos = 'zoom-in'>
                Geo Decision Model is a geospatial-based decision-making model used to assist in the process of selecting the best alternative by considering geographic location factors. This model combines spatial (location) data and decision analysis methods to support more informative and precise decision making, especially when location or geographical conditions are important factors.
            </p>
        </div>
      {cards.map((card) => (
        <Card key={card.id} card={card}/>
      ))}
    </div>
  );
};

export default GeoDecisionModel;