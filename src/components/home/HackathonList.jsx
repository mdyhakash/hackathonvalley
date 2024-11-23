import Image from "next/image";
import Link from "next/link";

const HackathonList = () => {
  const hackathons = [
    {
      title: "Google Chrome Built-in AI Challenge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      timeLeft: "17 days left",
      location: "Online",
      prize: "$65,000 in prizes",
      participants: "5948 participants",
    },
    {
      title: "Codegeist 2024",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      timeLeft: "24 days left",
      location: "Online",
      prize: "$170,000 in prizes",
      participants: "2358 participants",
    },
    {
      title: "Google Photorealistic 3D Maps Challenge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      timeLeft: "4 days left",
      location: "Online",
      prize: "$26,000 in prizes",
      participants: "1714 participants",
    },
    {
      title: "AWS Game Builder Challenge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      timeLeft: "about 2 months left",
      location: "Online",
      prize: "$80,000 in prizes",
      participants: "1045 participants",
    },
  ];

  const teams = [
    {
      team: "Artificial Intelligence Team",
      hackathons: 32,
      university: "Stanford University",
    },
    {
      team: "Data Science Pioneers",
      hackathons: 28,
      university: "Harvard University",
    },
    { team: "Tech Innovators", hackathons: 40, university: "MIT" },
    {
      team: "Social Impact Group",
      hackathons: 25,
      university: "University of California, Berkeley",
    },
    {
      team: "Cybersecurity Experts",
      hackathons: 22,
      university: "University of Cambridge",
    },
    {
      team: "Robotics Squad",
      hackathons: 18,
      university: "Carnegie Mellon University",
    },
    { team: "Blockchain Developers", hackathons: 30, university: "ETH Zurich" },
  ];

  return (
    <div className="bg-gray-900 mt-12 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Section */}
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-green-500 tracking-wide">
              Hackathons for You
            </h2>
            <Link
              href="/"
              className="text-green-400 text-sm font-medium hover:text-green-300 transition-all"
            >
              Edit Recommendations
            </Link>
          </div>
          <div className="space-y-10">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800 border border-green-600 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-gray-700"
              >
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-lg object-contain border border-gray-700"
                />
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-semibold text-green-400">
                    {hackathon.title}
                  </h3>
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-400">
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                      {hackathon.timeLeft}
                    </span>
                    <span>{hackathon.location}</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-300 space-y-1">
                    <p>{hackathon.prize}</p>
                    <p>{hackathon.participants}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-green-500 tracking-wide">
            Top Hackathon Teams
          </h2>
          <table className="mt-8 w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-gray-100 text-sm ">
              <tr>
                <th className="py-4 px-6 text-center">Team</th>
                <th className="py-4 px-6 text-center">Hackathons</th>
                <th className="py-4 px-6 text-center">University</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className={`border-t border-green-700 text-center ${
                    index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                  } hover:bg-green-500 hover:text-white transition-all`}
                >
                  <td className="py-4 px-6">{team.team}</td>
                  <td className="py-4 px-6">{team.hackathons}</td>
                  <td className="py-4 px-6">{team.university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HackathonList;
