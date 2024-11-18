{/* eslint-disable-next-line react/no-unescaped-entities */}
import Image from "next/image";
import heroImage from "@/assets/hero.jpg";

const HackathonHero = () => {
  return (
    <div
      className="bg-gray-50"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-900 bg-opacity-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">
              Hackathon Valley
            </h1>
            <p className="mt-4 text-lg">
              Empowering innovation and technology, one hackathon at a time
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-[#C2CE3B] text-black font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-l from-[#C2CE3B] to-[#60BA08] hover:text-black">
              For organizers
            </button>
            <button className="bg-white border border-[#C2CE3B] font-medium px-6 py-3 rounded-lg shadow-md">
              For participants
            </button>
          </div>

          {/* Trusted Organizations Section */}
          <div className="mt-16">
            <p className="text-black font-semibold uppercase text-sm tracking-widest">
              Trusted by the world&apos;s leading organizations
            </p>
            <div className="bg-white">
            
             <div className="mt-1 flex flex-wrap justify-evenly items-center gap-8 px-1 py-5 ">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className=""
                width={50}
                height={40}
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                className=""
                width={60}
                height={40}
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png?20230620122121"
                alt="Meta"
                className=""
                width={60}
                height={40}
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png"
                alt="AWS"
                className=""
                width={60}
                height={40}
              />
              </div>
          </div>
          </div>         
        </div>
      </div>
    </div>
  );
};

export default HackathonHero;
