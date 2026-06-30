import React from "react";
import "./circle.css";
import HudRing from "./HudRing";

const CircleH = ({ size = 550 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="relative flex items-center justify-center"
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full overflow-visible hud-glow"
      >
        {/* OUTER HUD */}

        <HudRing radius={220} strokeWidth={14} duration={35} />

        <HudRing radius={206} strokeWidth={6} reverse duration={28} />

        <HudRing radius={192} strokeWidth={10} duration={22} />

        <HudRing radius={176} strokeWidth={5} reverse duration={18} />

        <HudRing radius={163} strokeWidth={8} duration={30} />

        <HudRing radius={150} strokeWidth={4} reverse duration={20} />

        <HudRing radius={138} strokeWidth={8} duration={26} />

        <HudRing radius={126} strokeWidth={5} reverse duration={16} />

        <HudRing radius={114} strokeWidth={7} duration={30} />

        <HudRing radius={102} strokeWidth={4} reverse duration={12} />

        <HudRing radius={92} strokeWidth={6} duration={18} />

        <HudRing radius={82} strokeWidth={4} reverse duration={15} />

        {/* INNER CIRCLE */}

        <circle
          cx="250"
          cy="250"
          r="58"
          fill="none"
          stroke="#B331F1"
          strokeWidth="2"
          opacity=".6"
        />

        <circle
          cx="250"
          cy="250"
          r="42"
          fill="none"
          stroke="#F13E93"
          strokeWidth="3"
          opacity=".8"
        />

        <circle cx="250" cy="250" r="22" fill="#B331F1" opacity=".85" />
      </svg>
    </div>
  );
};

export default CircleH;
