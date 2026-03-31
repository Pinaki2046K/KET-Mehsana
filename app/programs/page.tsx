"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Stethoscope, BookOpen, Briefcase, Dumbbell,
  Palette, Heart, CheckCircle, Trophy,
} from "lucide-react";
import Link from "next/link";

// ─── Responsive hook ─────────────────────────────────────────────
function useBreakpoint() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return {
    isMobile:  width < 640,
    isTablet:  width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };
}

// ─── Amber tokens ────────────────────────────────────────────────
const amber = {
  deep:   "#7A4800",
  mid:    "#C8862A",
  light:  "#E6A84A",
  pale:   "#FDF3E3",
  cream:  "#FAF6EE",
  border: "#E8D5B0",
  text:   "#3A2800",
  muted:  "#8A6B3A",
};

// ─── Data ────────────────────────────────────────────────────────
const programs = [
  {
    icon: Stethoscope,
    number: "01",
    title: "Early Intervention & Therapy Services",
    subtitle: "Ages 0–6 Years",
    intro: "Early identification and therapy bring significant improvements in a child's development. Our early intervention program helps children reach their potential before critical windows close.",
    features: ["Developmental Assessments", "Speech Therapy", "Occupational Therapy", "Physiotherapy", "Sensory Integration", "Sensory Stimulation", "Parent Guidance & Training"],
    image: "/images/WhatsApp Image 2026-03-31 at 14.09.01 (4).jpeg",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Special Education",
    subtitle: "Individualized Learning",
    intro: "Children are prepared for life through Individualized Education Plans (IEPs) tailored to their unique abilities. Our trained educators create safe, nurturing learning environments.",
    features: ["Individualized Education Plans (IEPs)", "Daily Living Skills Training", "Behavioural Development", "Communication Development", "Safe & Supportive Learning Environment"],
    image: "/images/WhatsApp Image 2026-03-31 at 14.09.01 (10).jpeg",
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Vocational Training",
    subtitle: "Economic Independence",
    intro: "We equip youth with practical skills to achieve economic independence. Our training programs provide real-world skills that open pathways to dignified livelihoods.",
    features: ["File making, paper bags & envelopes", "Doormats & decorative candles", "Clay and colour work", "Packaging work", "Gardening activities", "Daily living & work-readiness skills"],
    image: "/images/WhatsApp Image 2026-03-31 at 14.09.01 (7).jpeg",
  },
  {
    icon: Dumbbell,
    number: "04",
    title: "Sports Development",
    subtitle: "Confidence Through Competition",
    intro: "Sports play a vital role in building confidence, discipline, and leadership skills. Our sports program has produced champions at national and international levels.",
    features: ["Specialized sports coaching", "Regular physical training", "National-level competition preparation", "International Para-Olympic participation", "Discipline & leadership development"],
    image: "/images/WhatsApp Image 2026-03-31 at 14.09.01 (3).jpeg",
    special: { label: "52 Medals Won", sub: "National & International Level" },
  },
  {
    icon: Palette,
    number: "05",
    title: "Recreational Activities",
    subtitle: "Joyful Learning",
    intro: "Recreation is essential for holistic development. Our activities nurture creativity, physical wellness, and social bonds — turning every session into a joyful experience.",
    features: ["Art & craft activities", "Music and dance sessions", "Indoor and outdoor games", "Basic physical exercises & yoga", "Picnics & exposure visits"],
    image: "/images/WhatsApp Image 2026-03-31 at 14.08.59 (3).jpeg",
  },
  {
    icon: Heart,
    number: "06",
    title: "Social & Emotional Development",
    subtitle: "Building Whole Persons",
    intro: "Beyond academics and therapy, we nurture the emotional intelligence and social skills that allow children to connect with others and navigate the world with confidence.",
    features: ["Social skills training", "Emotional regulation support", "Peer interaction programs", "Community inclusion activities", "Family integration workshops"],
    image: "/images/WhatsApp Image 2026-03-31 at 14.09.00 (7).jpeg",
  },
];

// ─── Component ───────────────────────────────────────────────────
export default function ProgramsPage() {
  const bp = useBreakpoint();

  return (
    <>
      <Header />
      <main style={{ fontFamily: "'EB Garamond', Georgia, serif", background: amber.cream }}>

        {/* ════════ HERO ════════ */}
        <section style={{
          background: `linear-gradient(160deg, ${amber.text} 0%, #5C3600 100%)`,
          padding: bp.isMobile ? "7rem 1.5rem 4rem" : "7rem 1.5rem 5rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `radial-gradient(circle, ${amber.mid}22 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }} />
          <div style={{
            position: "absolute", top: "-80px", right: "-80px",
            width: "420px", height: "420px", borderRadius: "50%",
            background: `radial-gradient(circle, ${amber.mid}30 0%, transparent 70%)`,
          }} />

          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: "0.7rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: amber.light, marginBottom: "1.25rem",
              }}
            >Our Programs</motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{
                fontSize: bp.isMobile ? "2.4rem" : "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 700, color: "#FFFBF3", lineHeight: 1.12,
                marginBottom: "1.5rem", letterSpacing: "-0.01em",
              }}
            >Six Pillars of Support</motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{
                fontSize: bp.isMobile ? "1rem" : "1.15rem", lineHeight: 1.8,
                color: `${amber.light}CC`, maxWidth: "560px", margin: "0 auto",
              }}
            >
              Each program addresses a distinct dimension of a child's growth —
              together forming a complete, holistic support system.
            </motion.p>
          </div>
        </section>

        {/* ════════ PROGRAM INDEX STRIP ════════ */}
        <div style={{
          borderBottom: `1px solid ${amber.border}`,
          borderTop: `1px solid ${amber.border}`,
          background: amber.pale,
          overflowX: "auto",
          // Hide scrollbar but keep functionality
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}>
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "flex",
            justifyContent: bp.isMobile ? "flex-start" : "space-between",
            padding: "0 1.5rem",
            minWidth: bp.isMobile ? "max-content" : "auto",
          }}>
            {programs.map((p, i) => (
              <a key={i} href={`#program-${i}`} style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem",
                padding: bp.isMobile ? "1rem 1.25rem" : "1.1rem 1.2rem",
                borderBottom: "3px solid transparent",
                color: amber.muted, textDecoration: "none", transition: "all 0.2s",
                fontSize: "0.72rem", fontFamily: "'Raleway', sans-serif",
                fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = amber.mid;
                  (e.currentTarget as HTMLElement).style.color = amber.deep;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = amber.muted;
                }}
              >
                <p.icon size={18} />
                <span>{p.number}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ════════ PROGRAMS LIST ════════ */}
        <section style={{ padding: bp.isMobile ? "3rem 1.25rem 4rem" : "5rem 1.5rem 6rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {programs.map((prog, i) => (
              <motion.div
                id={`program-${i}`}
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                style={{
                  display: "grid",
                  // Desktop: alternating 2-col. Tablet/Mobile: single column, image always first
                  gridTemplateColumns: bp.isDesktop ? "1fr 1fr" : "1fr",
                  gap: bp.isDesktop ? "5rem" : bp.isTablet ? "2.5rem" : "1.75rem",
                  alignItems: "center",
                  marginBottom: i < programs.length - 1
                    ? (bp.isMobile ? "4rem" : "7rem")
                    : 0,
                  // Only alternate on desktop
                  direction: bp.isDesktop && i % 2 === 1 ? "rtl" : "ltr",
                }}
              >
                {/* ── Image Column ── */}
                <div style={{ direction: "ltr", position: "relative" }}>
                  <div style={{
                    borderRadius: "16px", overflow: "hidden",
                    aspectRatio: "4/3",
                    boxShadow: `0 20px 60px ${amber.mid}25`,
                  }}>
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        filter: "sepia(18%) contrast(1.04)",
                        transition: "transform 0.5s ease",
                        display: "block",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                    />
                  </div>
                  {/* Number badge */}
                  <div style={{
                    position: "absolute",
                    top: bp.isMobile ? "-14px" : "-18px",
                    left: bp.isDesktop && i % 2 === 1 ? "auto" : bp.isMobile ? "12px" : "-18px",
                    right: bp.isDesktop && i % 2 === 1 ? "-18px" : "auto",
                    width: bp.isMobile ? "44px" : "56px",
                    height: bp.isMobile ? "44px" : "56px",
                    borderRadius: "50%",
                    background: amber.mid,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 700,
                    fontSize: bp.isMobile ? "0.72rem" : "0.8rem",
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "0.05em",
                    boxShadow: `0 4px 16px ${amber.mid}55`,
                    zIndex: 2,
                  }}>
                    {prog.number}
                  </div>
                </div>

                {/* ── Content Column ── */}
                <div style={{ direction: "ltr" }}>
                  <p style={{
                    fontSize: "0.68rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: amber.mid, marginBottom: "0.6rem",
                  }}>{prog.subtitle}</p>

                  <h2 style={{
                    fontSize: bp.isMobile ? "1.6rem" : "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 700, color: amber.text, lineHeight: 1.22,
                    marginBottom: "1rem", letterSpacing: "-0.01em",
                  }}>{prog.title}</h2>

                  <div style={{
                    width: "48px", height: "3px", background: amber.mid,
                    borderRadius: "99px", marginBottom: "1.25rem",
                  }} />

                  <p style={{
                    fontSize: "1rem", lineHeight: 1.85, color: "#5A4020", marginBottom: "1.75rem",
                  }}>{prog.intro}</p>

                  {/* Features grid — 2-col on desktop/tablet, 1-col on mobile */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: bp.isMobile ? "1fr" : "1fr 1fr",
                    gap: bp.isMobile ? "0.5rem" : "0.6rem 1.2rem",
                    marginBottom: prog.special ? "1.5rem" : 0,
                  }}>
                    {prog.features.map((f, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <CheckCircle size={14} style={{ color: amber.mid, marginTop: "3px", flexShrink: 0 }} />
                        <span style={{
                          fontSize: "0.88rem", color: "#6A4D20", lineHeight: 1.5,
                          fontFamily: "'Raleway', sans-serif",
                        }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trophy badge */}
                  {prog.special && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "0.85rem",
                      padding: "0.9rem 1.4rem", borderRadius: "10px",
                      background: amber.pale, border: `1px solid ${amber.border}`,
                    }}>
                      <Trophy size={22} style={{ color: amber.mid }} />
                      <div>
                        <div style={{
                          fontWeight: 700, fontSize: "1.05rem", color: amber.deep,
                          fontFamily: "'Raleway', sans-serif",
                        }}>{prog.special.label}</div>
                        <div style={{
                          fontSize: "0.72rem", color: amber.muted,
                          fontFamily: "'Raleway', sans-serif",
                          letterSpacing: "0.05em", textTransform: "uppercase",
                        }}>{prog.special.sub}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════ DIVIDER ════════ */}
        <div style={{
          height: "1px",
          background: `linear-gradient(to right, transparent, ${amber.border}, transparent)`,
          margin: "0 2rem",
        }} />

        {/* ════════ CTA ════════ */}
        <section style={{
          background: `linear-gradient(150deg, ${amber.text} 0%, #8B5200 100%)`,
          padding: bp.isMobile ? "4rem 1.5rem" : "6rem 1.5rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: "-60px", left: "-60px",
            width: "320px", height: "320px", borderRadius: "50%",
            background: `radial-gradient(circle, ${amber.light}22 0%, transparent 70%)`,
          }} />
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p style={{
                fontSize: "0.68rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: amber.light, marginBottom: "1rem",
              }}>Make a Difference</p>

              <h2 style={{
                fontSize: bp.isMobile ? "2rem" : "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700, color: "#FFFBF3", lineHeight: 1.2, marginBottom: "1.25rem",
              }}>Support a Program</h2>

              <p style={{
                fontSize: "1.05rem", lineHeight: 1.8,
                color: `${amber.light}BB`, marginBottom: "2.5rem",
              }}>
                Your contribution directly funds therapy, education, sports coaching,
                and vocational training for children who need it most.
              </p>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/get-involved" style={{
                  background: amber.mid, color: "#fff",
                  padding: "0.9rem 2.2rem", borderRadius: "6px",
                  fontWeight: 700, fontSize: "0.85rem", fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  textDecoration: "none", transition: "background 0.2s",
                }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = amber.light)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = amber.mid)}
                >Donate Now</Link>

                <Link href="/contact" style={{
                  border: `1.5px solid ${amber.light}66`, color: amber.light,
                  padding: "0.9rem 2.2rem", borderRadius: "6px",
                  fontWeight: 600, fontSize: "0.85rem", fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${amber.light}22`;
                    (e.currentTarget as HTMLElement).style.borderColor = amber.light;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = `${amber.light}66`;
                  }}
                >Contact Us</Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}