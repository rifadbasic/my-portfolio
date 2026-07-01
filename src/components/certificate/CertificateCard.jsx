import { motion } from "framer-motion";
import { ExternalLink, BadgeCheck } from "lucide-react";
import { CalendarRange } from "lucide-react";

const CertificateCard = ({ certificate, onPreview }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className={`
group relative overflow-hidden rounded-3xl
border backdrop-blur-xl
bg-white/5 border-white/10
hover:border-[#B331F1]/60
transition-all duration-500
hover:shadow-[0_0_40px_rgba(179,49,241,.25)]
min-h-[500px]
flex flex-col

${certificate.featured ? "xl:col-span-2" : ""}
`}
    >
      {/* Animated Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#B331F1]/15 blur-[90px]" />
      </div>

      {/* Shine */}
      <div
        className="
        absolute
        -left-[150%]
        top-0
        h-full
        w-1/2
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        group-hover:left-[160%]
        transition-all
        duration-[1400ms]
      "
      />

      {/* Certificate Image */}

      <div
        className="relative h-[280px] overflow-hidden cursor-pointer"
        onClick={() => onPreview(certificate)}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="
      w-full
      h-full
      object-contain
      bg-black/20
      transition-transform
      duration-700
      group-hover:scale-105
    "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
          "
        />

        {/* Preview Button */}

        <button
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            opacity-0
            group-hover:opacity-100

            px-5
            py-2

            rounded-full

            bg-[#B331F1]
            text-white

            font-medium

            transition
          "
        >
          Preview
        </button>
      </div>

      {/* Content */}

      <div className="p-2">
        <div className="flex flex-col flex-1 p-6">
          <div>
            <h3 className="text-xl font-bold text-white leading-snug">
              {certificate.title}
            </h3>

            <div className="mt-2 flex justify-between items-center gap-3 flex-wrap">
              <p className="text-gray-400 font-medium">
                {certificate.provider}
              </p>

              {certificate.verified && (
                <div
                  className="
          inline-flex
          items-center
          gap-1.5

          rounded-full

          border border-emerald-400/20

          bg-emerald-500/10

          px-2.5
          py-1

          text-[11px]
          font-medium

          backdrop-blur-md
        "
                >
                  <BadgeCheck
                    size={14}
                    className="text-emerald-400 fill-emerald-400"
                  />

                  <span className="text-emerald-300">Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <CalendarRange size={16} className="text-[#B331F1]" />

            <div>
              <p className="text-xs text-gray-500 uppercase">Duration</p>

              <p className="text-sm font-medium text-gray-300">
                {certificate.duration}
              </p>
            </div>
          </div>

          <a
            href={certificate.drive}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2

            rounded-xl

            bg-gradient-to-r
            from-[#B331F1]
            to-[#F13E93]

            px-4
            py-2

            text-sm
            font-semibold
            text-white

            transition

            hover:scale-105
          "
          >
            Credential
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
