import React from 'react';
export const MatplotlibIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect width={24} height={24} rx={4} fill="#11557c" />
    <circle cx={6} cy={17} r={4} fill="#fff" />
    <circle cx={14} cy={7} r={3} fill="#fff" />
    <path stroke="#fff" strokeWidth={2} strokeLinecap="round" d="M14 7L6 17" />
    <path
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      d="M14 7h4m-4 0v4m-8 6H2m4 0v4"
    />
  </svg>
);