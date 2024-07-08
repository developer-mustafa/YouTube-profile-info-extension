import React from "react"

type ChannelInfoProps = {
  label: string
  icon: string
  value: string
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ label, icon, value }) => (
  <p className="flex items-center mb-4 text-xl">
    <img src={icon} alt={`${label} icon`} className="mr-2 h-16 w-16" />
    <span className="font-bold">{label}:</span> {value}
  </p>
)

export default ChannelInfo
