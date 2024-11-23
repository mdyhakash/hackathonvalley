const SearchHackathon = () => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="relative w-full max-w-lg bg-gray-900 rounded-lg shadow-lg p-6">
        <input
          type="text"
          placeholder="Find your next hackathon"
          className="w-full py-3 pl-6 pr-20 text-gray-100 bg-gray-800 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2.5 font-medium rounded-lg hover:bg-green-700 transition-all">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchHackathon;
