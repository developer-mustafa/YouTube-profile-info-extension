import cssText from "data-text:~style.css";
// import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo";
import React from "react";
import ReactDOM from "react-dom";
import ChannelInfoFeature from "../features/channel-info-features/channel-info";

export const config: PlasmoCSConfig = {
  matches: ["https://*.youtube.com/channel/*", "https://*.youtube.com/@*"]
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

// export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
//   element: document.querySelector(
//     ".yt-subscribe-button-view-model-wiz__container"
//   ),
//   insertPosition: "afterend"
// })



// Main App Component
const App = () => {
  return <ChannelInfoFeature />;
};



export default App;