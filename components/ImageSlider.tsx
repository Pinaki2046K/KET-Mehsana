"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Children receiving therapy support",
  },
  {
    url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Special education classroom",
  },
  {
    url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Vocational training program",
  },
  {
    url: "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Children and community",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    if (!isHovered) resetTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered]);

  const prev = () => { setCurrent((c) => (c - 1 + slides.length) % slides.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % slides.length); resetTimer(); };

  return (
    <div
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Slides ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <img
            src={slides[current].url}
            alt={slides[current].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "sepia(8%) contrast(1.06) brightness(0.92)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Left chevron ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(58,34,0,0.35)",
          border: "1px solid rgba(230,168,74,0.25)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF6EE",
          cursor: "pointer",
          zIndex: 10,
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(200,134,42,0.55)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,168,74,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(58,34,0,0.35)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,168,74,0.25)";
        }}
      >
        <ChevronLeft size={18} />
      </button>

      {/* ── Right chevron ── */}
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(58,34,0,0.35)",
          border: "1px solid rgba(230,168,74,0.25)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF6EE",
          cursor: "pointer",
          zIndex: 10,
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(200,134,42,0.55)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,168,74,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(58,34,0,0.35)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,168,74,0.25)";
        }}
      >
        <ChevronRight size={18} />
      </button>

      {/* ── Progress dots ── */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: "3px",
              width: i === current ? "32px" : "16px",
              borderRadius: "99px",
              background: i === current ? "#E6A84A" : "rgba(255,248,230,0.35)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.4s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          zIndex: 10,
          display: "flex",
          alignItems: "baseline",
          gap: "3px",
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.4rem",
          fontWeight: 600,
          color: "#E6A84A",
          lineHeight: 1,
        }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.65rem",
          color: "rgba(255,248,230,0.4)",
          letterSpacing: "0.05em",
        }}>
          /{String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div style={{
          width: "1px",
          height: "36px",
          background: "linear-gradient(to bottom, rgba(230,168,74,0.8), transparent)",
        }} />
        <span style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(230,168,74,0.6)",
          writingMode: "vertical-rl",
        }}>scroll</span>
      </motion.div>
    </div>
  );
}