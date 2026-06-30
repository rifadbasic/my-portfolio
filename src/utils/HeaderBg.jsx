import React from "react";
import { Code2, Database, Laptop, Palette, Rocket } from "lucide-react";

const icons = [
  {
    Icon: Code2,
    style: { top: "12%", left: "22%" },
    duration: 6,
    delay: 0,
  },
  {
    Icon: Rocket,
    style: { top: "8%", right: "8%" },
    duration: 7,
    delay: 1,
  },
  {
    Icon: Laptop,
    style: { bottom: "8%", left: "18%" },
    duration: 8,
    delay: 2,
  },
  {
    Icon: Database,
    style: { top: "58%", right: "10%" },
    duration: 6.5,
    delay: 1.5,
  },
  {
    Icon: Palette,
    style: { top: "36%", left: "50%" },
    duration: 7.5,
    delay: 0.8,
  },
];

const HeaderBg = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%,100%{
            transform:translateY(0px) rotate(0deg);
            opacity:50;
          }
          50%{
            transform:translateY(-18px) rotate(8deg);
            opacity:50;
          }
        }

        .floating-icon{
          position:absolute;
          animation:float var(--duration) ease-in-out infinite;
          animation-delay:var(--delay);
        }

        .floating-icon svg{
          width:45px;
          height:45px;
          stroke:url(#headerGradient);
          stroke-width:1.8;
          fill:none;
          filter:drop-shadow(0 0 12px rgba(179,49,241,.8))
                 drop-shadow(0 0 24px rgba(241,62,147,.45));
        }
      `}</style>

      {/* SVG Gradient */}
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="headerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#B331F1" />
            <stop offset="25%" stopColor="#A93AE9" />
            <stop offset="50%" stopColor="#9634D7" />
            <stop offset="75%" stopColor="#8D31C2" />
            <stop offset="100%" stopColor="#F13E93" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {icons.map(({ Icon, style, duration, delay }, i) => (
          <div
            key={i}
            className="floating-icon"
            style={{
              ...style,
              "--duration": `${duration}s`,
              "--delay": `${delay}s`,
            }}
          >
            <Icon />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderBg;
