"use client";
import Link from "next/link";

const ResultPage = () => {
  const results = [
    {
      position: "1st Place",
      team: "Team Alpha",
      project: "AI-Powered Smart Assistant",
      description:
        "An innovative AI assistant designed to simplify daily tasks and enhance productivity.",
      score: 98,
    },
    {
      position: "2nd Place",
      team: "Innovators",
      project: "HealthTech Solution",
      description:
        "A platform for tracking health metrics and improving patient care through technology.",
      score: 92,
    },
    {
      position: "3rd Place",
      team: "Tech Titans",
      project: "Smart Energy Manager",
      description:
        "A solution to optimize energy usage and reduce wastage in homes and offices.",
      score: 88,
    },
  ];

  const getBadge = (position) => {
    switch (position) {
      case "1st Place":
        return "bg-yellow-400 text-black";
      case "2nd Place":
        return "bg-gray-300 text-black";
      case "3rd Place":
        return "bg-orange-400 text-black";
      default:
        return "bg-gray-700 text-white";
    }
  };

  return (
    <div className="bg-black min-h-screen text-green-500 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Hackathon Results
        </h1>

        {/* Winners Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Congratulations to the Winners!
          </h2>
          <p className="text-gray-300 text-center mb-4">
            Thank you to all participants for showcasing incredible talent and
            innovation. Here are the top teams:
          </p>
        </div>

        {/* Results List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((team, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl hover:bg-gray-700 transition-transform transform hover:scale-105`}
            >
              {/* Position Badge */}
              <div
                className={`inline-block px-4 py-1 mb-4 text-sm font-bold rounded-full ${getBadge(
                  team.position
                )}`}
              >
                {team.position}
              </div>

              {/* Team Information */}
              <h2 className="text-2xl font-bold text-white mb-2">
                {team.team}
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                <span className="text-green-400">Project:</span> {team.project}
              </p>
              <p className="text-gray-300 mb-4">{team.description}</p>

              {/* Score */}
              <div className="text-right">
                <span className="text-3xl font-extrabold text-green-400">
                  {team.score}
                </span>
                <span className="text-gray-400 ml-2">/ 100</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/all-results"
            className="bg-green-500 text-black px-8 py-3 rounded-md font-bold hover:bg-green-600 transition"
          >
            View All Results
          </Link>
        </div>

        {/* Highlights Section */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Over 100 teams participated from across the globe.</li>
            <li>Top projects focused on AI, HealthTech, and Sustainability.</li>
            <li>
              Judges praised creativity, technical skills, and problem-solving.
            </li>
            <li>Special awards for Best Design and Best Use of Open Source.</li>
          </ul>
        </div>

        {/* Judges Section */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Meet the Judges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Jane Doe", "Dr. Alan Smith", "Emily Carter"].map(
              (judge, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-4 rounded-lg text-center shadow-md"
                >
                  <h3 className="text-md font-bold">{judge}</h3>
                  <p className="text-gray-300 text-sm">Expert in AI and Tech</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
