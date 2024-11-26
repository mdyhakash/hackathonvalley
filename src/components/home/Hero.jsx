"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const eventsData = [
  {
    title: "Upcoming: Google AI Hackathon",
    description: "Join us to create AI-driven solutions. Big prizes await!",
    date: "Dec 5, 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  },
  {
    title: "Ongoing: Codegeist 2024",
    description: "Collaborate with top developers worldwide!",
    date: "Nov 20, 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    title: "Recent: Meta Virtual World Challenge",
    description: "Shape the future of VR with groundbreaking projects.",
    date: "Oct 15, 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % eventsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-dark text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-center text-green-400 animate__animated animate__fadeIn">
          Welcome to Our Hackathon Valley
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-center text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
          Join the innovative event of the year! Collaborate, create, and
          showcase your skills.
        </p>

        {/* Slider */}
        <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-60"></div>

          {/* Background Image */}
          <div
            className="absolute opacity-45 inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
              backgroundImage: `url(${eventsData[currentSlide].image})`,
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat", 
            }}
          ></div>

          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-full max-w-3xl text-center px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn">
                {eventsData[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-300 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                {eventsData[currentSlide].description}
              </p>
              <p className="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
                {eventsData[currentSlide].date}
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {eventsData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full bg-white cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-green-500 scale-125"
                    : "bg-opacity-50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Buttons - Placed below the slider */}
      <div className="flex justify-center space-x-4 z-20 mb-4 px-6 mt-8">
        <button
          onClick={() => alert("Redirecting to Registration Page")}
          className="text-white px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full shadow-md transform hover:scale-105 transition-all"
        >
          Register Now
        </button>
        <Link
          href="/hackathon-details"
          className="text-white px-6 py-2 bg-transparent border-2 border-white hover:bg-green-700 hover:text-white rounded-full shadow-md transform hover:scale-105 transition-all"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
