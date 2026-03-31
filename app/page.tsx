"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Users, Heart, Award, BookOpen,
  Stethoscope, Dumbbell, Briefcase, Palette,
  ArrowRight, CheckCircle, Star, Trophy, Quote,
} from "lucide-react";

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

// ─── Data ────────────────────────────────────────────────────────
const stats = [
  { icon: Users,   value: 25000, label: "Children Supported",  suffix: "+" },
  { icon: Heart,   value: 4500,  label: "Families Reached",    suffix: "+" },
  { icon: Award,   value: 52,    label: "Sports Medals",       suffix: ""  },
  { icon: BookOpen,value: 258,   label: "Youth Self-Employed", suffix: "+" },
];

const programs = [
  { icon: Stethoscope, number: "01", title: "Early Intervention",    desc: "Developmental assessments, speech, occupational & physiotherapy for children aged 0–6.", href: "/programs" },
  { icon: BookOpen,    number: "02", title: "Special Education",      desc: "Individualized Education Plans tailored to each child's unique abilities and needs.",      href: "/programs" },
  { icon: Heart,       number: "03", title: "Therapy Services",       desc: "Speech, physiotherapy, sensory integration and comprehensive parent guidance programs.",    href: "/programs" },
  { icon: Briefcase,   number: "04", title: "Vocational Training",    desc: "Skill-building in crafts, packaging, and daily living to promote economic independence.",  href: "/programs" },
  { icon: Dumbbell,    number: "05", title: "Sports Development",     desc: "Coaching that builds confidence and discipline — with national & international medal winners.", href: "/programs" },
  { icon: Palette,     number: "06", title: "Recreational Activities",desc: "Art, music, dance, yoga and outdoor activities for joyful, holistic development.",          href: "/programs" },
];

const pillars = [
  "Therapy Services",
  "Special Education",
  "Social & Emotional Development",
  "Family Support & Counseling",
];

const medals = [
  { emoji: "🥇", label: "World Para-Olympic Medal Winners" },
  { emoji: "🏅", label: "52 Medals — National & International" },
  { emoji: "🏆", label: "13 Sports Disciplines" },
];

// ─── Shared helpers ───────────────────────────────────────────────
const Rule = ({ width = 56, color = C.amber }: { width?: number; color?: string }) => (
  <div style={{ width, height: 2, background: color, borderRadius: 99, marginBottom: "1.5rem" }} />
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p style={{
    fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
    letterSpacing: "0.22em", textTransform: "uppercase",
    color: C.amber, marginBottom: "0.75rem",
  }}>{children}</p>
);

// ─── Component ────────────────────────────────────────────────────
export default function Home() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY     = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpac  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Header />
      <main style={{ background: C.cream, fontFamily: font.serif, color: C.textMain }}>

        {/* ════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <ImageSlider />
          </div>

          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "linear-gradient(105deg, rgba(15,7,0,0.78) 0%, rgba(15,7,0,0.48) 42%, rgba(15,7,0,0.12) 72%, transparent 100%)",
          }} />

          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "180px",
            zIndex: 1, pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(10,4,0,0.45), transparent)",
          }} />

          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",
            zIndex: 1, pointerEvents: "none",
            background: `linear-gradient(to top, ${C.cream} 0%, transparent 100%)`,
          }} />

          <motion.div
            style={{
              position: "absolute", inset: 0, zIndex: 2,
              display: "flex", flexDirection: "column", justifyContent: "center",
              padding: "0 6vw",
              opacity: heroOpac,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.4rem" }}
            >
              <div style={{ width: "32px", height: "1px", background: C.amberLight }} />
              <span style={{
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.62rem",
                letterSpacing: "0.24em", textTransform: "uppercase", color: C.amberLight,
              }}>
                Khodiyar Education Trust · Est. 1994
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(3rem, 7vw, 5.6rem)",
                lineHeight: 1.05, letterSpacing: "-0.015em",
                color: C.white, marginBottom: "1.6rem",
                maxWidth: "700px",
              }}
            >
              Every Child<br />
              <em style={{ fontStyle: "italic", color: C.amberGlow }}>Deserves</em>{" "}to Bloom.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.75 }}
              style={{
                fontFamily: font.serif, fontSize: "1.08rem", lineHeight: 1.85,
                color: "rgba(255,246,220,0.78)", maxWidth: "460px", marginBottom: "2.5rem",
              }}
            >
              A non-profit transforming lives of children with intellectual disabilities
              through education, therapy, and dignified opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.7 }}
              style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}
            >
              <Link href="/get-involved" style={{
                background: C.amber, color: C.white,
                padding: "0.95rem 2.4rem", borderRadius: "5px",
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.76rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Donate Now
              </Link>
              <Link href="/programs" style={{
                border: "1.5px solid rgba(230,168,74,0.45)",
                color: C.amberGlow,
                padding: "0.95rem 2.4rem", borderRadius: "5px",
                fontFamily: font.sans, fontWeight: 600, fontSize: "0.76rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", backdropFilter: "blur(4px)",
              }}>
                Our Programs
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
            style={{
              position: "absolute", bottom: "10%", right: "5%",
              display: "flex", flexDirection: "column", gap: "0.75rem",
              alignItems: "flex-end",
            }}
          >
            {[
              { val: "30+", label: "Years of Service" },
              { val: "12A", label: "80G Certified" },
            ].map((b, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: i === 0 ? C.amber : C.deep,
                  padding: "0.8rem 1.4rem", borderRadius: "8px",
                  textAlign: "center", boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                  border: `1px solid ${C.amberLight}40`,
                }}
              >
                <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.6rem", color: C.white, lineHeight: 1 }}>{b.val}</div>
                <div style={{ fontFamily: font.sans, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,248,230,0.7)", marginTop: "3px" }}>{b.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════════════════
            INTRODUCTION
        ════════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "7rem 0" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

              <motion.div
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
              >
                <Eyebrow>Who We Are</Eyebrow>
                <h2 style={{
                  fontFamily: font.display, fontWeight: 700,
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.15,
                  color: C.textMain, marginBottom: "1.5rem", letterSpacing: "-0.01em",
                }}>
                  Beyond Care —<br />
                  <em style={{ fontStyle: "italic", color: C.amber }}>We Create Opportunity.</em>
                </h2>
                <Rule />
                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: C.textBody, marginBottom: "1.1rem" }}>
                  Khodiyar Education Trust is a dedicated non-profit working for children with intellectual disabilities. We go beyond care — we create pathways to growth, dignity, and independence.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: C.textBody, marginBottom: "2.25rem" }}>
                  Through education, therapy, and skill development, we help children lead meaningful and empowered lives — a transformative platform, not just a social service.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2.5rem" }}>
                  {pillars.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
                    >
                      <CheckCircle size={15} style={{ color: C.amber, flexShrink: 0 }} />
                      <span style={{ fontFamily: font.sans, fontSize: "0.88rem", color: C.textBody }}>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/about" style={{
                    background: C.textMain, color: C.white,
                    padding: "0.85rem 2rem", borderRadius: "5px",
                    fontFamily: font.sans, fontWeight: 700, fontSize: "0.76rem",
                    letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
                  }}>Learn About Us</Link>
                  <Link href="/programs" style={{
                    border: `1.5px solid ${C.borderMid}`,
                    color: C.textMain, background: "transparent",
                    padding: "0.85rem 2rem", borderRadius: "5px",
                    fontFamily: font.sans, fontWeight: 600, fontSize: "0.76rem",
                    letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
                  }}>Explore Programs</Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                style={{ position: "relative" }}
              >
                <div style={{
                  position: "absolute", top: "-18px", right: "-18px",
                  width: "100%", height: "100%",
                  border: `2px solid ${C.border}`,
                  borderRadius: "12px", zIndex: 0,
                }} />
                <div style={{
                  borderRadius: "12px", overflow: "hidden",
                  aspectRatio: "4/5", position: "relative", zIndex: 1,
                  boxShadow: `0 30px 80px rgba(58,34,0,0.18)`,
                }}>
                  <img
                    src="/images/WhatsApp Image 2026-03-31 at 14.09.00 (8).jpeg"
                    alt="Children at KET India"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(12%) contrast(1.05)" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                    background: "linear-gradient(to top, rgba(58,34,0,0.55), transparent)",
                  }} />
                  <div style={{
                    position: "absolute", bottom: "1.75rem", left: "1.75rem", right: "1.75rem",
                  }}>
                    <Quote size={18} style={{ color: C.amberGlow, marginBottom: "0.4rem" }} />
                    <p style={{
                      fontFamily: font.display, fontStyle: "italic",
                      fontSize: "1rem", color: C.white, lineHeight: 1.6,
                    }}>
                      "Transforming potential into possibility, one child at a time."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            STATS
        ════════════════════════════════════════════════════════ */}
        <section style={{
          background: C.textMain,
          padding: "6rem 2rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `radial-gradient(circle, ${C.amber}18 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
          <div style={{
            position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
            width: "600px", height: "300px", borderRadius: "50%",
            background: `radial-gradient(ellipse, ${C.amber}20 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Our Reach</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)", color: C.white,
                letterSpacing: "-0.01em",
              }}>
                Thirty Years of Impact
              </h2>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{
                    textAlign: "center", padding: "2.5rem 1.5rem",
                    borderRight: i < stats.length - 1 ? `1px solid ${C.amber}25` : "none",
                    position: "relative",
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: `${C.amber}20`, border: `1px solid ${C.amber}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}>
                    <stat.icon size={20} style={{ color: C.amberLight }} />
                  </div>
                  <div style={{
                    fontFamily: font.display, fontWeight: 700,
                    fontSize: "3.2rem", color: C.white, lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}>
                    <AnimatedCounter value={stat.value} />{stat.suffix}
                  </div>
                  <div style={{
                    fontFamily: font.sans, fontSize: "0.72rem", fontWeight: 600,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: `${C.amberLight}99`,
                  }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            PROGRAMS
        ════════════════════════════════════════════════════════ */}
        <section style={{ background: C.pale, padding: "7rem 2rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "3rem", alignItems: "flex-end", marginBottom: "4rem",
            }}>
              <div>
                <Eyebrow>What We Do</Eyebrow>
                <h2 style={{
                  fontFamily: font.display, fontWeight: 700,
                  fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1.15,
                  color: C.textMain, letterSpacing: "-0.01em",
                }}>
                  Six Pillars of<br />
                  <em style={{ fontStyle: "italic", color: C.amber }}>Support & Growth</em>
                </h2>
              </div>
              <div>
                <Rule />
                <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.textBody }}>
                  Each program addresses a distinct dimension of a child's development — together forming a complete, holistic support system that walks with families every step of the way.
                </p>
                <Link href="/programs" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  marginTop: "1.25rem",
                  fontFamily: font.sans, fontWeight: 700, fontSize: "0.76rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: C.amber, textDecoration: "none",
                }}>
                  View All Programs <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5px", background: C.border,
              borderRadius: "12px", overflow: "hidden",
              boxShadow: `0 20px 60px rgba(58,34,0,0.08)`,
            }}>
              {programs.map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.07 }}
                  whileHover="hover"
                  variants={{
                    hover: { backgroundColor: C.pale }
                  }}
                  style={{
                    background: C.white, padding: "2.5rem 2.25rem",
                    position: "relative", overflow: "hidden",
                    cursor: "pointer", transition: "background 0.25s",
                  }}
                >
                  <span style={{
                    position: "absolute", top: "1rem", right: "1.25rem",
                    fontFamily: font.display, fontSize: "4rem", fontWeight: 700,
                    color: `${C.border}`, lineHeight: 1, userSelect: "none",
                    pointerEvents: "none",
                  }}>{prog.number}</span>

                  <motion.div
                    style={{
                      position: "absolute", top: 0, left: 0, width: "3px", height: "0%",
                      background: C.amber,
                    }}
                    variants={{
                      hover: { height: "100%" }
                    }}
                    transition={{ duration: 0.25 }}
                  />

                  <div style={{
                    width: "44px", height: "44px", borderRadius: "8px",
                    background: `${C.amber}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <prog.icon size={20} style={{ color: C.amber }} />
                  </div>

                  <h3 style={{
                    fontFamily: font.display, fontWeight: 700, fontSize: "1.25rem",
                    color: C.textMain, marginBottom: "0.75rem", lineHeight: 1.3,
                  }}>{prog.title}</h3>

                  <p style={{
                    fontFamily: font.sans, fontSize: "0.83rem", lineHeight: 1.75,
                    color: C.textMuted, marginBottom: "1.5rem",
                  }}>{prog.desc}</p>

                  <Link href={prog.href} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontFamily: font.sans, fontWeight: 700, fontSize: "0.72rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: C.amber, textDecoration: "none",
                  }}>
                    Learn More <ArrowRight size={12} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            PHOTO GRID
        ════════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "7rem 2rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <Eyebrow>Our Impact in Action</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em",
              }}>Moments of Transformation</h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.85fr 1fr",
              gridTemplateRows: "280px 280px",
              gap: "12px",
              borderRadius: "12px", overflow: "hidden",
            }}>
              {[
                { src: "images/WhatsApp Image 2026-03-31 at 14.09.00 (7).jpeg",  label: "Outings",       row: "span 2" },
                { src: "images/WhatsApp Image 2026-03-31 at 14.09.01 (9).jpeg",  label: "Special Education",      row: "span 1" },
                { src: "images/WhatsApp Image 2026-03-31 at 14.09.01 (10).jpeg",  label: "Sports & Champions",     row: "span 1" },
                { src: "images/WhatsApp Image 2026-03-31 at 14.09.00 (2).jpeg",  label: "Arts & Recreation",      row: "span 1" },
                { src: "images/WhatsApp Image 2026-03-31 at 14.09.03 (1).jpeg",  label: "Family & Community",     row: "span 1" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{
                    gridRow: img.row,
                    position: "relative", overflow: "hidden", cursor: "pointer",
                  }}
                  whileHover="hovered"
                >
                  <motion.img
                    src={img.src} alt={img.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(10%) contrast(1.04)", display: "block" }}
                    variants={{ hovered: { scale: 1.07 } }}
                    transition={{ duration: 0.55 }}
                  />
                  <motion.div
                    style={{ position: "absolute", inset: 0, background: "rgba(30,15,0,0)" }}
                    variants={{ hovered: { background: "rgba(30,15,0,0.42)" } }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    style={{
                      position: "absolute", bottom: "1.25rem", left: "1.25rem",
                      opacity: 0,
                    }}
                    variants={{ hovered: { opacity: 1, y: 0 } }}
                    initial={{ y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span style={{
                      fontFamily: font.sans, fontSize: "0.68rem", fontWeight: 700,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: C.amberGlow,
                      background: "rgba(0,0,0,0.4)", padding: "0.3rem 0.7rem",
                      borderRadius: "3px", backdropFilter: "blur(4px)",
                    }}>{img.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/gallery" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.76rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: C.amber, textDecoration: "none",
                borderBottom: `1.5px solid ${C.border}`, paddingBottom: "3px",
              }}>
                View Full Gallery <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            MEDALS CALLOUT
        ════════════════════════════════════════════════════════ */}
        <section style={{
          background: `linear-gradient(145deg, ${C.deep} 0%, ${C.darkBrown} 100%)`,
          padding: "7rem 2rem",
          position: "relative", overflow: "hidden",
        }}>
          {[300, 500, 700].map((size, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute", top: "50%", left: "50%",
                width: size, height: size,
                borderRadius: "50%",
                border: `1px solid ${C.amber}${String(12 - i * 3).padStart(2, '0')}`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                background: `${C.amber}25`, border: `1px solid ${C.amber}50`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.75rem",
              }}>
                <Trophy size={28} style={{ color: C.amberLight }} />
              </div>

              <p style={{
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: C.amberLight, marginBottom: "1rem",
              }}>Sporting Excellence</p>

              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.1,
                color: C.white, marginBottom: "1.25rem", letterSpacing: "-0.015em",
              }}>
                From Margins<br />
                <em style={{ fontStyle: "italic", color: C.amberGlow }}>to Medals.</em>
              </h2>

              <p style={{
                fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.85,
                color: "rgba(255,240,200,0.7)", marginBottom: "3rem", maxWidth: "540px", margin: "0 auto 3rem",
              }}>
                Our students have made India proud on global platforms — proof that with the right support, every child can achieve the extraordinary.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                {medals.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12 }}
                    whileHover={{ y: -3 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.7rem",
                      padding: "0.8rem 1.4rem", borderRadius: "40px",
                      background: `${C.amber}15`,
                      border: `1px solid ${C.amber}35`,
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{m.emoji}</span>
                    <span style={{
                      fontFamily: font.sans, fontWeight: 600, fontSize: "0.8rem",
                      letterSpacing: "0.04em", color: C.amberLight,
                    }}>{m.label}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/impact" style={{
                background: C.amber, color: C.white,
                padding: "0.95rem 2.6rem", borderRadius: "5px",
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.78rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Read Our Impact Story
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════════════ */}
        <section style={{ background: C.parchment, padding: "7rem 2rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: C.white,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: `0 24px 70px rgba(58,34,0,0.1)`,
                border: `1px solid ${C.border}`,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div style={{ position: "relative", minHeight: "400px" }}>
                <img
                  src="images/WhatsApp Image 2026-03-31 at 14.09.02 (12).jpeg"
                  alt="Children learning"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(15%) contrast(1.04)" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to right, transparent 40%, rgba(255,252,245,0.95) 100%)",
                }} />
              </div>

              <div style={{ padding: "4rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Heart size={32} style={{ color: C.amber, marginBottom: "1.5rem" }} />
                <Eyebrow>Make a Difference</Eyebrow>
                <h2 style={{
                  fontFamily: font.display, fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.2,
                  color: C.textMain, marginBottom: "1.25rem",
                }}>
                  Be the Reason<br />
                  <em style={{ fontStyle: "italic", color: C.amber }}>a Child Smiles.</em>
                </h2>
                <Rule width={40} />
                <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: C.textBody, marginBottom: "2.25rem" }}>
                  Your support directly funds therapy, education, sports coaching, and vocational training for children who deserve every opportunity to thrive.
                </p>
                <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                  <Link href="/get-involved" style={{
                    background: C.amber, color: C.white,
                    padding: "0.9rem 2rem", borderRadius: "5px",
                    fontFamily: font.sans, fontWeight: 700, fontSize: "0.76rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}>Donate Now</Link>
                  <Link href="/get-involved" style={{
                    border: `1.5px solid ${C.borderMid}`,
                    color: C.textMain, background: "transparent",
                    padding: "0.9rem 2rem", borderRadius: "5px",
                    fontFamily: font.sans, fontWeight: 600, fontSize: "0.76rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none",
                  }}>Get Involved</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}