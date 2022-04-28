import React from 'react'

const Cross = () => {
  return (
    <svg
    width={65}
    height={65}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path
      d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z"
      fill="#99BE8A"
    />
    <path
      d="M18 6L6 18"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default Cross