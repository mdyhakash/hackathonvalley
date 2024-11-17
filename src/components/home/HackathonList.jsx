import Image from "next/image";
import Link from "next/link";
import SearchHackathon from './SearchHackathon';
const HackathonList = () => {
  const hackathons = [
    {
      title: "Google Chrome Built-in AI Challenge",
      image: "",
      timeLeft: "17 days left",
      location: "Online",
      prize: "$65,000 in prizes",
      participants: "5948 participants",
    },
    {
      title: "Codegeist 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      timeLeft: "24 days left",
      location: "Online",
      prize: "$170,000 in prizes",
      participants: "2358 participants",
    },
    {
      title: "Google Photorealistic 3D Maps Challenge",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      timeLeft: "4 days left",
      location: "Online",
      prize: "$26,000 in prizes",
      participants: "1714 participants",
    },
    {
      title: "AWS Game Builder Challenge",
      image: "",
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
  <>
    <SearchHackathon/>
    <div className="bg-gray-50 mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-extrabold text-gray-800">Hackathons for You</h2>
    <Link
      href="/"
      className="text-blue-600 text-sm font-medium hover:underline"
    >
      Edit Recommendations
    </Link>
  </div>
  <div className="space-y-8">
    {hackathons.map((hackathon, index) => (
      <div
        key={index}
        className="flex items-center bg-white border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
      >
        <Image
          src={hackathon.image}
          alt={hackathon.title}
          width={80}
          height={80}
          className="h-20 w-20 rounded-lg object-cover border"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            {hackathon.title}
          </h3>
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
              {hackathon.timeLeft}
            </span>
            <span className="flex items-center space-x-1">
              {/* <span className="material-icons text-gray-400">public</span> */}
              <span>{hackathon.location}</span>
            </span>
          </div>
          <div className="mt-3 text-sm text-gray-600 space-y-1">
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
          <h2 className="text-3xl font-extrabold text-gray-800">Top Hackathon Themes</h2>
          <table className="mt-6 w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700 text-sm">
              <tr>
                <th className="py-4 px-4 text-left">Theme</th>
                <th className="py-4 px-4 text-left">Hackathons</th>
                <th className="py-4 px-4 text-left">Total Prizes</th>
              </tr>
            </thead>
            <tbody>
              {themes.map((theme, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-[#C2CE3B] transition-all`}
                >
                  <td className="py-4 px-4 text-gray-800">{theme.theme}</td>
                  <td className="py-4 px-4 text-gray-600">{theme.hackathons}</td>
                  <td className="py-4 px-4 text-gray-600">{theme.prizes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default HackathonList;
