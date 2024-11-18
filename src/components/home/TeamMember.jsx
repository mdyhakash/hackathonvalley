// // import Daniel from "@/assets/team/Daniel.jpg";
// // import Emily from "@/assets/team/Emily.jpg";
// // import Ethan from "@/assets/team/Ethan.jpg";
// // import Jane from "@/assets/team/Jane.jpg";
//  import Noushad from "@/assets/team/Md Noushad Jahan Ramim.jpg"; // Ensure the path is correct
// // import Michael from "@/assets/team/Michael.jpg";
// // import Olivia from "@/assets/team/Olivia.jpg";
// // import Sarah from "@/assets/team/Sarah.jpg";
// import Image from "next/image";

// const TeamMembers = () => {
//   const founders = [
//     {
//       name: "Md Noushad Jahan Ramim",
//       role: "Founder",
//       image: Noushad,
//     },
//     {
//       name: "Jane Doe",
//       role: "Founder",
//       //image: Jane,
//     },
//   ];

//   const coFounders = [
//     {
//       name: "Michael Brown",
//       role: "Co-Founder",
//       //image: Michael,
//     },
//     {
//       name: "Sarah Williams",
//       role: "Co-Founder",
//       ///image: Sarah,
//     },
//     {
//       name: "Emily Johnson",
//       role: "Co-Founder",
//       //image: Emily,
//     },
//   ];

//   const others = [
//     {
//       name: "Daniel Martinez",
//       role: "Marketing Lead",
//       //image: Daniel,
//     },
//     {
//       name: "Olivia Garcia",
//       role: "UI/UX Designer",
//       //image: Olivia,
//     },
//     {
//       name: "Ethan Miller",
//       role: "Software Engineer",
//       ///image: Ethan,
//     },
//   ];

//   return (
//     <div className="py-12 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Meet Our Team
//         </h2>

//         {/* Founders Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
//           {founders.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 text-center"
//             >
//               <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700">
//                 {member.name}
//               </h3>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </div>
//           ))}
//         </div>

//         {/* Co-Founders Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {coFounders.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 text-center"
//             >
//               <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700">
//                 {member.name}
//               </h3>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </div>
//           ))}
//         </div>

//         {/* Other Team Members Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {others.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 text-center"
//             >
//               <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700">
//                 {member.name}
//               </h3>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMembers;
import Roshni from "@/assets/team/Afia Mahmud Roshni.jpg";
import Atik from "@/assets/team/Atik Hasan.jpg";
import Jetu from "@/assets/team/Kazi Jamil Jetu.jpg";
import Pritha from "@/assets/team/Labiba Akram Pritha.jpg";
import Noushad from "@/assets/team/Md Noushad Jahan Ramim.jpg";
import Akash from "@/assets/team/Md Y H Akash.jpg";
import Turag from "@/assets/team/Nafis Iqbal Turag.jpg";
import Shadman from "@/assets/team/Shadman Sarwar.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const TeamMembers = () => {
  const founders = [
    {
      name: "Md Noushad Jahan Ramim",
      role: "Founder",
      image: Noushad,
      linkedin: "https://www.linkedin.com/in/md-noushad-jahan-ramim-4b57372a5/", 
      github: "https://github.com/noushad25", 
      facebook: "https://www.facebook.com/profile.php?id=100084776900251", 
    },
    {
      name: "Md Y H Akash",
      role: "Founder",
      image: Akash,
      linkedin: "https://www.linkedin.com/in/mdyhakash/",
      github: "https://github.com/mdyhakash",
      facebook: "https://www.facebook.com/mdyhakash",
    },
  ];

  const coFounders = [
    {
      name: "Atik Hasan",
      role: "Co-Founder",
      image: Atik,
      linkedin: "https://www.linkedin.com/in/atik65/",
      github: "https://github.com/atik65",
      facebook: "https://www.facebook.com/dev.atik.hasan",
    },
    {
      name: "Kazi Jamil Jetu",
      role: "Co-Founder",
      image: Jetu,
      linkedin: "#",
      github: "#",
      facebook: "https://www.facebook.com/jamil.jetu",
    },
    {
      name: "Nafis Iqbal Turag",
      role: "Co-Founder",
      image: Turag,
      linkedin: "#",
      github: "#",
      facebook: "https://www.facebook.com/nafis.iqbal.turag",
    },
  ];

  const others = [
    {
      name: "Shadman Sarwar",
      role: "Marketing Lead",
      image: Shadman,
      linkedin: "#",
      github: "#",
      facebook: "https://www.facebook.com/shadmanbigboss",
    },
    {
      name: "Labiba Akram Pritha",
      role: "Marketing Lead",
      image: Pritha,
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
    {
      name: "Afia Mahmud Roshni",
      role: "Marketing Lead",
      image: Roshni,
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Meet Our Amazing Team
        </h2>

        {/* Founders Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {founders.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform duration-300 transform hover:scale-105 relative group"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-lg text-green-500">{member.role}</p>

              {/* Social Media Icons */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-xl">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 text-blue-600 text-5xl hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 text-gray-900 text-5xl hover:text-gray-700"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 text-blue-600 text-5xl hover:text-blue-800"
                >
                   <FaFacebook />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Founders Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {coFounders.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform duration-300 transform hover:scale-105 relative group"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-lg text-green-500">{member.role}</p>

              {/* Social Media Icons */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-xl">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-blue-600 text-4xl hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-gray-900 text-4xl hover:text-gray-700"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-blue-600 text-4xl hover:text-blue-800"
                >
                   <FaFacebook />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform duration-300 transform hover:scale-105 relative group"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-lg text-green-500">{member.role}</p>

              {/* Social Media Icons */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-xl">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-blue-600 text-4xl hover:text-blue-800"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-gray-900 text-4xl hover:text-gray-700"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-blue-600 text-4xl hover:text-blue-800"
                >
                   <FaFacebook />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
