import React from "react"

const CloseButton = ({ onClick }) => (
  <button
    className="text-gray-500 hover:text-gray-700 focus:outline-none"
    onClick={onClick}>
    <svg
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
)

export default CloseButton
