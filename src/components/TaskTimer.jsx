export default function TaskTimer(props) {
  const strokeDashoffset =
    650 - (650 / props.taskDuration) * props.remainingTime;

  return (
    <svg viewBox="-25 20 700 60" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0"
        y1="50"
        x2="650"
        y2="50"
        stroke-dasharray="1000"
        className="stroke-blue-500"
        stroke-width="10"
        stroke-linecap="round"
        style={{
          strokeDasharray: 650,
          strokeDashoffset,
        }}
      />
    </svg>
  );
}
