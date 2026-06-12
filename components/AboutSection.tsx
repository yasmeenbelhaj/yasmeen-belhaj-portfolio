"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Typography Token */
const bodyTextClass =
  "text-[1.05rem] leading-[1.7] text-brand-black/75 md:text-[1.18rem] lg:text-[1.28rem]";

export default function AboutSection() {
  return (
    /* About Section */
    <section id="about" className="bg-brand-cream text-brand-black">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        
        {/* Content Column */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="font-['the-seasons'] text-5xl font-bold leading-[1.1] tracking-wide">
            About
          </h2>

          {/* Section Divider */}
          <div className="mt-6 h-[2px] w-16 bg-brand-terracotta/80" />

          {/* Body Content */}
          <div className={`mt-8 space-y-6 ${bodyTextClass}`}>
            <p>
              I’m a front-end engineer and interactive systems designer
              interested in building digital experiences that feel clear,
              thoughtful and engaging.
            </p>

            <p>
              My work spans responsive web applications, real-time interaction
              and spatial digital experiences. I enjoy translating complex
              information and source material into intuitive interfaces through
              research-led UX, interaction design and technical implementation.
            </p>

            <p>
              I’m especially drawn to data-driven, spatial and immersive
              projects that help people explore information, understand
              relationships and engage with ideas in new ways.
            </p>

            <p>
              I bring a structured, analytical approach to development, shaped
              by professional experience in problem solving and stakeholder
              communication.
            </p>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-md"
        >
          {/* Portrait Container */}
          <div className="overflow-hidden rounded-[2rem] border border-brand-sand/50 bg-brand-sand/10 shadow-lg">
            
            {/* Portrait Image */}
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait of Yasmeen Belhaj"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
