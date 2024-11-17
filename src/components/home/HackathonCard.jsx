const HackathonCard = ({ hackathon }) => (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 relative flex">
      <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-xs font-semibold rounded-tr-md rounded-bl-md">
        FEATURED
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{hackathon.title}</h3>
        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md">
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