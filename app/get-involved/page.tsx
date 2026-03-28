"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Heart, Building2, Wrench, Users, QrCode, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const engagements = [
  { icon: Heart, title: "Sponsor a Child / Program", desc: "Support the complete development of a child — covering education, therapy, and daily care costs for a full year.", impact: "₹500/month supports one child's therapy sessions" },
  { icon: Building2, title: "Infrastructure Development", desc: "Support therapy rooms, classrooms, sensory labs, and equipment that enable our specialists to deliver world-class care.", impact: "₹50,000 can equip a full therapy room" },
  { icon: Wrench, title: "Skill Development Projects", desc: "Fund livelihood programs that train youth in vocational skills — giving them tools for economic independence.", impact: "₹25,000 trains 5 youth for 3 months" },
  { icon: Users, title: "Employee / CSR Engagement", desc: "Bring your team to volunteer, contribute skill-based expertise, or partner under CSR for measurable social impact.", impact: "Tax benefits under Section 80G available" },
];

const bankDetails = {
  bank: "HDFC Bank",
  branch: "Modhera Road, Mahesana",
  accountName: "Khodiyar Education Trust",
  accountNo: "50100200865123",
  ifsc: "HDFC00037778",
};

export default function GetInvolvedPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #C8862A 0%, #E8A84A 60%, #D4AF37 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.p className="text-sm font-semibold tracking-widest uppercase mb-4 text-orange-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Get Involved</motion.p>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Be the Reason
            </motion.h1>
            <motion.p className="text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Your financial support is not just a contribution — it can transform a child's future. Join us in creating an inclusive and equitable society.
            </motion.p>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16" style={{ background: "#FAF7F2" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.blockquote className="text-3xl md:text-4xl font-bold italic" style={{ fontFamily: "Cormorant Garamond, serif", color: "#4A6B55" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              "Your financial support is not just a contribution — it can transform a child's future."
            </motion.blockquote>
            <motion.div className="deco-line mx-auto mt-6" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
          </div>
        </section>

        {/* Engagement Opportunities */}
        <section className="py-24" style={{ background: "#F5F0E8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Ways to Help" title="Individual & CSR Engagement" subtitle="You are always welcome to contribute your passion, resources, and support in any way that fits." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engagements.map((e, i) => (
                <motion.div
                  key={i}
                  className="card-hover p-8 rounded-2xl bg-white border"
                  style={{ borderColor: "rgba(123,158,135,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgba(200,134,42,0.15), rgba(232,168,74,0.2))" }}>
                      <e.icon size={26} style={{ color: "#C8862A" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif", color: "#1C1C1E" }}>{e.title}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#8A8580" }}>{e.desc}</p>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium" style={{ background: "rgba(200,134,42,0.1)", color: "#C8862A" }}>
                        <CheckCircle size={12} />
                        {e.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-24" style={{ background: "#FAF7F2" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Donate Now" title="Make Your Contribution" subtitle="100% of your donation goes toward programs that directly benefit children. Tax exemption available under 80G." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* QR */}
              <motion.div
                className="p-8 rounded-3xl bg-white border text-center"
                style={{ borderColor: "rgba(123,158,135,0.15)", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <QrCode size={32} className="mx-auto mb-4" style={{ color: "#4A6B55" }} />
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif", color: "#1C1C1E" }}>Scan & Pay</h3>
                <p className="text-sm mb-6" style={{ color: "#8A8580" }}>Scan the QR code with any UPI app to donate instantly</p>
                <motion.div
                  className="w-52 h-52 mx-auto rounded-2xl flex items-center justify-center bg-gray-50 border-2"
                  style={{ borderColor: "rgba(123,158,135,0.3)" }}
                  animate={{ boxShadow: ["0 0 20px rgba(74,107,85,0.2)", "0 0 40px rgba(74,107,85,0.4)", "0 0 20px rgba(74,107,85,0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img src="/payment.png" alt="Payment QR Code" className="w-44 h-44 object-contain rounded-xl"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                      if (t.parentElement) t.parentElement.innerHTML = '<div class="text-center p-4"><div style="font-size:3rem">📱</div><p style="color:#8A8580;font-size:0.75rem;margin-top:0.5rem">QR code will appear here<br/>Add payment.png to /public</p></div>';
                    }}
                  />
                </motion.div>
                <p className="text-xs mt-4 font-semibold" style={{ color: "#7B9E87" }}>UPI | PhonePe | Google Pay | Paytm</p>
              </motion.div>

              {/* Bank details */}
              <motion.div
                className="p-8 rounded-3xl bg-white border"
                style={{ borderColor: "rgba(123,158,135,0.15)", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif", color: "#1C1C1E" }}>Bank Transfer</h3>
                <p className="text-sm mb-6" style={{ color: "#8A8580" }}>Transfer directly to our HDFC bank account</p>
                <div className="space-y-4">
                  {Object.entries(bankDetails).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-xl" style={{ background: "#F5F0E8" }}>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#8A8580" }}>
                          {key === "accountNo" ? "Account Number" : key === "ifsc" ? "IFSC Code" : key === "accountName" ? "Account Name" : key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                        <p className="font-semibold" style={{ color: "#1C1C1E" }}>{value}</p>
                      </div>
                      <button onClick={() => copyText(value, key)} className="p-2 rounded-lg transition-all hover:scale-110" style={{ background: "rgba(74,107,85,0.1)" }}>
                        {copied === key ? <CheckCircle size={16} style={{ color: "#4A6B55" }} /> : <Copy size={16} style={{ color: "#4A6B55" }} />}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl flex gap-3 items-start" style={{ background: "rgba(74,107,85,0.08)" }}>
                  <CheckCircle size={18} style={{ color: "#4A6B55", flexShrink: 0, marginTop: "2px" }} />
                  <p className="text-sm" style={{ color: "#4A4A4A" }}>After donating, please email us at <strong>khodiyareducationtrust@yahoo.in</strong> with your donation proof to receive your 80G tax receipt.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legal Note */}
        <section className="py-12" style={{ background: "#F5F0E8" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm leading-relaxed" style={{ color: "#8A8580" }}>
              <strong style={{ color: "#4A4A4A" }}>Khodiyar Education Trust</strong> is registered under the Bombay Public Charitable Trust Act (E-3086), National Trust for the Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities, PWD Act 1995 with Dept. of Social Defense and Social Justice & Empowerment, Govt. of Gujarat. Donations are eligible for tax exemption under <strong style={{ color: "#4A4A4A" }}>Sections 12A and 80G</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
