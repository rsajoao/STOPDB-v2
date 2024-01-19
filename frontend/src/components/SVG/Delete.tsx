import React from 'react';
import { SVG } from '../../interfaces/Props/SVG';

const Delete: React.FC<SVG> = ({size, color}) => {
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
        <title>delete [#1487]</title> <desc>Created with Sketch.</desc>{' '}
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
            transform="translate(-179.000000, -360.000000)"
            fill={color}
          >
            {' '}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {' '}
              <path
                d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                id="delete-[#1487]"
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

export default Delete;
