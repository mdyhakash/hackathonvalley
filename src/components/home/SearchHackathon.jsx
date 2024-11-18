const SearchHackathon = () => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Find your next hackathon"
          className="w-full py-3 pl-4 pr-20 text-gray-800 bg-white border border-[#C2CE3B] rounded-lg focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 border bg-[#C2CE3B] px-4 py-2 font-semibold rounded-lg">
          Search hackathons
        </button>
      </div>
    </div>
  );
};

export default SearchHackathon;
