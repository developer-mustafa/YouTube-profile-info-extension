// import React, { useState, useEffect } from "react";
// import cssText from "data-text:~style.css";
// import type { PlasmoCSConfig } from "plasmo";
// import { TiMail, TiWorld, TiUser, TiVideo } from "react-icons/ti";
// import { BsEyeFill, BsFillHandIndexThumbFill } from "react-icons/bs";
// import { AiFillHome } from "react-icons/ai";
// import youtubeData from "raw:~/data/data.json";

// export const config: PlasmoCSConfig = {
//   matches: ["https://*.youtube.com/channel/*", "https://*.youtube.com/@*"],

// };

// export const getStyle = () => {
//   const style = document.createElement("style");
//   style.textContent = cssText;
//   return style;
// };

// type ChannelData = {
//   email: string;
//   website: string;
//   subscribers: string;
//   videos: string;
//   views: string;
//   joined: string;
//   location: string;
// };

// // Fallback data
// const fallbackData: ChannelData = {
//   email: "stacklearner@example.com",
//   website: "www.youtube.com/@StackLearner",
//   subscribers: "113K subscribers",
//   videos: "1,696 videos",
//   views: "8,385,136 views",
//   joined: "Jun 7, 2017",
//   location: "Bangladesh",
// };

// const PlasmoOverlay = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [channelData, setChannelData] = useState<ChannelData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(youtubeData);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data: ChannelData = await response.json();
//         setChannelData(data);
//       } catch (error) {
//         console.error("Error fetching channel data:", error);
//         setChannelData(fallbackData);
//         setError("Using fallback data due to fetch error");
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const handleOpenModal = () => setIsOpen(true);
//   const handleCloseModal = () => setIsOpen(false);

//   if (!channelData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8">
//       <button
//         className="flex fixed top-28 right-20 items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 animate-bounce"
//         onClick={handleOpenModal}
//       >
//         <TiUser className="mr-2 h-8 w-8 text-white" /> Channel Info
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-10 rounded-lg w-[500px]">
//             <div className="flex justify-end">
//               <button
//                 className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                 onClick={handleCloseModal}
//               >
//                 <svg
//                   className="h-10 w-10"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <h2 className="text-3xl font-bold mb-6">Channel Information</h2>
//             {error && <div className="text-white p-2 mb-4 text-2xl bg-red-400 rounded-md">{error}</div>}
//             <ChannelInfo label="Email" icon={<TiMail className="mr-2 h-16 w-16 text-red-500" />} value={channelData.email} />
//             <ChannelInfo label="Website" icon={<TiWorld className="mr-2 h-16 w-16 text-blue-500" />} value={channelData.website} />
//             <ChannelInfo label="Subscribers" icon={<TiUser className="mr-2 h-16 w-16 text-green-500" />} value={channelData.subscribers} />
//             <ChannelInfo label="Videos" icon={<TiVideo className="mr-2 h-16 w-16 text-purple-500" />} value={channelData.videos} />
//             <ChannelInfo label="Views" icon={<BsEyeFill className="mr-2 h-16 w-16 text-orange-500" />} value={channelData.views} />
//             <ChannelInfo label="Joined" icon={<BsFillHandIndexThumbFill className="mr-2 h-16 w-16 text-pink-500" />} value={channelData.joined} />
//             <ChannelInfo label="Location" icon={<AiFillHome className="mr-2 h-16 w-16 text-yellow-500" />} value={channelData.location} />

//             <button
//               className="mt-6 bg-red-500 text-2xl hover:bg-red-600 text-white px-[40px] py-[10px] rounded-md"
//               onClick={handleCloseModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const ChannelInfo = ({ label, icon, value }) => (
//   <p className="flex items-center mb-4 text-xl">
//     {icon} <span className="font-bold">{label}:</span> {value}
//   </p>
// );

// export default PlasmoOverlay;

import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import ChannelInfoFeature from "../features/channel-info/channel-info"

export const config: PlasmoCSConfig = {
  matches: ["https://*.youtube.com/channel/*", "https://*.youtube.com/@*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

// export const getInlineAnchor = () => document.querySelector("body")

export default function App() {
  return <ChannelInfoFeature />
}
