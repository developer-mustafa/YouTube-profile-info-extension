import React from "react"
import { TiUser } from "react-icons/ti"

const OpenButton = ({ onClick }) => (
  <button
    className="flex fixed top-28 right-20 items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 animate-bounce"
    onClick={onClick}>
    <TiUser className="mr-2 h-8 w-8 text-white" /> Channel Info
  </button>
)

export default OpenButton
