import { useRef, useState, useEffect } from "react";

export default function PlayButton(props) {
  const [remainingSeconds, setRemainingSeconds] = useState(60); // 60 seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  const secondCircle = useRef();

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      return;
    }

    intervalRef.current = setInterval(() => {
      setRemainingSeconds((remainingSeconds) => remainingSeconds - 1);
    }, 1000);
  }, [isRunning]);

  useEffect(() => {
    const segmentLength = 157 / 60; // Length of each segment
    secondCircle.current.style.strokeDashoffset = `${
      segmentLength * remainingSeconds
    }`;

    if (remainingSeconds <= 0) {
      clearInterval(intervalRef.current);
      setRemainingSeconds(60);
    }
  }, [remainingSeconds]);

  const handleClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div onClick={handleClick}>
      <div className="relative flex justify-center items-center">
        <svg className="w-24 h-24 mt-5 absolute">
          <circle
            r="25"
            cx="50"
            cy="50"
            className=" fill-white stroke-[#88adf1]  stroke-[9px]"
          ></circle>
          <circle
            r="25"
            cx="50"
            cy="50"
            className=" fill-white stroke-white stroke-[5px]"
            ref={secondCircle}
            style={{
              strokeDasharray: 157,
              // strokeDashoffset: 157,
            }}
          ></circle>
        </svg>
        <button>
          <svg
            className="w-6 h-6 absolute inset-0 mx-auto pl-1 stroke-[#88adf1]"
            viewBox="0 0 24 24"
            fill="#88adf1"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}
