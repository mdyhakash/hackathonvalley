import React from "react";

const HackathonList = () => {
  const hackathons = [
    {
      title: "Google Chrome Built-in AI Challenge",
      image: "your-image-url-here",
      timeLeft: "17 days left",
      location: "Online",
      prize: "$65,000 in prizes",
      participants: "5948 participants",
    },
    {
      title: "Codegeist 2024",
      image: "your-image-url-here",
      timeLeft: "24 days left",
      location: "Online",
      prize: "$170,000 in prizes",
      participants: "2358 participants",
    },
    {
      title: "Google Photorealistic 3D Maps Challenge",
      image: "your-image-url-here",
      timeLeft: "4 days left",
      location: "Online",
      prize: "$26,000 in prizes",
      participants: "1714 participants",
    },
    {
      title: "AWS Game Builder Challenge",
      image: "your-image-url-here",
      timeLeft: "about 2 months left",
      location: "Online",
      prize: "$80,000 in prizes",
      participants: "1045 participants",
    },
  ];

  const themes = [
    { theme: "Beginner Friendly", hackathons: 78, prizes: "$2,160,000" },
    { theme: "Machine Learning/AI", hackathons: 45, prizes: "$666,000" },
    { theme: "Social Good", hackathons: 44, prizes: "$2,253,000" },
    { theme: "Open Ended", hackathons: 32, prizes: "$561,000" },
    { theme: "Education", hackathons: 26, prizes: "$285,000" },
    { theme: "Low/No Code", hackathons: 22, prizes: "$642,000" },
    { theme: "Web", hackathons: 22, prizes: "$379,000" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Hackathons for you</h2>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Edit your recommendations &rarr;
            </a>
          </div>
          <div className="space-y-6">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="flex items-center border rounded-lg p-4 shadow-sm"
              >
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {hackathon.title}
                  </h3>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md">
                      {hackathon.timeLeft}
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="material-icons">public</span>
                      <span>{hackathon.location}</span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
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
          <h2 className="text-2xl font-bold text-gray-800">Top hackathon themes</h2>
          <table className="mt-6 w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600 text-sm">
                <th className="py-2">Theme</th>
                <th className="py-2">Hackathons</th>
                <th className="py-2">Total prizes</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {themes.map((theme, index) => (
                <tr key={index} className="border-t text-gray-700">
                  <td className="py-3">{theme.theme}</td>
                  <td className="py-3">{theme.hackathons}</td>
                  <td className="py-3">{theme.prizes}</td>
                  <td className="py-3 text-blue-600 hover:underline cursor-pointer">
                    &rarr;
                  </td>
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
