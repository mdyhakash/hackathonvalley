"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HackathonDetails = () => {
  const sponsors = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Apple_logo_black.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((prevScroll) => prevScroll + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-500 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Image Section */}
        <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg mb-6">
          <Image
            src="" 
            alt="Hackathon Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Welcome to Hackathon Valley
            </h2>
            <p className="text-lg sm:text-xl mb-4">
              Join the innovative event of the year! Collaborate, create, and
              showcase your skills.
            </p>
          </div>
        </div>

        {/* Sponsor Slider Section */}
        <div className="m-10">
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">
            Our Sponsors
          </h2>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex animate-scroll"
              style={{
                transform: `translateX(-${scroll}px)`,
                transition: "transform 0s linear",
              }}
            >
              {sponsors.concat(sponsors).map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 w-32 mx-6">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon Details Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Hackathon Valley!
          </h2>
          <p className="text-gray-300 mb-4">
            Join us for an exciting journey of innovation and collaboration.
            This hackathon is designed to bring the best ideas to life with
            support from mentors, amazing resources, and prizes.
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Event Date:</strong> December 15, 2024
            </li>
            <li>
              <strong>Duration:</strong> 48 Hours
            </li>
            <li>
              <strong>Location:</strong> Online and Offline (Hybrid)
            </li>
            <li>
              <strong>Theme:</strong> Tech for Good
            </li>
          </ul>
        </div>

        {/* More Hackathon Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">
              Networking Opportunities
            </h3>
            <p className="text-gray-300">
              Connect with industry leaders, fellow innovators, and
              entrepreneurs during our networking events.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">
              Mentorship
            </h3>
            <p className="text-gray-300">
              Gain valuable insights from experienced mentors who will guide you
              through the hackathon journey.
            </p>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Important Dates
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Registration Deadline:</strong> December 1, 2024
            </li>
            <li>
              <strong>Hackathon Starts:</strong> December 15, 2024
            </li>
            <li>
              <strong>Hackathon Ends:</strong> December 17, 2024
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button className="bg-green-500 text-black px-6 py-2 rounded-md font-bold hover:bg-green-600 transition">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails;
