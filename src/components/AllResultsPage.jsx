"use client";

const AllResultsPage = () => {
  const allTeams = [
    {
      position: "1st Place",
      team: "Team Alpha",
      project: "AI-Powered Smart Assistant",
      score: 98,
    },
    {
      position: "2nd Place",
      team: "Innovators",
      project: "HealthTech Solution",
      score: 92,
    },
    {
      position: "3rd Place",
      team: "Tech Titans",
      project: "Smart Energy Manager",
      score: 88,
    },
    {
      position: "4th Place",
      team: "Code Warriors",
      project: "GameApp",
      score: 85,
    },
    {
      position: "5th Place",
      team: "Data Pioneers",
      project: "Data Analysis Tool",
      score: 80,
    },
    {
      position: "6th Place",
      team: "Visionary Coders",
      project: "AR Navigation",
      score: 78,
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
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-green-500 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          All Hackathon Results
        </h1>

        {/* Table Section */}
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Team</th>
                <th className="py-3 px-6 text-left">Project</th>
                <th className="py-3 px-6 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {allTeams.map((team, index) => (
                <tr
                  key={index}
                  className="bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
                >
                  {/* Position */}
                  <td className="py-4 px-6">
                    <div
                      className={`inline-block px-4 py-1 text-sm font-bold rounded-full ${getBadge(
                        team.position
                      )}`}
                    >
                      {team.position}
                    </div>
                  </td>

                  {/* Team */}
                  <td className="py-4 px-6 text-white">{team.team}</td>

                  {/* Project */}
                  <td className="py-4 px-6 text-gray-300">{team.project}</td>

                  {/* Score */}
                  <td className="py-4 px-6 text-right">
                    <span className="text-2xl font-extrabold text-green-400">
                      {team.score}
                    </span>
                    <span className="text-gray-400 ml-2">/ 100</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-8 py-3 rounded-md font-bold hover:from-blue-500 hover:to-green-400 transition"
          >
            Back to Hackathon Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllResultsPage;
