import React from 'react'

const SearchHackathon = () => {
  return (
    <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Find your next hackathon"
                className="w-full py-3 pl-4 pr-20 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Search hackathons
              </button>
            </div>
          </div>
  )
}

export default SearchHackathon