"use client"
import Image from "next/image"; 
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"; 


const teamDetails = {
  team: "Team Alpha",
  project: "AI-Powered Smart Assistant",
  description:
    "An innovative AI assistant designed to simplify daily tasks and enhance productivity.",
  members: [
    {
      name: "Alice Johnson",
      university: "Harvard University",
      age: 22,
      education: "Computer Science",
      role: "Team Leader",
      image: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
      facebook: "https://www.facebook.com/alicejohnson",
    },
    {
      name: "Bob Smith",
      university: "MIT",
      age: 23,
      education: "Electrical Engineering",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/bobsmith",
      github: "https://github.com/bobsmith",
      facebook: "https://www.facebook.com/bobsmith",
    },
    {
      name: "Charlie Lee",
      university: "Stanford University",
      age: 21,
      education: "Data Science",
      role: "AI Specialist",
      image: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/charlielee",
      github: "https://github.com/charlielee",
      facebook: "https://www.facebook.com/charlielee",
    },
    {
      name: "Dana White",
      university: "UC Berkeley",
      age: 22,
      education: "Product Design",
      role: "UX/UI Designer",
      image: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/danawhite",
      github: "https://github.com/danawhite",
      facebook: "https://www.facebook.com/danawhite",
    },
  ],
};

const TeamDetailsPage = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen text-green-500 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Team and Project Info */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
            {teamDetails.team}
          </h1>
          <p className="text-xl text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
            {teamDetails.project}
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
            {teamDetails.description}
          </p>
        </div>

        {/* Team Members Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-4s">
          <h3 className="text-3xl font-semibold text-white text-center mb-8">
            Team Members
          </h3>

          {/* Loop through each member and display their details one by one */}
          {teamDetails.members.map((member, index) => (
            <div
              key={index}
              className="mb-8 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-green-800 transform transition duration-500 ease-in-out">
                {/* Member Image (Next.js Image) */}
                <div className="relative w-24 h-24 mr-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md border-4 border-green-400 transform transition duration-300 ease-in-out hover:rotate-6"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-300">
                    <strong>University:</strong> {member.university}
                  </p>
                  <p className="text-gray-300">
                    <strong>Age:</strong> {member.age}
                  </p>
                  <p className="text-gray-300">
                    <strong>Education:</strong> {member.education}
                  </p>
                  <p className="text-gray-300">
                    <strong>Role:</strong> {member.role}
                  </p>
                </div>
                {/* Social Links */}
                <div className="flex flex-col justify-center items-center ml-6 space-y-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transform transition duration-300 ease-in-out"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transform transition duration-300 ease-in-out"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transform transition duration-300 ease-in-out"
                  >
                    <FaFacebook size={30} />
                  </a>
                </div>
              </div>
              {/* Divider between members */}
              {index < teamDetails.members.length - 1 && (
                <hr className="border-gray-600 my-6" />
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-8 py-3 rounded-md font-bold hover:from-blue-500 hover:to-green-400 transition"
          >
            Back to All Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsPage;
