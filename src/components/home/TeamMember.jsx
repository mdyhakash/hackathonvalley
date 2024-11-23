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
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter   } from "react-icons/fa";
const TeamMembers = () => {
  const founders = [
    {
      name: "Md Noushad Jahan Ramim",
      role: "Founder",
      image: Noushad,
      linkedin: "https://www.linkedin.com/in/md-noushad-jahan-ramim-4b57372a5/",
      twitter: "https://github.com/noushad25",
      facebook: "https://www.facebook.com/profile.php?id=100084776900251",
    },
    {
      name: "Md Y H Akash",
      role: "Founder",
      image: Akash,
      linkedin: "https://www.linkedin.com/in/mdyhakash/",
      twitter: "https://github.com/mdyhakash",
      facebook: "https://www.facebook.com/mdyhakash",
    },
  ];

  const coFounders = [
    {
      name: "Atik Hasan",
      role: "Co-Founder",
      image: Atik,
      linkedin: "https://www.linkedin.com/in/atik65/",
      twitter: "https://github.com/atik65",
      facebook: "https://www.facebook.com/dev.atik.hasan",
    },
    {
      name: "Kazi Jamil Jetu",
      role: "Co-Founder",
      image: Jetu,
      linkedin: "#",
      twitter: "#",
      facebook: "https://www.facebook.com/jamil.jetu",
    },
    {
      name: "Nafis Iqbal Turag",
      role: "Co-Founder",
      image: Turag,
      linkedin: "#",
      twitter: "#",
      facebook: "https://www.facebook.com/nafis.iqbal.turag",
    },
  ];

  const others = [
    {
      name: "Shadman Sarwar",
      role: "Marketing Lead",
      image: Shadman,
      linkedin: "#",
      twitter: "#",
      facebook: "https://www.facebook.com/shadmanbigboss",
    },
    {
      name: "Labiba Akram Pritha",
      role: "Marketing Lead",
      image: Pritha,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      name: "Afia Mahmud Roshni",
      role: "Marketing Lead",
      image: Roshni,
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  ];

  const MemberCard = ({ member }) => (
    <div className="bg-dark border border-green-600 shadow-lg rounded-xl p-6 text-center transition-transform duration-300 transform hover:scale-105">
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-green-500">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-100">{member.name}</h3>
      <p className="text-md text-green-400">{member.role}</p>
      <div className="flex justify-center mt-4 space-x-4">
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-green-400 text-2xl hover:text-green-600 transition-all" />
          </Link>
        )}
        {member.twitter && (
          <Link href={member.twitter} target="_blank" rel="noopener noreferrer">
           <FaTwitter className="text-green-400 text-2xl hover:text-green-600 transition-all" />
          </Link>
        )}
        {member.facebook && (
          <Link
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-green-400 text-2xl hover:text-green-600 transition-all" />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-12 bg-gradient-to-b from-dark via-gray-900 to-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-green-400 mb-12 text-center">
          Meet Our Amazing Team
        </h2>

        {/* Founders Section */}
        <h3 className="text-2xl font-bold text-gray-100 mb-6">Founders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {founders.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Co-Founders Section */}
        <h3 className="text-2xl font-bold text-gray-100 mb-6">Co-Founders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {coFounders.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Other Team Members Section */}
        <h3 className="text-2xl font-bold text-gray-100 mb-6">Team Members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
