"use client";
import Image from "next/image";

const TrustedOrganizations = () => {
  return (
    <div className="bg-dark py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
          Trusted by Leading Organizations
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-12">
          Our hackathon is backed by world-class companies and organizations.
        </p>

        {/* Organization Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
              alt="Meta"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/IBM_logo.svg"
              alt="IBM"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedOrganizations;
