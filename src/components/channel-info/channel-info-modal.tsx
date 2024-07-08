import React from "react"

const Modal = ({ children, onClose }) => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
    onClick={onClose}>
    <div
      className="bg-white p-10 rounded-lg w-[500px]"
      onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
)

export default Modal