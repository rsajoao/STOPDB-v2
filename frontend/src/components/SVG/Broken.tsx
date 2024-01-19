import React from 'react';
import { SVG } from '../../interfaces/Props/SVG';

const Broken: React.FC<SVG> = ({size, color="#DC143C"}) => {
  return (
    <svg
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M8.37032 11.0726L5.41421 14.0287C4.63317 14.8097 4.63316 16.076 5.41421 16.8571L6.95611 18.399C7.73715 19.18 9.00348 19.18 9.78453 18.399L12.7406 15.4429M11.0726 8.37032L14.0287 5.41421C14.8097 4.63317 16.076 4.63316 16.8571 5.41421L18.399 6.95611C19.18 7.73715 19.18 9.00348 18.399 9.78453L15.4429 12.7406M6.64883 6.64883L4.88296 4.88296M19.0992 19.0992L17.3333 17.3333M9.35119 5.87299V4M14.6488 20V18.127M5.87299 9.35119H4M20 14.6488H18.127"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );
};

export default Broken;
