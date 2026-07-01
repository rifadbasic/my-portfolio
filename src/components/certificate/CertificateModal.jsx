import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, BadgeCheck, CalendarDays } from "lucide-react";
import { useEffect } from "react";

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-5"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d12] shadow-[0_0_60px_rgba(179,49,241,.18)]"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-50 w-11 h-11 rounded-full bg-black/40 hover:bg-[#B331F1] transition flex items-center justify-center"
            >
              <X className="text-white" size={22} />
            </button>

            <div className="grid lg:grid-cols-5">
              {/* Left */}

              <div className="lg:col-span-3 bg-black flex items-center justify-center p-5">
                <motion.img
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              </div>

              {/* Right */}

              <div className="lg:col-span-2 p-8 flex flex-col">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green-500/15 text-green-400 px-3 py-1 text-sm">
                  <BadgeCheck size={17} />
                  Verified
                </span>

                <h2 className="mt-5 text-3xl font-bold text-white">
                  {certificate.title}
                </h2>

                <p className="mt-2 text-lg text-gray-400">
                  {certificate.provider}
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B331F1]/15">
                      <CalendarDays className="text-[#B331F1]" size={22} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Course Duration
                      </p>

                      <h4 className="mt-1 text-lg font-semibold text-white">
                        {certificate.duration}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={certificate.drive}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#B331F1] via-[#9634D7] to-[#F13E93] py-4 font-semibold text-white hover:scale-[1.02] transition"
                  >
                    View Credential
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
