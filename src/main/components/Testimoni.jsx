import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import Aos from 'aos';

// Function untuk menampung data testimonial
const getTestimonialData = () => {
    return [
        {
            id: 1,
            rating: 5,
            quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
            name: "Leslie Alexander",
            position: "Freelance React Developer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
        },
        {
            id: 2,
            rating: 5,
            quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
            name: "Jacob Jones",
            position: "Digital Marketer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
        },
        {
            id: 3,
            rating: 5,
            quote: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
            name: "Jenny Wilson",
            position: "Graphic Designer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
        },
        {
            id: 4,
            rating: 4,
            quote: "Great experience overall. The team was helpful and the product does what it promises.",
            name: "Michael Scott",
            position: "Regional Manager",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
        },
        {
            id: 5,
            rating: 5,
            quote: "A masterpiece of design and usability. I use it daily and it keeps getting better.",
            name: "Pam Beesly",
            position: "UI/UX Designer",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
        },
        {
            id: 6,
            rating: 4,
            quote: "Good service and intuitive interface. Still some room for improvement but overall satisfied.",
            name: "Jim Halpert",
            position: "Sales Executive",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
        },
        {
            id: 7,
            rating: 5,
            quote: "Amazing support and fast turnaround time. Would definitely recommend to my peers.",
            name: "Dwight Schrute",
            position: "Assistant to the Regional Manager",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
        }
    ];
};

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-[#FDB241]' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-xl min-w-[300px] max-w-sm mx-4">
            <div className="flex flex-col justify-between flex-1 p-6 bg-[#020246] hover:bg-[#05025f] rounded-2xl lg:py-8 lg:px-7 transition duration-300 min-h-[320px]">
                <div className="flex-1">
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-200 font-pj">
                            "{testimonial.quote}"
                        </p>
                    </blockquote>
                </div>
                <div className="flex items-center mt-8">
                    <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                    />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-100 font-pj">
                            {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-300">
                            {testimonial.position}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main 
const Testimonial = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, 
            once: true, 
            easing: 'ease-in-out', 
        });
    }, []);
    const testimonials = getTestimonialData();
    const totalReviews = 7;

    return (
        <section className="py-12 sm:py-16 lg:py-20" id='testimonial'>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p
                        lassName="text-lg font-medium text-gray-200 font-pj"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        >
                            {totalReviews.toLocaleString()} people have said how good Rareblocks
                        </p>
                        <h2 
                        className="mt-4 text-3xl font-bold text-gray-100 sm:text-4xl xl:text-5xl font-serif font-pj"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                            Our happy clients say about us
                        </h2>
                    </div>


                    {/* Marquee Section */}
                    <div className="relative mt-10 md:mt-24 w-full">
                        <Marquee gradient={false} speed={45} pauseOnHover={true}>
                            {testimonials.map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </Marquee>
                    </div>

                    <div 
                    className="mt-8 text-center md:mt-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300">
                        <a
                            href="#"
                            className="pb-2 text-base font-bold leading-7 text-gray-500 transition-all duration-200 border-b-2 border-gray-800 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 hover:text-gray-600"
                        >
                            Check all {totalReviews.toLocaleString()} reviews
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
