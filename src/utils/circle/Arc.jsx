import React from "react";

const polarToCartesian = (cx, cy, radius, angle) => {
  const rad = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
};

const Arc = ({
  radius,
  startAngle,
  endAngle,
  stroke = "#B331F1",
  strokeWidth = 8,
  opacity = 1,
}) => {
  const start = polarToCartesian(250, 250, radius, endAngle);

  const end = polarToCartesian(250, 250, radius, startAngle);

  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  const d = `
    M ${start.x} ${start.y}
    A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}
  `;

  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      opacity={opacity}
    />
  );
};

export default Arc;