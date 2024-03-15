import { useRef, useState } from "react";

export default function TaskTimer(props) {
  return (
    <svg viewBox="-25 20 700 60" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0"
        y1="50"
        x2="650"
        y2="50"
        stroke-dasharray="1000"
        className="stroke-[#88adf1]"
        stroke-width="10"
        stroke-linecap="round"
      />
    </svg>
  );
}
