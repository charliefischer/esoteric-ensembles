import React from "react";
export default function Pause({ classes = "" }) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <circle
        cx="36"
        cy="36"
        r="35"
        fill="#FA2D3C"
        stroke="#343434"
        stroke-width="2"
      />
      <path
        d="M21 19H32V54H21V19Z"
        fill="#F5F3DC"
        stroke="#343434"
        stroke-width="2"
      />
      <path
        d="M40 19H51V54H40V19Z"
        fill="#F5F3DC"
        stroke="#343434"
        stroke-width="2"
      />
    </svg>
  );
}
