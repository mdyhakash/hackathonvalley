import React from "react";
import Link from "next/link";
const FeaturedHackathons = () => {
  const onlineHackathons = [
    {
      title: "Meta Horizon Creator Competition: Short Loop Mobile Worlds",
      timeLeft: "20 days left",
      location: "Online",
      prize: "$500,000 in prizes",
      participants: "374 participants",
    },
    {
      title: "RAG 'n' ROLL Amp up Search with Snowflake & Mistral",
      timeLeft: "about 2 months left",
      location: "Online",
      prize: "$10,000 in prizes",
      participants: "276 participants",
    },
    {
      title: "The DocuSign Hackathon: Unlocked",
      timeLeft: "Upcoming",
      location: "Online",
      prize: "$50,000 in prizes",
      participants: "314 participants",
    },
    {
      title: "Tableau DataDev 2024-2025 Hackathon",
      timeLeft: "3 months left",
      location: "Online",
      prize: "$1,800 in prizes",
      participants: "343 participants",
    },
  ];

  const inPersonHackathons = [
    {
      title: "HackUTD 2024: Ripple Effect",
      timeLeft: "about 11 hours left",
      location: "ECSW @ UT Dallas",
      prize: "$120,715 in prizes",
      participants: "994 participants",
    },
  ];

  const HackathonCard = ({ hackathon }) => (
    <div className="border border-gray-300 rounded-lg bg-white shadow-lg p-8  relative flex">
      <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-xs font-semibold rounded-tr-md rounded-bl-md">
        FEATURED
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{hackathon.title}</h3>
        <div className="mt-2 flex items-center space-x-2 text-sm text-green-600">
          <span className="px-2 py-1 bg-[#C2CE3B] text-green-800 rounded-md">
            {hackathon.timeLeft}
          </span>
          <span>{hackathon.location}</span>
        </div>
        <div className="mt-3 text-sm text-gray-600">
          <p>{hackathon.prize}</p>
          <p>{hackathon.participants}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="bg-gradient-to-b bg-green-100 py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Online Hackathons Section */}
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured online hackathons</h2>
        <a
          to="/"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Explore online hackathons
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {onlineHackathons.map((hackathon, index) => (
          <HackathonCard key={index} hackathon={hackathon} />
        ))}
      </div>
    </div>
  </div>
</div>

{/* In-Person Hackathons Section */}
<div className="py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Featured in-person hackathons</h2>
      <a
        href="#"
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Explore in-person hackathons
      </a>
    </div>
    <div className="grid grid-cols-1 gap-6">
      {inPersonHackathons.map((hackathon, index) => (
        <HackathonCard key={index} hackathon={hackathon} />
      ))}
    </div>
  </div>
</div>
</>
  );
};

export default FeaturedHackathons;
