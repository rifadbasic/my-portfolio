import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { certificateData } from "../../data/certificateData";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

const CertificationSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section id="certifications" className="relative py-24 px-5 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#B331F1]/40 bg-[#B331F1]/10 px-5 py-2">
            <Award className="text-[#B331F1]" size={20} />

            <span className="font-medium text-white">My Certifications</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Verified Learning Journey
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Every certificate represents a milestone in my continuous learning
            journey, showcasing practical skills, dedication, and hands-on
            experience in modern web development.
          </p>
        </motion.div>

        {/* Grid */}

        <div
          className="
          mx-auto
          max-w-7xl

          grid

          gap-8

          sm:grid-cols-1

          md:grid-cols-2

          xl:grid-cols-3
        "
        >
          {certificateData.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <CertificateCard
                certificate={certificate}
                onPreview={setSelectedCertificate}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
};

export default CertificationSection;
