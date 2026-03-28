"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Heart, Users, BookOpen, MessageCircle, Calendar, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Users, title: "Parent Support Groups", desc: "Connect with other families walking the same journey. Share experiences, find solidarity, and learn together in a safe and compassionate space." },
  { icon: BookOpen, title: "Training Workshops", desc: "Hands-on workshops that equip parents with practical skills — from therapy exercises at home to understanding your child's IEP and rights." },
  { icon: MessageCircle, title: "Individual Counseling", desc: "One-on-one guidance from our trained counselors to help you navigate emotional challenges, family dynamics, and your child's evolving needs." },
  { icon: Calendar, title: "Home Visit Programs", desc: "Our specialists visit families at home to observe, advise, and train parents in daily care routines that reinforce what children learn at our center." },
  { icon: Phone, title: "Helpline Support", desc: "A dedicated support channel for parents who need quick guidance, emotional support, or help accessing government schemes and benefits." },
  { icon: Heart, title: "Family Therapy Sessions", desc: "Sessions that strengthen family bonds and help siblings, grandparents, and extended family understand and support the child with sensitivity and love." },
];

const faqs = [
  { q: "How do I enroll my child at KET India?", a: "Contact us via email or phone, and our intake team will guide you through the assessment and enrollment process. We conduct a developmental assessment to understand your child's needs before designing their personalized program." },
  { q: "My child has recently been diagnosed — what should I do first?", a: "Don't wait — early intervention makes the biggest difference. Reach out to us immediately. We will help you understand the diagnosis, connect you with our therapy team, and start your child on an Individualized Education Plan as soon as possible." },
  { q: "Are parent training sessions mandatory?", a: "They are strongly encouraged. Research shows that children make 3x faster progress when parents actively participate in therapy techniques at home. Our staff will guide you step by step — no expertise required." },
  { q: "What government schemes can my child benefit from?", a: "There are several central and state schemes — including disability certificates, pensions, assistive devices, and scholarships. Our team will help you apply for all applicable benefits and navigate the system." },
  { q: "Is there a cost for programs?", a: "KET India operates on a sliding-scale model. We believe no child should be denied care due to financial constraints. Please contact us to discuss your situation — our social worker will work with you." },
];

export default function ParentCornerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7B9E87 0%, #4A6B55 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div key={i} className="absolute rounded-full" style={{ width: `${60 + i * 35}px`, height: `${60 + i * 35}px`, background: "rgba(255,255,255,0.05)", right: `${(i * 15) % 80}%`, top: `${(i * 13) % 80}%` }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4 + i, repeat: Infinity }} />
            ))}
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.p className="text-sm font-semibold tracking-widest uppercase mb-4 text-green-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Parent Corner</motion.p>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              You Are Not Alone
            </motion.h1>
            <motion.p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Raising a child with intellectual disability is a journey of extraordinary love. We walk beside you with guidance, training, and an unwavering community of support.
            </motion.p>
          </div>
        </section>

        {/* Message */}
        <section className="py-20" style={{ background: "#FAF7F2" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Heart size={40} className="mx-auto mb-6" style={{ color: "#7B9E87" }} />
              <p className="text-2xl leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", color: "#1C1C1E" }}>
                "We understand that when your child struggles, you struggle too. That's why we don't just serve children — we embrace their entire family as part of our KET India community."
              </p>
              <div className="deco-line mx-auto mt-8" />
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24" style={{ background: "#F5F0E8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="For Families" title="Our Services for Parents" subtitle="Six ways we support you in becoming your child's most powerful advocate and first teacher." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  className="card-hover p-8 rounded-2xl bg-white border"
                  style={{ borderColor: "rgba(123,158,135,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, rgba(74,107,85,0.1), rgba(123,158,135,0.2))" }}>
                    <s.icon size={26} style={{ color: "#4A6B55" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif", color: "#1C1C1E" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A8580" }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-20" style={{ background: "#FAF7F2" }}>
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading eyebrow="Guidance" title="A Word for Parents" />
            <div className="space-y-4">
              {[
                "Trust the process — development in children with intellectual disabilities is non-linear, but it is always happening.",
                "Celebrate small wins every single day. A new word. A new skill. A new connection. These are not small — they are everything.",
                "Don't isolate yourself. Connect with other families. Share. Listen. Learn. The community you build will be your greatest strength.",
                "Your child reads your energy. The more peaceful and confident you are, the safer they feel to grow.",
                "You are not a perfect parent — you are a present one. And presence is the most powerful therapy you can give.",
              ].map((tip, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start p-5 rounded-xl bg-white border"
                  style={{ borderColor: "rgba(123,158,135,0.12)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <CheckCircle size={20} style={{ color: "#7B9E87", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ color: "#4A4A4A" }}>{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24" style={{ background: "#F5F0E8" }}>
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading eyebrow="FAQs" title="Common Questions" subtitle="Answers to what parents ask us most often." />
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  className="rounded-2xl overflow-hidden bg-white border"
                  style={{ borderColor: "rgba(123,158,135,0.15)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <summary className="p-6 cursor-pointer font-semibold list-none flex justify-between items-center gap-4" style={{ color: "#1C1C1E" }}>
                    {faq.q}
                    <span style={{ color: "#7B9E87", flexShrink: 0 }}>+</span>
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "#8A8580", borderTop: "1px solid rgba(123,158,135,0.1)" }}>
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #4A6B55, #7B9E87)" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>Reach Out to Us</h2>
              <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>Our team is ready to listen, support, and guide your family — every step of the way.</p>
              <Link href="/contact" className="btn-amber">Contact Our Team</Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
