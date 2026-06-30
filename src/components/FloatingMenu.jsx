import { useState, useRef } from "react"; // ✅ ADDED useRef
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import {
  Home,
  User,
  Settings,
  LogOut,
  House,
  FolderCode,
  Send,
  Rss,
  FileUser,
} from "lucide-react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const constraintsRef = useRef(null); // ✅ ADDED

  const actions = [
    { icon: <FolderCode size={20} />, route: "/project", x: -70, y: 0 },
    { icon: <Settings size={20} />, route: "/skill", x: 0, y: -70 },
    { icon: <LogOut size={20} />, route: "/logout", x: -50, y: -50 },
    { icon: <House size={20} />, route: "/", x: 50, y: 50 },
    { icon: <User size={20} />, route: "/about", x: 70, y: 0 },
    { icon: <Send size={20} />, route: "/contact", x: 0, y: 70 },
    { icon: <Rss size={20} />, route: "/blog", x: -50, y: 50 },
    { icon: <FileUser size={20} />, route: "/resume", x: 50, y: -50 },
  ];

  const handleActionClick = (route) => {
    setOpen(false);
    navigate(route);
  };

  return (
    // ✅ ADDED wrapper (full screen constraint area)
    <div
      ref={constraintsRef}
      className="fixed inset-0 z-[999999] pointer-events-none"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef} // ✅ ADDED (keeps inside screen)
        dragMomentum={true} // ✅ ADDED (smooth momentum)
        dragElastic={0.2} // ✅ ADDED (soft elastic feel)
        dragTransition={{
          // ✅ ADDED (smooth bounce)
          bounceStiffness: 180,
          bounceDamping: 20,
        }}
        whileDrag={{ scale: 1.05 }} // ✅ ADDED
        style={{ touchAction: "none" }} // ✅ ADDED
        className="fixed bottom-10 right-10 z-[999999] pointer-events-auto pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence>
          {open &&
            actions.map((action, i) => (
              <ActionButton
                key={i}
                icon={action.icon}
                x={action.x}
                y={action.y}
                onClick={() => handleActionClick(action.route)}
              />
            ))}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 8px rgba(255, 0, 0, 0.8)",
              "0 0 14px rgba(0, 255, 0, 0.8)",
              "0 0 18px rgba(0, 0, 255, 0.8)",
              "0 0 14px rgba(255, 0, 255, 0.8)",
              "0 0 8px rgba(255, 0, 0, 0.8)",
            ],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-14 h-14 rounded-full bg-gray-600 text-white 
             flex items-center justify-center backdrop-blur-md 
             shadow-2xl active:scale-95 transition"
        >
          <Home size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
}

function ActionButton({ icon, x, y, onClick }) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
      animate={{ scale: 1, opacity: 1, x, y }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute top-0 w-12 h-12 rounded-full bg-gray-800/90 text-white 
                 flex items-center justify-center shadow-xl"
      onClick={onClick}
    >
      {icon}
    </motion.button>
  );
}
