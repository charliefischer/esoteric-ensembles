import React from "react";
export default function Play({ classes = "" }) {
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
        strokeWidth="2"
      />
      <path
        d="M27.25 20.4785L55 36.5L27.25 52.5215L27.25 20.4785Z"
        fill="#F5F3DC"
        stroke="#343434"
        strokeWidth="2"
      />
    </svg>
  );
}
