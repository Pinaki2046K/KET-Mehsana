"use client";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }: Props) {
  return (
    <motion.div
      className={`mb-14 ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#7B9E87" }}>
          {eyebrow}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          color: light ? "#FAF7F2" : "#1C1C1E",
        }}
      >
        {title}
      </h2>
      <div className={`deco-line mb-5 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: light ? "rgba(250,247,242,0.75)" : "#8A8580", marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
