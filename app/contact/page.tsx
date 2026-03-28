"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";

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
  errorBg:    "#FDF0F0",
  errorText:  "#A83030",
};

const font = {
  display: "'Cormorant Garamond', 'Georgia', serif",
  serif:   "'EB Garamond', 'Georgia', serif",
  sans:    "'Raleway', 'Helvetica Neue', sans-serif",
};

// ─── Shared helpers ───────────────────────────────────────────────
const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p style={{
    fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
    letterSpacing: "0.22em", textTransform: "uppercase",
    color: light ? C.amberLight : C.amber, marginBottom: "0.75rem",
  }}>{children}</p>
);

const Rule = ({ width = 40, center = false }: { width?: number; center?: boolean }) => (
  <div style={{
    width, height: 2, background: C.amber, borderRadius: 99,
    marginBottom: "1.5rem", margin: center ? "0 auto 1.5rem" : "0 0 1.5rem",
  }} />
);

// ─── Input wrapper for focus ring ────────────────────────────────
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{
        display: "block",
        fontFamily: font.sans, fontWeight: 600, fontSize: "0.75rem",
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: C.textMuted, marginBottom: "0.5rem",
      }}>
        {label}{required && <span style={{ color: C.amber, marginLeft: "2px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1.1rem",
  background: C.parchment,
  border: `1px solid ${C.border}`,
  borderRadius: "6px",
  fontFamily: font.serif,
  fontSize: "0.98rem",
  color: C.textMain,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    lines: ["khodiyareducationtrust@yahoo.in"],
    href: "mailto:khodiyareducationtrust@yahoo.in",
  },
  {
    icon: MapPin,
    label: "Address",
    lines: ["Khodiyar Education Trust", "Mahesana, Gujarat – 384002, India"],
    href: "https://maps.app.goo.gl/XZTiQLdyUvZf8oVb8",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Mon – Sat: 9:00 AM – 5:00 PM", "Sunday: Closed"],
    href: null,
  },
];

const quickActions = [
  "Enroll my child",
  "Volunteer opportunities",
  "Donation inquiry",
  "CSR / Partnership",
  "Media & press",
  "General inquiry",
];

// ─── Page ─────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const focusStyle  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = C.amberLight;
    e.target.style.boxShadow  = `0 0 0 3px ${C.amber}18`;
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = C.border;
    e.target.style.boxShadow  = "none";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData();
    fd.append("access_key", "fbd51208-71e3-41fb-b707-4ffd98caa496");
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
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
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(circle, ${C.amber}18 1px, transparent 1px)`,
            backgroundSize: "38px 38px",
          }} />
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "400px", height: "400px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amber}1A 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Eyebrow light>Contact Us</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 1.08,
                letterSpacing: "-0.015em", color: C.white, marginBottom: "1.5rem",
              }}
            >
              Let's <em style={{ fontStyle: "italic", color: C.amberGlow }}>Talk.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              style={{
                fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.85,
                color: `${C.amberLight}BB`, maxWidth: "500px", margin: "0 auto",
              }}
            >
              Whether you want to enroll your child, volunteer, donate, partner, or simply learn more — we'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            MAIN CONTENT — info + form
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "5rem", alignItems: "start" }}>

              {/* ── Left: Contact Info ── */}
              <motion.div
                initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
              >
                <Eyebrow>Reach Us</Eyebrow>
                <h2 style={{
                  fontFamily: font.display, fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2,
                  color: C.textMain, marginBottom: "1rem",
                }}>
                  Get in Touch
                </h2>
                <Rule />

                {/* Contact detail cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                  {contactDetails.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          style={{
                            display: "flex", gap: "1rem", alignItems: "flex-start",
                            background: C.white, border: `1px solid ${C.border}`,
                            borderLeft: `3px solid ${C.amber}`,
                            borderRadius: "0 8px 8px 0",
                            padding: "1.1rem 1.25rem",
                            textDecoration: "none",
                            transition: "box-shadow 0.2s, border-color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 24px rgba(58,34,0,0.08)`;
                            (e.currentTarget as HTMLElement).style.borderLeftColor = C.amberLight;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            (e.currentTarget as HTMLElement).style.borderLeftColor = C.amber;
                          }}
                        >
                          <div style={{
                            width: "36px", height: "36px", borderRadius: "7px", flexShrink: 0,
                            background: `${C.amber}14`, border: `1px solid ${C.border}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <item.icon size={16} style={{ color: C.amber }} />
                          </div>
                          <div>
                            <p style={{ fontFamily: font.sans, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: C.textMuted, marginBottom: "0.25rem" }}>
                              {item.label}
                            </p>
                            {item.lines.map((line, li) => (
                              <p key={li} style={{ fontFamily: font.serif, fontSize: "0.92rem", color: C.textBody, lineHeight: 1.6 }}>{line}</p>
                            ))}
                          </div>
                        </a>
                      ) : (
                        <div style={{
                          display: "flex", gap: "1rem", alignItems: "flex-start",
                          background: C.white, border: `1px solid ${C.border}`,
                          borderLeft: `3px solid ${C.border}`,
                          borderRadius: "0 8px 8px 0",
                          padding: "1.1rem 1.25rem",
                        }}>
                          <div style={{
                            width: "36px", height: "36px", borderRadius: "7px", flexShrink: 0,
                            background: `${C.amber}0E`, border: `1px solid ${C.border}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <item.icon size={16} style={{ color: C.textMuted }} />
                          </div>
                          <div>
                            <p style={{ fontFamily: font.sans, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: C.textMuted, marginBottom: "0.25rem" }}>
                              {item.label}
                            </p>
                            {item.lines.map((line, li) => (
                              <p key={li} style={{ fontFamily: font.serif, fontSize: "0.92rem", color: C.textBody, lineHeight: 1.6 }}>{line}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div style={{
                  background: C.parchment,
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                }}>
                  <p style={{
                    fontFamily: font.sans, fontWeight: 700, fontSize: "0.72rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: C.amber, marginBottom: "1rem",
                  }}>
                    Reason for Reaching Out
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {quickActions.map((action, i) => (
                      <a
                        key={i}
                        href="#contact-form"
                        style={{
                          display: "flex", alignItems: "center", gap: "0.6rem",
                          fontFamily: font.sans, fontSize: "0.83rem",
                          color: C.textMuted, textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.amber)}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                      >
                        <ArrowRight size={12} style={{ color: C.borderMid, flexShrink: 0 }} />
                        {action}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── Right: Contact Form ── */}
              <motion.div
                id="contact-form"
                initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: `0 24px 70px rgba(58,34,0,0.08)`,
                }}
              >
                {/* Form header bar */}
                <div style={{
                  padding: "2rem 2.5rem 1.75rem",
                  borderBottom: `1px solid ${C.border}`,
                  background: C.pale,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "7px",
                      background: `${C.amber}18`, border: `1px solid ${C.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <MessageSquare size={16} style={{ color: C.amber }} />
                    </div>
                    <div>
                      <h2 style={{
                        fontFamily: font.display, fontWeight: 700,
                        fontSize: "1.5rem", color: C.textMain, lineHeight: 1.2,
                      }}>
                        Send Us a Message
                      </h2>
                      <p style={{ fontFamily: font.sans, fontSize: "0.72rem", color: C.textMuted, marginTop: "2px" }}>
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "2.25rem 2.5rem" }}>

                  {/* Success state */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.96, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          marginBottom: "1.75rem",
                          background: `${C.amber}10`,
                          border: `1px solid ${C.borderMid}`,
                          borderRadius: "8px",
                          padding: "1.1rem 1.25rem",
                          display: "flex", alignItems: "flex-start", gap: "0.75rem",
                        }}
                      >
                        <CheckCircle size={18} style={{ color: C.amber, flexShrink: 0, marginTop: "1px" }} />
                        <div>
                          <p style={{ fontFamily: font.sans, fontWeight: 700, fontSize: "0.85rem", color: C.textMain, marginBottom: "2px" }}>
                            Message sent successfully!
                          </p>
                          <p style={{ fontFamily: font.sans, fontSize: "0.78rem", color: C.textMuted }}>
                            We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          marginBottom: "1.75rem",
                          background: C.errorBg,
                          border: `1px solid #E8B0B0`,
                          borderRadius: "8px",
                          padding: "1rem 1.25rem",
                          fontFamily: font.sans, fontSize: "0.82rem",
                          color: C.errorText,
                        }}
                      >
                        {errorMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                    {/* Name + Email row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
                      <Field label="Full Name" required>
                        <input
                          type="text" name="name" value={formData.name}
                          onChange={handleChange} required placeholder="Your full name"
                          style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                        />
                      </Field>
                      <Field label="Email Address" required>
                        <input
                          type="email" name="email" value={formData.email}
                          onChange={handleChange} required placeholder="your@email.com"
                          style={inputBase} onFocus={focusStyle} onBlur={blurStyle}
                        />
                      </Field>
                    </div>

                    {/* Subject */}
                    <Field label="Reason for Contact" required>
                      <select
                        name="subject" value={formData.subject}
                        onChange={handleChange} required
                        style={{ ...inputBase, cursor: "pointer", appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A6B3A' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          paddingRight: "2.5rem",
                        }}
                        onFocus={focusStyle} onBlur={blurStyle}
                      >
                        <option value="">Select a reason for reaching out</option>
                        <option value="enroll">Enroll my child</option>
                        <option value="volunteer">Volunteer opportunities</option>
                        <option value="donation">Donation inquiry</option>
                        <option value="csr">CSR / Partnership</option>
                        <option value="parent">Parent support</option>
                        <option value="media">Media & press</option>
                        <option value="general">General inquiry</option>
                      </select>
                    </Field>

                    {/* Message */}
                    <Field label="Message" required>
                      <textarea
                        name="message" value={formData.message}
                        onChange={handleChange} required rows={5}
                        placeholder="Tell us how we can help you..."
                        style={{ ...inputBase, resize: "none", lineHeight: 1.7 }}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={status !== "sending" ? { scale: 1.02 } as any : {}}
                      whileTap={status !== "sending" ? { scale: 0.98 } as any : {}}
                      style={{
                        width: "100%",
                        padding: "1rem",
                        borderRadius: "6px",
                        border: "none",
                        background: status === "sending" ? C.borderMid : C.amber,
                        color: C.white,
                        fontFamily: font.sans,
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        transition: "background 0.2s",
                        boxShadow: status !== "sending" ? `0 4px 20px ${C.amber}35` : "none",
                      }}
                    >
                      <Send size={15} />
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </motion.button>

                    <p style={{
                      fontFamily: font.sans, fontSize: "0.7rem",
                      color: C.textMuted, textAlign: "center", lineHeight: 1.6,
                    }}>
                      Your information is kept strictly confidential and will never be shared with third parties.
                    </p>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}