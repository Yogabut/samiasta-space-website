import React, { use } from 'react';
import { useEffect } from 'react';
import Aos from 'aos';

// Data function to hold card information
const getCardData = () => {
  return [
   {
    id: 1,
    title: "Land Investment Guaranty",
    description: "A legal assurance that provides security for investors in land development, ensuring their rights and interests are protected throughout the investment process.",
    imageUrl: "./guaranty.jpg",
    tags: ["Legal Protection", "Investment Security", "Land Ownership"],
    link: "#"
    },
    {
    id: 2,
    title: "KKPR (Non-Business)",
    description: "A spatial suitability permit granted for non-commercial activities, ensuring that land use complies with national and regional spatial planning regulations.",
    imageUrl: "./kkpr-nonusaha.jpg",
    tags: ["Spatial Planning", "Non-Commercial Use", "Land Regulation"],
    link: "#"
    },
    {
    id: 3,
    title: "KKPR (Business Use)",
    description: "A formal permit for land use suitability, required for businesses to ensure that development activities align with spatial regulations and land allocation plans.",
    imageUrl: "./kkpr-berusaha.jpg",
    tags: ["Business Licensing", "Land Suitability", "Spatial Compliance"],
    link: "#"
    },
    {
    id: 4,
    title: "PMDN (Domestic Investment)",
    description: "An investment made by domestic investors within the country’s territory, aimed at boosting local economic growth through business development and infrastructure.",
    imageUrl: "./pmdn.jpg",
    tags: ["Domestic Capital", "Economic Development", "Local Investment"],
    link: "#"
    },
    {
    id: 5,
    title: "KKPR (Foreign Investment)",
    description: "A permit that allows foreign investors (PMA) to use land in accordance with spatial plans, facilitating legal and sustainable investment in Indonesia.",
    imageUrl: "./kkpr-pma.jpg",
    tags: ["Foreign Direct Investment", "Land Compliance", "International Business"],
    link: "#"
    },
    {
    id: 6,
    title: "PBG & SLF",
    description: "PBG (Building Approval) and SLF (Feasibility Certificate) are mandatory documents for ensuring that construction meets safety, technical, and legal standards.",
    imageUrl: "./pbg-slf.jpg",
    tags: ["Construction Compliance", "Building Safety", "Urban Regulation"],
    link: "#"
    },
    {
    id: 7,
    title: "Land Administration",
    description: "The management and documentation of land ownership, including the issuance of land certificates, to ensure legal clarity, reduce conflicts, and support development.",
    imageUrl: "./land-administration.jpg",
    tags: ["Land Certification", "Property Rights", "Legal Land Use"],
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
const LandInvesment = () => {
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
                Land <br /> Invesment
            </h1>
            <p data-aos = 'zoom-in'>
                Land investment refers to the acquisition of land as a long-term financial asset, with the objective of generating profit through appreciation, leasing, or future development. This type of investment is often considered stable and low-risk, especially in areas with high growth potential. 
                Investors may choose to hold land for future resale at a higher price, lease it for agricultural or commercial use, or develop it into residential, industrial, or infrastructure projects.
            </p>
        </div>
      {cards.map((card) => (
        <Card key={card.id} card={card}/>
      ))}
    </div>
  );
};

export default LandInvesment;