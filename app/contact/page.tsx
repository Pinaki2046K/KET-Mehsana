"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");
    const fd = new FormData();
    fd.append("access_key", "fbd51208-71e3-41fb-b707-4ffd98caa496");
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setResult("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult(data.message || "Error occurred");
      }
    } catch {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1C1C1E, #2C2C2E)" }}>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#A8C5B0" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Contact</motion.p>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Let's Talk
            </motion.h1>
            <motion.p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Whether you want to enroll your child, volunteer, donate, partner, or simply learn more — we'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24" style={{ background: "#FAF7F2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Info */}
              <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "Cormorant Garamond, serif", color: "#1C1C1E" }}>Get in Touch</h2>
                <div className="space-y-6 mb-10">
                  {[
                    { icon: Mail, label: "Email", lines: ["khodiyareducationtrust@yahoo.in"] },
                    { icon: MapPin, label: "Address", lines: ["Khodiyar Education Trust", "Mahesana, Gujarat, India"] },
                    { icon: Clock, label: "Office Hours", lines: ["Monday–Saturday: 9:00 AM – 5:00 PM", "Sunday: Closed"] },
                  ].map((item, i) => (
                    <motion.div key={i} className="flex gap-4 items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74,107,85,0.1)" }}>
                        <item.icon size={20} style={{ color: "#4A6B55" }} />
                      </div>
                      <div>
                        <p className="font-semibold mb-1" style={{ color: "#1C1C1E" }}>{item.label}</p>
                        {item.lines.map((line, li) => <p key={li} className="text-sm" style={{ color: "#8A8580" }}>{line}</p>)}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map button */}
                <a
                  href="https://maps.app.goo.gl/XZTiQLdyUvZf8oVb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
                  style={{ background: "rgba(74,107,85,0.08)", border: "1px solid rgba(74,107,85,0.2)" }}
                >
                  <MapPin size={20} style={{ color: "#4A6B55" }} />
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#4A6B55" }}>View on Google Maps</p>
                    <p className="text-xs" style={{ color: "#8A8580" }}>Find directions to our center</p>
                  </div>
                </a>

                {/* Quick actions */}
                <div className="mt-8 space-y-3">
                  <p className="text-sm font-semibold" style={{ color: "#1C1C1E" }}>Quick Actions</p>
                  {[
                    { label: "Enroll my child", href: "#contact-form" },
                    { label: "Volunteer with us", href: "#contact-form" },
                    { label: "CSR partnership inquiry", href: "#contact-form" },
                    { label: "Media & press", href: "#contact-form" },
                  ].map((action, i) => (
                    <a key={i} href={action.href} className="flex items-center gap-2 text-sm transition-colors hover:text-green-800" style={{ color: "#8A8580" }}>
                      <MessageSquare size={14} style={{ color: "#7B9E87" }} />
                      {action.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                id="contact-form"
                className="lg:col-span-3 p-8 rounded-3xl bg-white"
                style={{ boxShadow: "0 15px 50px rgba(0,0,0,0.07)", border: "1px solid rgba(123,158,135,0.12)" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif", color: "#1C1C1E" }}>Send Us a Message</h2>

                {result === "success" && (
                  <motion.div className="mb-6 p-4 rounded-xl flex items-center gap-3" style={{ background: "rgba(74,107,85,0.1)" }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <CheckCircle style={{ color: "#4A6B55" }} />
                    <p className="font-medium" style={{ color: "#4A6B55" }}>Message sent! We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
                {result && result !== "success" && result !== "Sending..." && (
                  <div className="mb-6 p-4 rounded-xl" style={{ background: "rgba(200,70,70,0.1)", color: "#C84646" }}>{result}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#4A4A4A" }}>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "#F5F0E8", border: "1px solid rgba(123,158,135,0.2)", color: "#1C1C1E" }}
                        onFocus={e => e.target.style.borderColor = "#7B9E87"} onBlur={e => e.target.style.borderColor = "rgba(123,158,135,0.2)"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#4A4A4A" }}>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: "#F5F0E8", border: "1px solid rgba(123,158,135,0.2)", color: "#1C1C1E" }}
                        onFocus={e => e.target.style.borderColor = "#7B9E87"} onBlur={e => e.target.style.borderColor = "rgba(123,158,135,0.2)"}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#4A4A4A" }}>Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ background: "#F5F0E8", border: "1px solid rgba(123,158,135,0.2)", color: "#1C1C1E" }}
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#4A4A4A" }}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ background: "#F5F0E8", border: "1px solid rgba(123,158,135,0.2)", color: "#1C1C1E" }}
                      onFocus={e => e.target.style.borderColor = "#7B9E87"} onBlur={e => e.target.style.borderColor = "rgba(123,158,135,0.2)"}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={result === "Sending..."}
                    className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all"
                    style={{ background: "linear-gradient(135deg, #4A6B55, #7B9E87)", opacity: result === "Sending..." ? 0.7 : 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    {result === "Sending..." ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
