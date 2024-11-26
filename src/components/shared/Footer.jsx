// "use client";
// // import carLogo from "/public/assets/logoCar.png";
// import carLogo from "/public/assets/mnm_logo.webp";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaRegEnvelope,
//   FaXTwitter,
// } from "react-icons/fa6";

// import { IoHomeOutline } from "react-icons/io5";
// import { FiPhone } from "react-icons/fi";
// import paymentMethodLogo from "/public/assets/paymentMethods.png";

// const Footer = () => {
//   // if (pathname === "/booking") return null;

//   return (
//     <div className="px-5 sm:px-10 py-5  grid grid-cols-1 md:grid-cols-2  gap-8 bg-white text-black">
//       <div>
//         {/* logo and social icons */}
//         <div className="h-full flex flex-col gap-5 justify-between">
//           {/* <Image
//             src={carLogo}
//             className="w-36"
//             height={100}
//             width={144}
//             alt="MNMRiDEZ Chauffeur"
//           /> */}

//           <h1 className="text-xl font-bold">LOGO</h1>

//           {/* about */}
//           <div>
//             <div className=" flex flex-col gap-3">
//               {/* <Link href="/about" className="text-sm">
//             Our Story
//           </Link>

//           <Link href="/about" className="text-sm">
//             Environmental Impact
//           </Link>
//           <Link href="/about" className="text-sm">
//             Marylebone Store
//           </Link> */}

//               <p className="text-xs">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Dolorem ipsam, aliquid corporis ratione cupiditate iste
//                 veritatis accusantium assumenda quia repellendus maiores,
//                 quisquam vel et cum sit, repudiandae tempore culpa quaerat
//                 voluptatum fugit eos. Voluptatum, quaerat omnis! Consectetur
//                 veniam facere voluptatibus. Officia quaerat aliquid incidunt
//                 voluptates! Voluptates magnam fugiat, nesciunt culpa laborum
//                 provident aut excepturi dolores ullam quia et perferendis
//               </p>
//             </div>
//           </div>

//           {/* <div className="flex w-full gap-5">
//             <Link className="text-base" href="/">
//               <FaFacebookF />
//             </Link>
//             <Link className="text-base" href="/">
//               <FaXTwitter />
//             </Link>
//             <Link className="text-base" href="/">
//               <FaInstagram />
//             </Link>
//             <Link className="text-base" href="/">
//               <FaPinterest />
//             </Link>
//             <Link className="text-base" href="/">
//               <FaLinkedin />
//             </Link>
//           </div> */}

//           <Image
//             src={paymentMethodLogo}
//             className="w-48"
//             height={50}
//             width={192}
//             alt="payment methods"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* info */}
//         <div>
//           <h2 className="font-bold text-xl">Hackathons</h2>

//           <div className="mt-2 flex flex-col gap-3">
//             <Link href="/about" className="text-sm">

//             </Link>
//             <Link href="/terms-condition" className="text-sm">
//                About
//             </Link>
//             <Link href="/privacy-policy" className="text-sm">
//               Privacy Policy
//             </Link>
//             {/*
//             <Link href="/refund-policy" className="text-sm">
//               Refund Policy
//             </Link> */}
//             <a target="_blank" href="/sitemap.xml" className="text-sm">
//               Sitemap
//             </a>
//           </div>

//           <div className="flex w-full gap-5 mt-5">
//             <Link
//               aria-label="MNMRiDEZ Facebook"
//               target="_blank"
//               className="text-base"
//               href="/"
//             >
//               <FaFacebookF />
//             </Link>
//             <Link
//               aria-label="MNMRiDEZ Twitter"
//               target="_blank"
//               className="text-base"
//               href="/"
//             >
//               <FaXTwitter />
//             </Link>
//             <Link
//               aria-label="MNMRiDEZ Instagram"
//               target="_blank"
//               className="text-base"
//               href="/"
//             >
//               <FaInstagram />
//             </Link>
//             {/* <Link className="text-base" href="/">
//               <FaPinterest />
//             </Link> */}
//             <Link
//               aria-label="LinkedIn"
//               target="_blank"
//               className="text-base"
//               href="/"
//             >
//               <FaLinkedin />
//             </Link>
//           </div>
//         </div>

//         {/* contact */}
//         <div>
//           <h2 className="font-bold text-xl">Info</h2>

//           <div className="mt-2 flex flex-col gap-3">
//             <div className="text-sm flex gap-2 items-center">
//               <span>
//                 <IoHomeOutline />
//               </span>

//               <p>X </p>
//             </div>
//             <div className="text-sm flex gap-2 items-center">
//               <span>
//                 <FiPhone />
//               </span>

//               <a href="telto:23123123"> 212312313 </a>
//             </div>
//             <div className="text-sm flex gap-2 items-center">
//               <span>
//                 <FaRegEnvelope />
//               </span>

//               <a className="truncate" href="mailto:booking@example.com">
//                 {" "}
//                 contact.hackathonvalley@gmail.com{" "}
//               </a>
//             </div>

//             <Link
//               href={"/contact"}
//               className="flex items-center justify-center bg-gradient-to-r from-[#C2CE3B] to-[#60BA08] px-8 py-2 text-black font-bold mt-2"
//             >
//               <span>Contact</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Hackathon Valley</h1>
            <p className="text-sm text-gray-300">
              Hackathon Valley connects coders, innovators, and tech enthusiasts
              worldwide. Join us for exciting challenges and opportunities to
              grow.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="font-semibold hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-semibold hover:text-green-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-semibold hover:text-green-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-semibold hover:text-green-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <IoLocationOutline size={20} />
                <span>123 Tech Avenue, City</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={20} />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineEmail size={20} />
                <a
                  href="mailto:info@hackathonvalley.com"
                  className="hover:underline"
                >
                  info@hackathonvalley.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Link
                href="/"
                aria-label="Facebook"
                className="hover:text-green-600"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="/"
                aria-label="Twitter"
                className="hover:text-green-600"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="/"
                aria-label="Instagram"
                className="hover:text-green-600"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="/"
                aria-label="LinkedIn"
                className="hover:text-green-600"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-5">
          © {new Date().getFullYear()} Hackathon Valley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
