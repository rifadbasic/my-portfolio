import React from "react";
import Arc from "./Arc";

const colors = [
  "#B331F1",
  "#A62BE8",
  "#C338FF",
  "#F13E93",
  "#792CA2",
];

const randomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

const HudRing = ({
  radius,
  strokeWidth = 10,
  rotate = true,
  reverse = false,
  duration = 25,
}) => {
  const arcs = [];

  let angle = 0;

  while (angle < 360) {
    const arcLength = Math.random() * 28 + 8;

    const gap = Math.random() * 14 + 4;

    arcs.push({
      start: angle,
      end: angle + arcLength,
      color: randomColor(),
    });

    angle += arcLength + gap;
  }

  return (
    <g
      style={{
        transformOrigin: "250px 250px",
        animation: rotate
          ? `${reverse ? "rotateReverse" : "rotateClock"} ${duration}s linear infinite`
          : "none",
      }}
    >
      {arcs.map((arc, index) => (
        <Arc
          key={index}
          radius={radius}
          startAngle={arc.start}
          endAngle={arc.end}
          stroke={arc.color}
          strokeWidth={strokeWidth}
        />
      ))}
    </g>
  );
};

export default HudRing;