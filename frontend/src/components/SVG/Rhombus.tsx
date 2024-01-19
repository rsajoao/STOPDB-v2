import React from 'react';
import { SVG } from '../../interfaces/Props/SVG';

const Rhombus: React.FC<SVG> = ({size, color}) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.34315L6.34317 12L12 17.6569L17.6569 12L12 6.34315ZM2.10052 12L12 21.8995L21.8995 12L12 2.10051L2.10052 12Z"
          fill={color}
        ></path>{' '}
      </g>
    </svg>
  );
};

export default Rhombus;
