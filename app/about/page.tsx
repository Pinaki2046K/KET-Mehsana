"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Target, Users, Globe, Eye, Flag, BookOpen, CheckCircle } from "lucide-react";

// ─── Design Tokens ───────────────────────────────────────────────
const C = {
  cream:      "#FAF6EE",
  parchment:  "#F3ECD8",
  pale:       "#FDF9F0",
  border:     "#E2CFA0",
  borderMid:  "#C9B07A",
  amber:      "#C8862A",
  amberLight: "#E6A84A",
  amberGlow:  "#F5C878",
  deep:       "#3A2200",
  darkBrown:  "#5C3600",
  textMain:   "#2E1A00",
  textBody:   "#5A3E1B",
  textMuted:  "#8A6B3A",
  gold:       "#B8860B",
  white:      "#FFFCF5",
};

const font = {
  display: "'Cormorant Garamond', 'Georgia', serif",
  serif:   "'EB Garamond', 'Georgia', serif",
  sans:    "'Raleway', 'Helvetica Neue', sans-serif",
};

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

// ─── Shared Helpers ──────────────────────────────────────────────
const Rule = ({ width = 56, color = C.amber }: { width?: number; color?: string }) => (
  <div style={{ width, height: 2, background: color, borderRadius: 99, marginBottom: "1.5rem" }} />
);

const Eyebrow = ({ children, color = C.amber }: { children: React.ReactNode; color?: string }) => (
  <p style={{
    fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
    letterSpacing: "0.22em", textTransform: "uppercase",
    color, marginBottom: "0.75rem",
  }}>{children}</p>
);

// ─── Data ────────────────────────────────────────────────────────
const values = [
  { icon: Heart,  title: "Compassion First", desc: "We see ability where others see limitation. Every child is met with empathy, dignity, and genuine care." },
  { icon: Target, title: "Lasting Impact",   desc: "We measure success not by services delivered, but by the sustainable change created in each child's life." },
  { icon: Users,  title: "Family-Centered",  desc: "Families are our partners. We empower parents and caregivers with training, counseling, and unwavering support." },
  { icon: Globe,  title: "Rights-Based",     desc: "Every child has a right to education, therapy, and inclusion. We advocate fiercely for this right every single day." },
];

const milestones = [
  { year: "1994",  event: "Founded in Mahesana, Gujarat with a small group of dedicated educators and families." },
  { year: "2000s", event: "Expanded therapy services — speech, occupational, and physiotherapy — reaching hundreds of children." },
  { year: "2010s", event: "Sports program launched. Students begin competing at state and national levels." },
  { year: "2015",  event: "First international Para-Olympic medal won by a KET India student — a historic milestone." },
  { year: "2020s", event: "25,000+ children supported. Vocational training empowers 258+ youth toward self-employment." },
  { year: "Today", event: "Registered under National Trust, PWD Act 1995, 12A & 80G — expanding our impact district-wide." },
];

// ─── Component ───────────────────────────────────────────────────
export default function AboutPage() {
  const bp = useBreakpoint();

  return (
    <>
      <Header />
      <main style={{ background: C.cream, fontFamily: font.serif, color: C.textMain }}>

        {/* ════════ HERO ════════ */}
        <section style={{
          background: `linear-gradient(145deg, ${C.deep} 0%, ${C.darkBrown} 100%)`,
          padding: bp.isMobile ? "9rem 1.5rem 5rem" : "11rem 2rem 7rem",
          position: "relative", overflow: "hidden",
        }}>
          {[300, 500, 700].map((size, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute", top: "50%", left: "50%",
                width: size, height: size, borderRadius: "50%",
                border: `1px solid ${C.amber}${String(12 - i * 3).padStart(2, "0")}`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Eyebrow color={C.amberLight}>About Us</Eyebrow>
              <h1 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: bp.isMobile ? "2.8rem" : "clamp(3rem, 6vw, 4.5rem)",
                lineHeight: 1.1, color: C.white, marginBottom: "1.5rem", letterSpacing: "-0.015em",
              }}>Who We Are</h1>
              <p style={{
                fontFamily: font.serif,
                fontSize: bp.isMobile ? "1rem" : "1.15rem",
                lineHeight: 1.85, color: "rgba(255,240,200,0.8)",
                maxWidth: "680px", margin: "0 auto",
              }}>
                Khodiyar Education Trust — a transformative platform creating sustainable, meaningful change
                in the lives of children with intellectual disabilities since our founding in Mahesana, Gujarat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════ OUR STORY ════════ */}
        <section style={{ padding: bp.isMobile ? "4rem 0" : "7rem 0" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: bp.isDesktop ? "1fr 1fr" : "1fr",
              gap: bp.isDesktop ? "6rem" : "3rem",
              alignItems: "center",
            }}>
              <motion.div
                initial={{ opacity: 0, x: bp.isDesktop ? -40 : 0, y: bp.isDesktop ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
              >
                <Eyebrow>Our Story</Eyebrow>
                <h2 style={{
                  fontFamily: font.display, fontWeight: 700,
                  fontSize: bp.isMobile ? "2rem" : "clamp(2.2rem, 4vw, 3.2rem)",
                  lineHeight: 1.15, color: C.textMain, marginBottom: "1.5rem", letterSpacing: "-0.01em",
                }}>
                  More Than a <br />
                  <em style={{ fontStyle: "italic", color: C.amber }}>Service Organization.</em>
                </h2>
                <Rule />
                <div style={{ fontSize: "1.05rem", lineHeight: 1.9, color: C.textBody, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <p>Khodiyar Education Trust is a dedicated non-profit organization supporting children with intellectual disabilities and their families. It is a <strong style={{ color: C.textMain }}>Registered Trust under Bombay Public Charitable Trust Act, E-3086, Mahesana, Gujarat.</strong></p>
                  <p>It is not just a social service organization — it is a <strong style={{ color: C.textMain }}>transformative platform</strong> that brings meaningful change to their lives.</p>
                  <p>We work with children who are often overlooked by society. At KET India, these children are nurtured through special education, therapy, skill development, and sports, enabling them to move towards self-respect, confidence, and independence.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: bp.isDesktop ? 40 : 0, y: bp.isDesktop ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                style={{ position: "relative", marginBottom: bp.isMobile ? "3rem" : "0" }}
              >
                <div style={{
                  position: "absolute", top: "18px", left: "-18px",
                  width: "100%", height: "100%",
                  border: `2px solid ${C.border}`,
                  borderRadius: "12px", zIndex: 0,
                }} />
                <div style={{
                  borderRadius: "12px", overflow: "hidden",
                  aspectRatio: "4/5", position: "relative", zIndex: 1,
                  boxShadow: `0 30px 80px rgba(58,34,0,0.15)`,
                }}>
                  <img
                    src="/images/WhatsApp Image 2026-03-31 at 14.09.00 (2).jpeg"
                    alt="KET India students"
                    loading="lazy" decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(12%) contrast(1.05)", display: "block" }}
                  />
                </div>
                {/* Badge — repositioned on mobile so it doesn't overflow */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: bp.isMobile ? "-2.5rem" : "-1.5rem",
                    right: bp.isMobile ? "0" : "-1.5rem",
                    zIndex: 2,
                    background: C.deep, padding: "1.25rem 1.75rem", borderRadius: "8px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25)", border: `1px solid ${C.amber}40`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.8rem", color: C.white, lineHeight: 1, marginBottom: "0.25rem" }}>12A & 80G</div>
                  <div style={{ fontFamily: font.sans, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.amberLight }}>Tax Exemption Certified</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ VISION, MISSION & PHILOSOPHY ════════ */}
        <section style={{ background: C.pale, padding: bp.isMobile ? "4rem 1.5rem" : "7rem 2rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              // Desktop: Vision left (narrow) + Mission right (wide)
              // Tablet/Mobile: single column
              gridTemplateColumns: bp.isDesktop ? "1fr 2fr" : "1fr",
              gap: "1.5rem",
            }}>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{
                  background: `linear-gradient(145deg, ${C.deep} 0%, ${C.darkBrown} 100%)`,
                  padding: bp.isMobile ? "2rem" : "3rem",
                  borderRadius: "16px", color: C.white,
                  border: `1px solid ${C.borderMid}40`,
                }}
              >
                <Eye size={32} style={{ color: C.amberLight, marginBottom: "1.5rem" }} />
                <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>Our Vision</h3>
                <p style={{ fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(255,246,220,0.85)" }}>
                  A society where every individual with intellectual disability lives with{" "}
                  <strong style={{ color: C.amberGlow, fontWeight: 600 }}>dignity and independence.</strong>
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{
                  background: C.white, padding: bp.isMobile ? "2rem" : "3rem", borderRadius: "16px",
                  border: `1px solid ${C.border}`, boxShadow: `0 12px 40px rgba(58,34,0,0.04)`,
                }}
              >
                <Flag size={32} style={{ color: C.amber, marginBottom: "1.5rem" }} />
                <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "2rem", color: C.textMain, marginBottom: "1.5rem" }}>Our Mission</h3>
                <div style={{ display: "grid", gridTemplateColumns: bp.isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                  {[
                    "Provide quality education and therapy to every child",
                    "Promote self-reliance and economic independence",
                    "Empower families through training and counseling",
                    "Encourage social inclusion in every community",
                  ].map((m, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle size={18} style={{ color: C.amber, flexShrink: 0, marginTop: "0.25rem" }} />
                      <p style={{ fontFamily: font.sans, fontSize: "0.9rem", lineHeight: 1.6, color: C.textBody, fontWeight: 500 }}>{m}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy — full width on all breakpoints */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{
                  gridColumn: "1 / -1",
                  background: C.parchment, padding: bp.isMobile ? "2rem" : "3rem", borderRadius: "16px",
                  border: `1px solid ${C.borderMid}60`,
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}
              >
                <BookOpen size={32} style={{ color: C.amber, marginBottom: "1.5rem" }} />
                <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "2rem", color: C.textMain, marginBottom: "1rem" }}>Our Philosophy</h3>
                <p style={{ fontFamily: font.serif, fontSize: bp.isMobile ? "1.05rem" : "1.2rem", lineHeight: 1.8, color: C.textBody, maxWidth: "800px" }}>
                  We follow a <strong style={{ color: C.textMain }}>holistic, rights-based approach</strong> that focuses on abilities rather than limitations. Every child deserves respect, opportunity, and a chance to thrive — regardless of the challenges they face.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ VALUES ════════ */}
        <section style={{ padding: bp.isMobile ? "4rem 1.5rem" : "7rem 2rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>What Guides Us</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: bp.isMobile ? "1.9rem" : "clamp(2rem, 4vw, 3rem)",
                color: C.textMain, letterSpacing: "-0.01em", marginBottom: "1rem",
              }}>Our Core Values</h2>
              <p style={{ fontFamily: font.serif, fontSize: "1.1rem", color: C.textMuted }}>
                These principles shape every decision, every program, and every interaction.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: bp.isMobile ? "1fr" : bp.isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: "1.5px", background: C.border,
              borderRadius: "12px", overflow: "hidden",
              boxShadow: `0 20px 60px rgba(58,34,0,0.06)`,
            }}>
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ backgroundColor: C.pale }}
                  style={{
                    background: C.white, padding: "3rem 2rem",
                    textAlign: "center", transition: "background 0.3s",
                  }}
                >
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "12px",
                    background: `${C.amber}15`, border: `1px solid ${C.amber}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}>
                    <v.icon size={26} style={{ color: C.amber }} />
                  </div>
                  <h3 style={{
                    fontFamily: font.display, fontWeight: 700, fontSize: "1.4rem",
                    color: C.textMain, marginBottom: "1rem", lineHeight: 1.2,
                  }}>{v.title}</h3>
                  <p style={{ fontFamily: font.sans, fontSize: "0.85rem", lineHeight: 1.7, color: C.textMuted }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIMELINE ════════ */}
        <section style={{ background: C.parchment, padding: bp.isMobile ? "4rem 1.5rem" : "7rem 2rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Our Journey</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: bp.isMobile ? "1.9rem" : "clamp(2rem, 4vw, 3rem)",
                color: C.textMain, letterSpacing: "-0.01em", marginBottom: "1rem",
              }}>Milestones That Matter</h2>
              <p style={{ fontFamily: font.serif, fontSize: "1.1rem", color: C.textBody }}>
                From humble beginnings in Mahesana to national recognition.
              </p>
            </div>

            <div style={{ position: "relative", paddingLeft: "2rem" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", top: 0, bottom: 0, left: "7px", width: "2px",
                background: `linear-gradient(to bottom, ${C.amber}40, ${C.amber})`,
              }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1 }}
                    style={{ position: "relative" }}
                  >
                    {/* Node dot */}
                    <div style={{
                      position: "absolute", left: "-2.35rem", top: "0.3rem",
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: i === milestones.length - 1 ? C.white : C.amber,
                      border: `3px solid ${i === milestones.length - 1 ? C.amber : C.parchment}`,
                      boxShadow: i === milestones.length - 1 ? `0 0 0 4px ${C.amber}30` : "none",
                      zIndex: 2,
                    }} />
                    {/* Card */}
                    <div style={{
                      background: C.white, padding: bp.isMobile ? "1.25rem 1.5rem" : "1.75rem 2rem",
                      borderRadius: "12px", border: `1px solid ${C.border}`,
                      boxShadow: `0 10px 30px rgba(58,34,0,0.04)`,
                    }}>
                      <div style={{
                        fontFamily: font.display, fontWeight: 700, fontSize: "1.6rem",
                        color: C.amber, marginBottom: "0.5rem", lineHeight: 1,
                      }}>{m.year}</div>
                      <p style={{ fontFamily: font.sans, fontSize: "0.9rem", lineHeight: 1.7, color: C.textBody }}>{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}