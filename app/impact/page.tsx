'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Briefcase, Award, BookOpen, Stethoscope, Trophy, Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

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
  gold:       "#B8860B",
};

const font = {
  display: "'Cormorant Garamond', 'Georgia', serif",
  serif:   "'EB Garamond', 'Georgia', serif",
  sans:    "'Raleway', 'Helvetica Neue', sans-serif",
};

// ─── Shared Helpers ───────────────────────────────────────────────
const Rule = ({ width = 48 }: { width?: number }) => (
  <div style={{ width, height: 2, background: C.amber, borderRadius: 99, margin: "0 auto 1.5rem" }} />
);

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p style={{
    fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
    letterSpacing: "0.22em", textTransform: "uppercase",
    color: light ? C.amberLight : C.amber, marginBottom: "0.75rem",
    textAlign: "center",
  }}>{children}</p>
);

// ─── Data ─────────────────────────────────────────────────────────
const stats = [
  { icon: Users,       value: 25000, suffix: '+', label: 'Children Supported',    desc: 'Education, aids, certification, pension support and more' },
  { icon: Heart,       value: 4500,  suffix: '+', label: 'Families Empowered',    desc: 'Through counseling, training and ongoing support' },
  { icon: Stethoscope, value: 280,   suffix: '+', label: 'Therapy Beneficiaries', desc: 'Speech therapy & physiotherapy services received' },
  { icon: Briefcase,   value: 258,   suffix: '',  label: 'Youth Self-Employed',   desc: 'Vocational graduates now earning dignified livelihoods' },
  { icon: Trophy,      value: 52,    suffix: '',  label: 'Sports Medals',         desc: 'Won at national and international competitions' },
  { icon: Star,        value: 13,    suffix: '',  label: 'International Medals',  desc: 'Including World Para-Olympic achievements' },
];

const areas = [
  { icon: BookOpen,    label: 'Education',  desc: 'Individualized education plans helping children learn, grow, and prepare for life.' },
  { icon: Stethoscope, label: 'Therapy',    desc: 'Speech, physio, and occupational therapy transforming developmental outcomes.' },
  { icon: Briefcase,   label: 'Livelihood', desc: 'Vocational training opening doors to dignity, independence, and income.' },
  { icon: Users,       label: 'Inclusion',  desc: 'Community programs ensuring every child is seen, heard, and valued.' },
];

const medals = [
  { event: 'World Para-Olympic Games',   achievement: 'Medal Winner',          level: 'International', flag: '🌍' },
  { event: 'National Sports Championship', achievement: 'Multiple Medals',     level: 'National',      flag: '🇮🇳' },
  { event: 'State Para Games',           achievement: 'Gold, Silver & Bronze', level: 'State',         flag: '🏆' },
  { event: 'District Sports Meet',       achievement: 'Consistent Champions',  level: 'District',      flag: '🥇' },
];

const successStories = [
  "A child who couldn't speak, now performing on stage",
  'A young man selling his craft products at district markets',
  "A national medal winner who was once told she couldn't compete",
];

// ─── Page ─────────────────────────────────────────────────────────
export default function ImpactPage() {
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
          {/* Dot grid texture */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(circle, ${C.amber}18 1px, transparent 1px)`,
            backgroundSize: "38px 38px",
          }} />
          {/* Amber glow */}
          <div style={{
            position: "absolute", top: "-80px", right: "-80px",
            width: "500px", height: "500px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amber}22 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Eyebrow light>Our Impact</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 1.08,
                letterSpacing: "-0.015em", color: C.white,
                marginBottom: "1.5rem",
              }}
            >
              Every Number<br />
              <em style={{ fontStyle: "italic", color: C.amberGlow }}>is a Life.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              style={{
                fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.85,
                color: `${C.amberLight}BB`, maxWidth: "560px", margin: "0 auto",
              }}
            >
              These are not just statistics. Behind every number is a child who now speaks, walks, learns, earns, or stands on a podium holding a medal for India.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            STATS GRID
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Our Reach</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>Numbers That Inspire</h2>
              <Rule />
              <p style={{
                fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted,
                maxWidth: "440px", margin: "0 auto", lineHeight: 1.7,
              }}>Three decades of relentless work, measured in lives changed.</p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5px",
              background: C.border,
              borderRadius: "12px", overflow: "hidden",
              boxShadow: `0 20px 60px rgba(58,34,0,0.07)`,
            }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{
                    background: C.white,
                    padding: "2.75rem 2rem",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  whileHover={{ background: C.pale } as any}
                >
                  {/* Watermark number */}
                  <span style={{
                    position: "absolute", top: "0.5rem", right: "1rem",
                    fontFamily: font.display, fontSize: "5rem", fontWeight: 700,
                    color: C.border, lineHeight: 1, userSelect: "none", pointerEvents: "none",
                  }}>{String(i + 1).padStart(2, "0")}</span>

                  {/* Icon */}
                  <div style={{
                    width: "50px", height: "50px", borderRadius: "10px",
                    background: `${C.amber}14`, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}>
                    <stat.icon size={22} style={{ color: C.amber }} />
                  </div>

                  {/* Number */}
                  <div style={{
                    fontFamily: font.display, fontWeight: 700,
                    fontSize: "3.5rem", lineHeight: 1,
                    color: C.amber, marginBottom: "0.4rem",
                  }}>
                    <AnimatedCounter value={stat.value} />{stat.suffix}
                  </div>

                  {/* Label */}
                  <div style={{
                    fontFamily: font.sans, fontWeight: 700,
                    fontSize: "0.82rem", letterSpacing: "0.04em",
                    color: C.textMain, marginBottom: "0.5rem", textTransform: "uppercase",
                  }}>
                    {stat.label}
                  </div>

                  {/* Desc */}
                  <p style={{ fontFamily: font.sans, fontSize: "0.78rem", color: C.textMuted, lineHeight: 1.65 }}>
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing line */}
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{
                marginTop: "2.5rem", textAlign: "center",
                fontFamily: font.display, fontStyle: "italic",
                fontSize: "1.4rem", color: C.amber,
              }}
            >
              Every number represents a life transformed.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FOUR DIMENSIONS — editorial horizontal layout
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.parchment, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Areas of Change</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>Four Dimensions of Impact</h2>
              <Rule />
              <p style={{ fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted, maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                We work across education, therapy, livelihood, and social inclusion to create complete transformation.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {areas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{
                    background: C.white,
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: `0 8px 32px rgba(58,34,0,0.06)`,
                    border: `1px solid ${C.border}`,
                  }}
                  whileHover={{ y: -4 } as any}
                >
                  {/* Amber top bar */}
                  <div style={{ height: "3px", background: `linear-gradient(to right, ${C.amber}, ${C.amberLight})` }} />

                  <div style={{ padding: "2rem 1.75rem" }}>
                    {/* Number */}
                    <p style={{
                      fontFamily: font.display, fontSize: "2.5rem", fontWeight: 700,
                      color: C.border, lineHeight: 1, marginBottom: "1rem",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    {/* Icon */}
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "8px",
                      background: `${C.amber}14`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1rem",
                    }}>
                      <area.icon size={20} style={{ color: C.amber }} />
                    </div>

                    <h3 style={{
                      fontFamily: font.display, fontWeight: 700,
                      fontSize: "1.3rem", color: C.textMain, marginBottom: "0.65rem",
                    }}>
                      {area.label}
                    </h3>
                    <p style={{ fontFamily: font.sans, fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.7 }}>
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SPORTS MEDALS — dark amber brand section
        ════════════════════════════════════════════════════ */}
        <section style={{
          background: `linear-gradient(145deg, ${C.deep} 0%, ${C.darkBrown} 100%)`,
          padding: "7rem 1.5rem", position: "relative", overflow: "hidden",
        }}>
          {/* Pulsing rings */}
          {[260, 440, 620].map((size, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute", top: "50%", left: "50%",
                width: size, height: size, borderRadius: "50%",
                border: `1px solid ${C.amber}${14 - i * 3}`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow light>Sports Excellence</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.1,
                color: C.white, letterSpacing: "-0.015em",
                marginBottom: "0.75rem",
              }}>
                From Margins<br />
                <em style={{ fontStyle: "italic", color: C.amberGlow }}>to Medals.</em>
              </h2>
              <div style={{ width: "48px", height: "2px", background: C.amber, borderRadius: 99, margin: "0 auto 1.25rem" }} />
              <p style={{ fontFamily: font.sans, fontSize: "0.88rem", color: `${C.amberLight}88`, maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
                Our students have not only progressed in life — they have brought pride to the nation on global platforms.
              </p>
            </div>

            {/* Medal cards grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {medals.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 } as any}
                  style={{
                    background: `rgba(255,248,230,0.04)`,
                    border: `1px solid ${C.amber}30`,
                    borderRadius: "10px",
                    padding: "1.5rem 1.75rem",
                    display: "flex", gap: "1.1rem", alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: "46px", height: "46px", borderRadius: "8px", flexShrink: 0,
                    background: `${C.amber}20`,
                    border: `1px solid ${C.amber}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Trophy size={20} style={{ color: C.amberLight }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                      <span style={{ fontSize: "1rem" }}>{m.flag}</span>
                      <span style={{
                        fontFamily: font.sans, fontWeight: 700,
                        fontSize: "0.62rem", letterSpacing: "0.16em",
                        textTransform: "uppercase", color: C.amberLight,
                      }}>{m.level}</span>
                    </div>
                    <h3 style={{
                      fontFamily: font.display, fontWeight: 700,
                      fontSize: "1.15rem", color: C.white, lineHeight: 1.3,
                      marginBottom: "0.25rem",
                    }}>
                      {m.event}
                    </h3>
                    <p style={{ fontFamily: font.sans, fontSize: "0.8rem", color: `rgba(255,240,200,0.55)` }}>
                      {m.achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tally callout */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{
                background: `${C.amber}12`,
                border: `1px solid ${C.amber}35`,
                borderRadius: "12px",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              <Award size={36} style={{ color: C.amberLight, margin: "0 auto 1rem" }} />
              <p style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: C.white, lineHeight: 1.4,
              }}>
                52 Medals across{" "}
                <em style={{ fontStyle: "italic", color: C.amberGlow }}>13 disciplines</em>{" "}
                at National and International levels
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SUCCESS STORIES
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.pale, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Success Stories</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>Voices of Change</h2>
              <Rule />
              <p style={{ fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted, maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
                Real stories of children and families whose lives have been transformed through KET India.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              {successStories.map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{
                    background: C.white,
                    border: `1px solid ${C.border}`,
                    borderRadius: "10px",
                    padding: "2.25rem",
                    position: "relative",
                    boxShadow: `0 8px 32px rgba(58,34,0,0.05)`,
                  }}
                >
                  {/* Amber top rule */}
                  <div style={{
                    position: "absolute", top: 0, left: "2.25rem", right: "2.25rem",
                    height: "2px", background: C.amber, borderRadius: "0 0 2px 2px",
                  }} />

                  <Quote size={24} style={{ color: `${C.amber}60`, marginBottom: "1.1rem" }} />

                  <p style={{
                    fontFamily: font.serif, fontStyle: "italic",
                    fontSize: "1.05rem", lineHeight: 1.8, color: C.textBody,
                    marginBottom: "1.5rem",
                  }}>
                    "{story}"
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{
                      width: "28px", height: "28px", borderRadius: "50%",
                      background: `${C.amber}18`, border: `1px solid ${C.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Star size={12} style={{ color: C.amber }} />
                    </div>
                    <span style={{
                      fontFamily: font.sans, fontSize: "0.72rem",
                      fontWeight: 600, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: C.textMuted,
                    }}>
                      Full Story Coming Soon
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}