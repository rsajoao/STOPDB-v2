import React from 'react';
import { SVG } from '../../interfaces/Props/SVG';

const Flag: React.FC<SVG> = ({ size, color }) => {
  return (
    <svg
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox="0 -0.5 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <title>report_flag [#1420]</title> <desc>Created with Sketch.</desc>{' '}
        <defs> </defs>{' '}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {' '}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-59.000000, -640.000000)"
            fill={color}
          >
            {' '}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {' '}
              <path
                d="M7.2,492 L24,492 L24,480 L7.2,480 L7.2,492 Z M3,500 L5.1,500 L5.1,480 L3,480 L3,500 Z"
                id="report_flag-[#1420]"
              >
                {' '}
              </path>{' '}
            </g>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export default Flag;
