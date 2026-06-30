import React, { useMemo } from "react";

const COLORS = [
  "#B331F1",
  "#A93AE9",
  "#9634D7",
  "#792CA2",
  "#8D31C2",
  "#F13E93",
  "#D63DB5",
];

const GalaxyBg = ({ children }) => {
  const dots = useMemo(() => {
    return Array.from({ length: 260 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.8 + 0.2,
      float: Math.random() > 0.55,
    }));
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#050505]">
      {/* Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className={`absolute rounded-full ${
              dot.float ? "animate-floatDot" : "animate-blinkDot"
            }`}
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              background: dot.color,
              opacity: dot.opacity,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
              boxShadow: `
                0 0 4px ${dot.color},
                0 0 8px ${dot.color}
              `,
            }}
          />
        ))}
      </div>

      {children}

      <style>{`
        @keyframes blinkDot{
          0%,100%{
            opacity:.15;
            transform:scale(.8);
          }
          50%{
            opacity:1;
            transform:scale(1.25);
          }
        }

        @keyframes floatDot{
          0%{
            transform:translateY(0px);
            opacity:.3;
          }
          25%{
            opacity:1;
          }
          50%{
            transform:translateY(-12px);
          }
          75%{
            opacity:.5;
          }
          100%{
            transform:translateY(0px);
            opacity:.3;
          }
        }

        .animate-blinkDot{
          animation:blinkDot ease-in-out infinite;
        }

        .animate-floatDot{
          animation:floatDot ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GalaxyBg;
