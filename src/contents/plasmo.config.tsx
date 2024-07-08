
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

