const HackathonHero = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            The home for hackathons
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Where organizations and developers come together to build, inspire,
            and innovate.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            For organizers
          </button>
          <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            For participants
          </button>
        </div>

        {/* Illustration */}
        <div className="relative mt-12">
          <img
            src="your-illustration-url-here"
            alt="Hackathon Illustration"
            className="mx-auto w-full max-w-4xl"
          />
        </div>

        {/* Trusted Organizations Section */}
        <div className="mt-16">
          <p className="text-center text-gray-500 uppercase text-sm tracking-widest">
            Trusted by the world's leading organizations
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Platforms_Inc._logo.svg"
              alt="Meta"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Amazon_Web_Services_Logo.svg"
              alt="AWS"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/Okta_logo.svg"
              alt="Okta"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Atlassian_Logo.svg"
              alt="Atlassian"
              className="h-8"
            />
          </div>
        </div>

        {/* Search Section */}
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
      </div>
    </div>
  );
};

export default HackathonHero;
