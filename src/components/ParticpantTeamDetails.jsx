const ParticpantTeamDetails = () => {
  const team = {
    name: "Team Alpha",
    description:
      "Team Alpha is a group of talented developers and designers passionate about creating AI-powered solutions for real-world problems.",
    members: [
      { name: "Alice Johnson", role: "Frontend Developer" },
      { name: "Bob Smith", role: "Backend Developer" },
      { name: "Charlie Brown", role: "UI/UX Designer" },
      { name: "Diana Prince", role: "AI Specialist" },
    ],
    project: {
      title: "AI-Powered Smart Assistant",
      description:
        "A smart assistant that leverages AI to provide personalized recommendations, schedule management, and real-time support.",
      technologies: ["React", "Python", "TensorFlow", "Node.js"],
    },
  };

  return (
    <div className="bg-black min-h-screen text-green-500 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {team.name} Details
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the Team</h2>
          <p className="text-gray-300">{team.description}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
          <ul className="space-y-4">
            {team.members.map((member, index) => (
              <li key={index} className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <h3 className="text-xl font-bold">{team.project.title}</h3>
          <p className="text-gray-300 mb-4">{team.project.description}</p>
          <h4 className="text-lg font-semibold">Technologies Used:</h4>
          <ul className="list-disc list-inside text-gray-300">
            {team.project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParticpantTeamDetails;
