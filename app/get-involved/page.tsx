"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Building2, Wrench, Users, QrCode, Copy, CheckCircle, ArrowRight } from "lucide-react";

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
const Eyebrow = ({ children, light = false, center = true }: { children: React.ReactNode; light?: boolean; center?: boolean }) => (
  <p style={{
    fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
    letterSpacing: "0.22em", textTransform: "uppercase",
    color: light ? C.amberLight : C.amber,
    marginBottom: "0.75rem",
    textAlign: center ? "center" : "left",
  }}>{children}</p>
);

const Rule = ({ width = 48, center = true }: { width?: number; center?: boolean }) => (
  <div style={{
    width, height: 2, background: C.amber, borderRadius: 99,
    margin: center ? "0 auto 1.5rem" : "0 0 1.5rem",
  }} />
);

// ─── Data ─────────────────────────────────────────────────────────
const engagements = [
  {
    icon: Heart,
    number: "01",
    title: "Sponsor a Child / Program",
    desc: "Support the complete development of a child — covering education, therapy, and daily care costs for a full year.",
    impact: "₹500/month supports one child's therapy sessions",
  },
  {
    icon: Building2,
    number: "02",
    title: "Infrastructure Development",
    desc: "Support therapy rooms, classrooms, sensory labs, and equipment that enable our specialists to deliver world-class care.",
    impact: "₹50,000 can equip a full therapy room",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Skill Development Projects",
    desc: "Fund livelihood programs that train youth in vocational skills — giving them tools for economic independence.",
    impact: "₹25,000 trains 5 youth for 3 months",
  },
  {
    icon: Users,
    number: "04",
    title: "Employee / CSR Engagement",
    desc: "Bring your team to volunteer, contribute skill-based expertise, or partner under CSR for measurable social impact.",
    impact: "Tax benefits under Section 80G available",
  },
];

const bankDetails: { key: string; label: string; value: string }[] = [
  { key: "bank",        label: "Bank",           value: "HDFC Bank" },
  { key: "branch",      label: "Branch",         value: "Modhera Road, Mahesana" },
  { key: "accountName", label: "Account Name",   value: "Khodiyar Education Trust" },
  { key: "accountNo",   label: "Account Number", value: "50100200865123" },
  { key: "ifsc",        label: "IFSC Code",      value: "HDFC00037778" },
];

// ─── Page ─────────────────────────────────────────────────────────
export default function GetInvolvedPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

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
          {/* Amber glow — top right */}
          <div style={{
            position: "absolute", top: "-80px", right: "-80px",
            width: "500px", height: "500px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amber}22 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />
          {/* Amber glow — bottom left */}
          <div style={{
            position: "absolute", bottom: "-60px", left: "-60px",
            width: "320px", height: "320px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amberLight}14 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Eyebrow light>Get Involved</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 1.08,
                letterSpacing: "-0.015em", color: C.white, marginBottom: "1.5rem",
              }}
            >
              Be the<br />
              <em style={{ fontStyle: "italic", color: C.amberGlow }}>Reason.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              style={{
                fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.85,
                color: `${C.amberLight}BB`, maxWidth: "520px", margin: "0 auto 2.5rem",
              }}
            >
              Your support is not just a contribution — it can transform a child's future. Join us in creating an inclusive and equitable society.
            </motion.p>

            {/* Scroll to donate CTA */}
            <motion.a
              href="#donate"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: C.amber, color: C.white,
                padding: "0.95rem 2.4rem", borderRadius: "5px",
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.78rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Donate Now <ArrowRight size={14} />
            </motion.a>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PULLQUOTE
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p style={{
                fontFamily: font.display, fontStyle: "italic", fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2.1rem)", lineHeight: 1.55,
                color: C.textMain, marginBottom: "1.5rem",
              }}>
                "When you invest in a child with a disability, you don't just change one life —
                you change a family, a community, and a future."
              </p>
              <div style={{ width: "48px", height: "2px", background: C.amber, borderRadius: 99, margin: "0 auto" }} />
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            ENGAGEMENT GRID
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.parchment, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Ways to Help</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>
                Individual & CSR Engagement
              </h2>
              <Rule />
              <p style={{ fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted, maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
                You are always welcome to contribute your passion, resources, and support in any way that fits.
              </p>
            </div>

            {/* 2×2 bordered grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "1.5px", background: C.border,
              borderRadius: "12px", overflow: "hidden",
              boxShadow: `0 20px 60px rgba(58,34,0,0.07)`,
            }}>
              {engagements.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{
                    background: C.white, padding: "2.75rem 2.5rem",
                    position: "relative", overflow: "hidden",
                  }}
                  whileHover={{ background: C.pale } as any}
                >
                  {/* Watermark number */}
                  <span style={{
                    position: "absolute", top: "0.5rem", right: "1.25rem",
                    fontFamily: font.display, fontSize: "5rem", fontWeight: 700,
                    color: C.border, lineHeight: 1, userSelect: "none", pointerEvents: "none",
                  }}>{e.number}</span>

                  {/* Left amber hover bar */}
                  <motion.div
                    style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "0%", background: C.amber }}
                    whileHover={{ height: "100%" } as any}
                    transition={{ duration: 0.22 }}
                  />

                  {/* Icon */}
                  <div style={{
                    width: "50px", height: "50px", borderRadius: "9px",
                    background: `${C.amber}14`, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.3rem",
                  }}>
                    <e.icon size={22} style={{ color: C.amber }} />
                  </div>

                  <h3 style={{
                    fontFamily: font.display, fontWeight: 700, fontSize: "1.3rem",
                    color: C.textMain, marginBottom: "0.7rem", lineHeight: 1.3,
                  }}>
                    {e.title}
                  </h3>

                  <p style={{
                    fontFamily: font.sans, fontSize: "0.83rem",
                    lineHeight: 1.75, color: C.textMuted, marginBottom: "1.5rem",
                  }}>
                    {e.desc}
                  </p>

                  {/* Impact pill */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.4rem 0.85rem", borderRadius: "40px",
                    background: `${C.amber}10`, border: `1px solid ${C.border}`,
                  }}>
                    <CheckCircle size={12} style={{ color: C.amber, flexShrink: 0 }} />
                    <span style={{ fontFamily: font.sans, fontSize: "0.74rem", fontWeight: 600, color: C.amber }}>
                      {e.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            DONATION SECTION
        ════════════════════════════════════════════════════ */}
        <section id="donate" style={{ background: C.cream, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Eyebrow>Donate Now</Eyebrow>
              <h2 style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)", color: C.textMain,
                letterSpacing: "-0.01em", marginBottom: "0.75rem",
              }}>
                Make Your Contribution
              </h2>
              <Rule />
              <p style={{ fontFamily: font.sans, fontSize: "0.9rem", color: C.textMuted, maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                100% of your donation goes toward programs that directly benefit children. Tax exemption available under 80G.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>

              {/* ── QR Card ── */}
              <motion.div
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: "14px", overflow: "hidden",
                  boxShadow: `0 20px 60px rgba(58,34,0,0.07)`,
                }}
              >
                {/* Header bar */}
                <div style={{
                  padding: "1.75rem 2rem 1.5rem",
                  borderBottom: `1px solid ${C.border}`,
                  background: C.pale,
                  display: "flex", alignItems: "center", gap: "0.75rem",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "7px",
                    background: `${C.amber}18`, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <QrCode size={17} style={{ color: C.amber }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.4rem", color: C.textMain, lineHeight: 1.2 }}>
                      Scan & Pay
                    </h3>
                    <p style={{ fontFamily: font.sans, fontSize: "0.7rem", color: C.textMuted, marginTop: "1px" }}>
                      UPI · PhonePe · Google Pay · Paytm
                    </p>
                  </div>
                </div>

                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <p style={{ fontFamily: font.sans, fontSize: "0.82rem", color: C.textMuted, marginBottom: "1.75rem", lineHeight: 1.7 }}>
                    Scan the QR code with any UPI app to donate instantly — fast, secure, and paperless.
                  </p>

                  {/* QR frame */}
                  <motion.div
                    animate={{ boxShadow: [
                      `0 0 0 0 ${C.amber}00`,
                      `0 0 0 8px ${C.amber}18`,
                      `0 0 0 0 ${C.amber}00`,
                    ] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: "200px", height: "200px",
                      margin: "0 auto 1.5rem",
                      borderRadius: "14px",
                      border: `2px solid ${C.border}`,
                      background: C.parchment,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/payment.png"
                      alt="Payment QR Code"
                      style={{ width: "180px", height: "180px", objectFit: "contain", borderRadius: "10px" }}
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = "none";
                        // if (t.parentElement)
                        //   t.parentElement.innerHTML = `<div style="text-align:center;padding:1rem"><div style="font-size:2.5rem">📱</div><p style="color:${C.textMuted};font-size:0.7rem;margin-top:0.5rem;font-family:Raleway,sans-serif;line-height:1.5">QR code will appear here<br/>Add payment.png to /public</p></div>`;
                      }}
                    />
                  </motion.div>

                  {/* UPI pills */}
                  <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["UPI", "PhonePe", "GPay", "Paytm"].map((app) => (
                      <span key={app} style={{
                        fontFamily: font.sans, fontSize: "0.65rem", fontWeight: 700,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        color: C.amber, border: `1px solid ${C.border}`,
                        padding: "0.25rem 0.65rem", borderRadius: "3px",
                        background: `${C.amber}08`,
                      }}>{app}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── Bank Transfer Card ── */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: "14px", overflow: "hidden",
                  boxShadow: `0 20px 60px rgba(58,34,0,0.07)`,
                }}
              >
                {/* Header bar */}
                <div style={{
                  padding: "1.75rem 2rem 1.5rem",
                  borderBottom: `1px solid ${C.border}`,
                  background: C.pale,
                  display: "flex", alignItems: "center", gap: "0.75rem",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "7px",
                    background: `${C.amber}18`, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Building2 size={17} style={{ color: C.amber }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.4rem", color: C.textMain, lineHeight: 1.2 }}>
                      Bank Transfer
                    </h3>
                    <p style={{ fontFamily: font.sans, fontSize: "0.7rem", color: C.textMuted, marginTop: "1px" }}>
                      HDFC Bank · NEFT · RTGS · IMPS
                    </p>
                  </div>
                </div>

                <div style={{ padding: "1.75rem 2rem" }}>
                  <p style={{ fontFamily: font.sans, fontSize: "0.82rem", color: C.textMuted, marginBottom: "1.5rem", lineHeight: 1.7 }}>
                    Transfer directly to our bank account. Click any row to copy the details.
                  </p>

                  {/* Bank detail rows */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                    {bankDetails.map(({ key, label, value }) => (
                      <button
                        key={key}
                        onClick={() => copyText(value, key)}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "0.9rem 1.1rem",
                          background: C.parchment,
                          border: `1px solid ${C.border}`,
                          borderRadius: "7px",
                          cursor: "pointer",
                          textAlign: "left",
                          width: "100%",
                          transition: "border-color 0.2s, background 0.2s",
                          gap: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = C.borderMid;
                          (e.currentTarget as HTMLElement).style.background = `${C.amber}08`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = C.border;
                          (e.currentTarget as HTMLElement).style.background = C.parchment;
                        }}
                      >
                        <div>
                          <p style={{ fontFamily: font.sans, fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, marginBottom: "2px" }}>
                            {label}
                          </p>
                          <p style={{
                            fontFamily: key === "accountNo" || key === "ifsc" ? "monospace" : font.serif,
                            fontSize: "0.92rem", color: C.textMain, fontWeight: 500,
                            letterSpacing: key === "accountNo" || key === "ifsc" ? "0.06em" : "normal",
                          }}>
                            {value}
                          </p>
                        </div>
                        <AnimatePresence mode="wait">
                          {copied === key ? (
                            <motion.span key="check" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}>
                              <CheckCircle size={15} style={{ color: C.amber, flexShrink: 0 }} />
                            </motion.span>
                          ) : (
                            <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              <Copy size={15} style={{ color: C.textMuted, flexShrink: 0 }} />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    ))}
                  </div>

                  {/* 80G note */}
                  <div style={{
                    display: "flex", gap: "0.75rem", alignItems: "flex-start",
                    background: `${C.amber}0E`,
                    border: `1px solid ${C.border}`,
                    borderLeft: `3px solid ${C.amber}`,
                    borderRadius: "0 7px 7px 0",
                    padding: "1rem 1.1rem",
                  }}>
                    <CheckCircle size={15} style={{ color: C.amber, flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontFamily: font.sans, fontSize: "0.78rem", color: C.textBody, lineHeight: 1.7 }}>
                      After donating, email us at{" "}
                      <a href="mailto:khodiyareducationtrust@yahoo.in" style={{ color: C.amber, fontWeight: 600, textDecoration: "none" }}>
                        khodiyareducationtrust@yahoo.in
                      </a>{" "}
                      with your donation proof to receive your 80G tax receipt.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            LEGAL NOTE
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.parchment, padding: "3.5rem 1.5rem" }}>
          <div style={{
            maxWidth: "860px", margin: "0 auto",
            background: C.white, border: `1px solid ${C.border}`,
            borderRadius: "10px", padding: "2rem 2.5rem",
            display: "flex", gap: "1.25rem", alignItems: "flex-start",
          }}>
            {/* Amber rule accent */}
            <div style={{ width: "3px", borderRadius: "99px", background: C.amber, alignSelf: "stretch", flexShrink: 0 }} />
            <p style={{ fontFamily: font.sans, fontSize: "0.8rem", color: C.textMuted, lineHeight: 1.85 }}>
              <strong style={{ color: C.textMain, fontWeight: 700 }}>Khodiyar Education Trust</strong> is registered under the Bombay Public Charitable Trust Act (E-3086), National Trust for the Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities, PWD Act 1995 with Dept. of Social Defense and Social Justice & Empowerment, Govt. of Gujarat. Donations are eligible for tax exemption under{" "}
              <strong style={{ color: C.textMain }}>Sections 12A and 80G</strong>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}