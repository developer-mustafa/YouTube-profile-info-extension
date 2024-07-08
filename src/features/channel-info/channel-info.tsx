// import React, { useState, useEffect } from "react";
// import { channelInfo } from "../../data/contents"; // Importing from the correct path
// import ChannelInfo from "../../components/channel-info";
// import Modal from "../../components/modal";
// import OpenButton from "../../components/open-button";
// import CloseButton from "../../components/close-button";
// import content from './../../declarations.d';

// type ChannelData = {
//   email: string;
//   website: string;
//   subscribers: string;
//   videos: string;
//   views: string;
//   joined: string;
//   location: string;
// };

// const fallbackData: ChannelData = {
//   email: "codeDemo@example.com",
//   website: "www.youtube.com/@StackLearner",
//   subscribers: "113K subscribers",
//   videos: "1,696 videos",
//   views: "8,385,136 views",
//   joined: "Jun 7, 2017",
//   location: "Bangladesh",
// };

// const ChannelInfoFeature = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [channelData, setChannelData] = useState<ChannelData[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulate fetching data from an API or other sources
//         setChannelData(channelInfo);
//       } catch (error) {
//         console.error("Error fetching channel data:", error);
//         setChannelData([fallbackData]);
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

//   if (!channelData.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8">
//       <OpenButton onClick={handleOpenModal} />
//       {isOpen && (
//         <Modal onClose={handleCloseModal}>
//           <div className="bg-white p-10 rounded-lg w-[500px]">
//             <div className="flex justify-end">
//               <CloseButton onClick={handleCloseModal} />
//             </div>
//             <h2 className="text-3xl font-bold mb-6">Channel Information</h2>
//             {error && <div className="text-white p-2 mb-4 text-2xl bg-red-400 rounded-md">{error}</div>}
//             {channelData.map((info) => (
//               <ChannelInfo key={info.id} label={info.label} icon={info.icon} value={info.value} />
//             ))}
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default ChannelInfoFeature;

import React, { useEffect, useState } from "react"

import ChannelInfo from "../../components/channel-info"
import CloseButton from "../../components/close-button"
import Modal from "../../components/modal"
import OpenButton from "../../components/open-button"
import { channelInfo } from "../../data/contents"

type ChannelData = {
  email: string
  website: string
  subscribers: string
  videos: string
  views: string
  joined: string
  location: string
}

const fallbackData: ChannelData = {
  email: "stacklearner@example.com",
  website: "www.youtube.com/@StackLearner",
  subscribers: "113K subscribers",
  videos: "1,696 videos",
  views: "8,385,136 views",
  joined: "Jun 7, 2017",
  location: "Bangladesh"
}

const ChannelInfoFeature = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [channelData, setChannelData] = useState<ChannelData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data from an API or other sources
        setChannelData(channelInfo as unknown as ChannelData)
      } catch (error) {
        console.error("Error fetching channel data:", error)
        setChannelData(fallbackData)
        setError("Using fallback data due to fetch error")
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  if (!channelData) {
    return <div>Loading...</div>
  }

  return (
    <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8">
      <OpenButton onClick={handleOpenModal} />
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="flex justify-end">
            <CloseButton onClick={handleCloseModal} />
          </div>
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <h2 className="text-3xl font-bold mb-6">Links</h2>
          <h2 className="text-3xl font-bold mb-6">Channel Information</h2>
          {error && (
            <div className="text-white p-2 mb-4 text-2xl bg-red-400 rounded-md">
              {error}
            </div>
          )}
          {channelInfo.map((info) => (
            <ChannelInfo
              key={info.id}
              label={info.label}
              icon={info.icon}
              value={info.value}
            />
          ))}
        </Modal>
      )}
    </div>
  )
}

export default ChannelInfoFeature
