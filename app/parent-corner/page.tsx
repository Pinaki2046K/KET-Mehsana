"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Heart, Users, BookOpen, MessageCircle,
  Calendar, Phone, CheckCircle, Plus, Minus, Quote,
} from "lucide-react";
import Link from "next/link";

// ─── Design Tokens ────────────────────────────────────────────────
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
  white:      "#FFFCF5",
};

const font = {
  display: "'Cormorant Garamond', 'Georgia', serif",
  serif:   "'EB Garamond', 'Georgia', serif",
  sans:    "'Raleway', 'Helvetica Neue', sans-serif",
};

// ─── Helpers ──────────────────────────────────────────────────────
const Rule = ({ width = 48, center = true }: { width?: number; center?: boolean }) => (
  <div style={{
    width, height: 2, background: C.amber, borderRadius: 99,
    margin: center ? "0 auto 1.5rem" : "0 0 1.5rem",
  }} />
);

const Eyebrow = ({ children, light = false, center = true }: { children: React.ReactNode; light?: boolean; center?: boolean }) => (
  <p style={{
    fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
    letterSpacing: "0.22em", textTransform: "uppercase",
    color: light ? C.amberLight : C.amber,
    marginBottom: "0.75rem",
    textAlign: center ? "center" : "left",
  }}>{children}</p>
);

// ─── Data ─────────────────────────────────────────────────────────
const services = [
  { icon: Users,         title: "Parent Support Groups",  desc: "Connect with families walking the same journey. Share experiences, find solidarity, and learn together in a safe, compassionate space." },
  { icon: BookOpen,      title: "Training Workshops",     desc: "Hands-on workshops equipping parents with practical skills — from home therapy exercises to understanding your child's IEP and rights." },
  { icon: MessageCircle, title: "Individual Counseling",  desc: "One-on-one guidance from our trained counselors to help you navigate emotional challenges, family dynamics, and your child's evolving needs." },
  { icon: Calendar,      title: "Home Visit Programs",    desc: "Our specialists visit families at home to observe, advise, and train parents in daily care routines that reinforce what children learn at our centre." },
  { icon: Phone,         title: "Helpline Support",       desc: "A dedicated support channel for parents who need quick guidance, emotional support, or help accessing government schemes and benefits." },
  { icon: Heart,         title: "Family Therapy Sessions",desc: "Sessions that strengthen family bonds and help siblings, grandparents, and extended family understand and support the child with sensitivity." },
];

const tips = [
  "Trust the process — development in children with intellectual disabilities is non-linear, but it is always happening.",
  "Celebrate small wins every single day. A new word. A new skill. A new connection. These are not small — they are everything.",
  "Don't isolate yourself. Connect with other families. Share. Listen. Learn. The community you build will be your greatest strength.",
  "Your child reads your energy. The more peaceful and confident you are, the safer they feel to grow.",
  "You are not a perfect parent — you are a present one. And presence is the most powerful therapy you can give.",
];

const faqs = [
  { q: "How do I enroll my child at KET India?", a: "Contact us via email or phone, and our intake team will guide you through the assessment and enrollment process. We conduct a developmental assessment to understand your child's needs before designing their personalized program." },
  { q: "My child has recently been diagnosed — what should I do first?", a: "Don't wait — early intervention makes the biggest difference. Reach out to us immediately. We will help you understand the diagnosis, connect you with our therapy team, and start your child on an Individualized Education Plan as soon as possible." },
  { q: "Are parent training sessions mandatory?", a: "They are strongly encouraged. Research shows that children make 3× faster progress when parents actively participate in therapy techniques at home. Our staff will guide you step by step — no expertise required." },
  { q: "What government schemes can my child benefit from?", a: "There are several central and state schemes — including disability certificates, pensions, assistive devices, and scholarships. Our team will help you apply for all applicable benefits and navigate the system." },
  { q: "Is there a cost for programs?", a: "KET India operates on a sliding-scale model. We believe no child should be denied care due to financial constraints. Please contact us to discuss your situation — our social worker will work with you." },
];

// ─── FAQ Accordion item ───────────────────────────────────────────
function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.07 }}
      style={{
        background: C.white,
        border: `1px solid ${open ? C.borderMid : C.border}`,
        borderRadius: "10px",
        overflow: "hidden",
        transition: "border-color 0.25s",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: "1.5rem", padding: "1.5rem 1.75rem",
          textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: font.display, fontWeight: 700,
          fontSize: "1.1rem", color: C.textMain, lineHeight: 1.4,
        }}>{faq.q}</span>
        <span style={{
          flexShrink: 0, width: "28px", height: "28px",
          borderRadius: "50%",
          background: open ? C.amber : `${C.amber}14`,
          border: `1px solid ${open ? C.amber : C.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.25s",
        }}>
          {open
            ? <Minus size={13} style={{ color: C.white }} />
            : <Plus  size={13} style={{ color: C.amber }} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              padding: "0 1.75rem 1.5rem",
              borderTop: `1px solid ${C.border}`,
              paddingTop: "1.25rem",
            }}>
              <p style={{
                fontFamily: font.serif, fontSize: "1rem",
                lineHeight: 1.85, color: C.textBody,
              }}>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function ParentCornerPage() {
  return (
    <>
      <Header />
      <main style={{ background: C.cream, fontFamily: font.serif, color: C.textMain }}>

        {/* ════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════ */}
        <section style={{
          background: `linear-gradient(160deg, ${C.deep} 0%, ${C.darkBrown} 100%)`,
          padding: "8rem 1.5rem 5.5rem",
          position: "relative", overflow: "hidden",
        }}>
          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(circle, ${C.amber}18 1px, transparent 1px)`,
            backgroundSize: "38px 38px",
          }} />
          {/* Warm glow */}
          <div style={{
            position: "absolute", bottom: "-100px", left: "-60px",
            width: "420px", height: "420px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amber}20 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Eyebrow light>Parent Corner</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 1.08,
                letterSpacing: "-0.015em", color: C.white, marginBottom: "1.5rem",
              }}
            >
              You Are<br />
              <em style={{ fontStyle: "italic", color: C.amberGlow }}>Not Alone.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              style={{
                fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.85,
                color: `${C.amberLight}BB`, maxWidth: "520px", margin: "0 auto",
              }}
            >
              Raising a child with an intellectual disability is a journey of extraordinary love.
              We walk beside you with guidance, training, and an unwavering community of support.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PULLQUOTE
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: "14px",
                padding: "3.5rem 4rem",
                textAlign: "center",
                position: "relative",
                boxShadow: `0 20px 60px rgba(58,34,0,0.06)`,
              }}
            >
              {/* Amber top rule */}
              <div style={{
                position: "absolute", top: 0, left: "3rem", right: "3rem",
                height: "3px",
                background: `linear-gradient(to right, transparent, ${C.amber}, ${C.amberLight}, ${C.amber}, transparent)`,
                borderRadius: "0 0 3px 3px",
              }} />

              <Quote size={32} style={{ color: `${C.amber}55`, margin: "0 auto 1.25rem" }} />

              <p style={{
                fontFamily: font.display, fontStyle: "italic",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                lineHeight: 1.65, color: C.textMain,
                marginBottom: "1.75rem",
              }}>
                "We understand that when your child struggles, you struggle too. That's why we don't just serve children — we embrace their entire family as part of our KET India community."
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
                <Heart size={14} style={{ color: C.amber }} />
                <span style={{
                  fontFamily: font.sans, fontSize: "0.68rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: C.textMuted,
                }}>
                  KET India — Our Promise to Every Family
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SERVICES GRID
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.parchment, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>For Families</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>Our Services for Parents</h2>
              <Rule />
              <p style={{ fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted, maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
                Six ways we support you in becoming your child's most powerful advocate and first teacher.
              </p>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5px", background: C.border,
              borderRadius: "12px", overflow: "hidden",
              boxShadow: `0 20px 60px rgba(58,34,0,0.07)`,
            }}>
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{
                    background: C.white, padding: "2.5rem 2.25rem",
                    position: "relative", overflow: "hidden",
                  }}
                  whileHover={{ background: C.pale } as any}
                >
                  {/* Watermark number */}
                  <span style={{
                    position: "absolute", top: "0.5rem", right: "1rem",
                    fontFamily: font.display, fontSize: "4.5rem", fontWeight: 700,
                    color: C.border, lineHeight: 1, userSelect: "none", pointerEvents: "none",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Left amber hover bar */}
                  <motion.div
                    style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "0%", background: C.amber }}
                    whileHover={{ height: "100%" } as any}
                    transition={{ duration: 0.22 }}
                  />

                  {/* Icon */}
                  <div style={{
                    width: "46px", height: "46px", borderRadius: "8px",
                    background: `${C.amber}14`, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <s.icon size={20} style={{ color: C.amber }} />
                  </div>

                  <h3 style={{
                    fontFamily: font.display, fontWeight: 700, fontSize: "1.2rem",
                    color: C.textMain, marginBottom: "0.7rem", lineHeight: 1.3,
                  }}>{s.title}</h3>

                  <p style={{
                    fontFamily: font.sans, fontSize: "0.83rem",
                    lineHeight: 1.75, color: C.textMuted,
                  }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            TIPS — editorial left-border list
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "flex-start" }}>

              {/* Left label */}
              <div style={{ position: "sticky", top: "7rem" }}>
                <Eyebrow center={false}>Guidance</Eyebrow>
                <h2 style={{
                  fontFamily: font.display, fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.2,
                  color: C.textMain, marginBottom: "1rem",
                }}>
                  A Word<br />
                  <em style={{ fontStyle: "italic", color: C.amber }}>for Parents</em>
                </h2>
                <Rule center={false} />
                <p style={{
                  fontFamily: font.sans, fontSize: "0.83rem",
                  lineHeight: 1.8, color: C.textMuted,
                }}>
                  Five principles we share with every family who walks through our doors — drawn from 30 years of experience.
                </p>
              </div>

              {/* Right tips */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {tips.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                    style={{
                      display: "flex", gap: "1.1rem", alignItems: "flex-start",
                      background: C.white,
                      border: `1px solid ${C.border}`,
                      borderLeft: `3px solid ${C.amber}`,
                      borderRadius: "0 8px 8px 0",
                      padding: "1.4rem 1.5rem",
                      boxShadow: `0 4px 16px rgba(58,34,0,0.04)`,
                    }}
                  >
                    <CheckCircle size={16} style={{ color: C.amber, flexShrink: 0, marginTop: "3px" }} />
                    <p style={{
                      fontFamily: font.serif, fontSize: "1rem",
                      lineHeight: 1.8, color: C.textBody,
                    }}>{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FAQ ACCORDION
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.parchment, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <Eyebrow>FAQs</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>Common Questions</h2>
              <Rule />
              <p style={{ fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted, lineHeight: 1.7 }}>
                Answers to what parents ask us most often.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════════ */}
        <section style={{
          background: `linear-gradient(150deg, ${C.deep} 0%, ${C.darkBrown} 100%)`,
          padding: "6rem 1.5rem",
          position: "relative", overflow: "hidden",
        }}>
          {/* Glow blob */}
          <div style={{
            position: "absolute", top: "-80px", right: "-80px",
            width: "380px", height: "380px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amber}18 0%, transparent 68%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "620px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

              <div style={{
                width: "52px", height: "52px", borderRadius: "50%",
                background: `${C.amber}22`, border: `1px solid ${C.amber}45`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}>
                <Heart size={22} style={{ color: C.amberLight }} />
              </div>

              <Eyebrow light>We Are Here</Eyebrow>

              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.15,
                color: C.white, marginBottom: "1.25rem",
              }}>
                Reach Out to Us
              </h2>

              <div style={{ width: "40px", height: "2px", background: C.amber, borderRadius: 99, margin: "0 auto 1.25rem" }} />

              <p style={{
                fontFamily: font.serif, fontSize: "1.05rem", lineHeight: 1.85,
                color: `${C.amberLight}AA`, marginBottom: "2.5rem",
              }}>
                Our team is ready to listen, support, and guide your family — every step of the way.
              </p>

              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: C.amber, color: C.white,
                  padding: "0.95rem 2.6rem", borderRadius: "5px",
                  fontFamily: font.sans, fontWeight: 700, fontSize: "0.78rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Contact Our Team
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}