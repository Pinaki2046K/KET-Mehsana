'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Briefcase, Award, BookOpen, Stethoscope, Trophy, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { 
    icon: Users, 
    value: 25000, 
    suffix: '+', 
    label: 'Children Supported Directly', 
    desc: 'Education, aids, certification, pension support and more' 
  },
  { 
    icon: Heart, 
    value: 4500, 
    suffix: '+', 
    label: 'Families Empowered', 
    desc: 'Through counseling, training and ongoing support' 
  },
  { 
    icon: Stethoscope, 
    value: 280, 
    suffix: '+', 
    label: 'Therapy Beneficiaries', 
    desc: 'Speech therapy & physiotherapy services received' 
  },
  { 
    icon: Briefcase, 
    value: 258, 
    suffix: '', 
    label: 'Youth Self-Employed', 
    desc: 'Vocational graduates now earning livelihoods' 
  },
  { 
    icon: Trophy, 
    value: 52, 
    suffix: '', 
    label: 'Sports Medals', 
    desc: 'Won at national and international competitions' 
  },
  { 
    icon: Star, 
    value: 13, 
    suffix: '', 
    label: 'International Medals', 
    desc: 'Including World Para-Olympic achievements' 
  },
];

const areas = [
  { 
    icon: BookOpen, 
    label: 'Education', 
    color: '#4A6B55', 
    desc: 'Individualized education plans helping children learn, grow, and prepare for life.' 
  },
  { 
    icon: Stethoscope, 
    label: 'Therapy', 
    color: '#7B9E87', 
    desc: 'Speech, physio, and occupational therapy transforming developmental outcomes.' 
  },
  { 
    icon: Briefcase, 
    label: 'Livelihood', 
    color: '#C8862A', 
    desc: 'Vocational training opening doors to dignity, independence, and income.' 
  },
  { 
    icon: Users, 
    label: 'Inclusion', 
    color: '#1C1C1E', 
    desc: 'Community programs that ensure every child is seen, heard, and valued.' 
  },
];

const medals = [
  { event: 'World Para-Olympic Games', achievement: 'Medal Winner', level: 'International 🌍' },
  { event: 'National Sports Championship', achievement: 'Multiple Medals', level: 'National 🇮🇳' },
  { event: 'State Para Games', achievement: 'Gold, Silver & Bronze', level: 'State 🏆' },
  { event: 'District Sports Meet', achievement: 'Consistent Champions', level: 'District 🥇' },
];

const successStories = [
  "A child who couldn't speak, now performing on stage",
  'A young man selling his craft products at district markets',
  "A national medal winner who was once told she couldn't compete",
];

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden pt-32 pb-20"
          style={{ background: 'linear-gradient(135deg, #4A6B55 0%, #2C4A35 100%)' }}
        >
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <motion.p 
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-200"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
            >
              Our Impact
            </motion.p>
            <motion.h1 
              className="mb-6 text-5xl font-bold text-white md:text-7xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
            >
              Every Number is a Life
            </motion.h1>
            <motion.p 
              className="mx-auto max-w-2xl text-xl leading-relaxed text-green-100"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
            >
              These are not just statistics. Behind every number is a child who now speaks, walks, learns, earns, or stands on a podium holding a medal for India.
            </motion.p>
          </div>
        </section>

        {/* Stats Grid Section */}
        <section className="py-24" style={{ background: '#FAF7F2' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              eyebrow="Our Reach" 
              title="Numbers That Inspire" 
              subtitle="Three decades of relentless work, measured in lives changed." 
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl border bg-white p-8 text-center"
                  style={{ borderColor: 'rgba(123,158,135,0.15)' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div 
                    className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(74,107,85,0.1), rgba(123,158,135,0.2))' }}
                  >
                    <stat.icon size={28} style={{ color: '#4A6B55' }} />
                  </div>
                  <div 
                    className="mb-2 text-5xl font-bold"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6B55' }}
                  >
                    <AnimatedCounter value={stat.value} />{stat.suffix}
                  </div>
                  <div className="mb-2 text-lg font-semibold" style={{ color: '#1C1C1E' }}>
                    {stat.label}
                  </div>
                  <p className="text-sm" style={{ color: '#8A8580' }}>
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="mt-10 text-center text-lg font-semibold"
              style={{ color: '#4A6B55', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
            >
              {"Every number represents a life transformed."}
            </motion.p>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-24" style={{ background: '#F5F0E8' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              eyebrow="Areas of Change" 
              title="Four Dimensions of Impact" 
              subtitle="We work across education, therapy, livelihood, and social inclusion to create complete transformation." 
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {areas.map((area, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-2" style={{ background: area.color }} />
                  <div 
                    className="border border-t-0 bg-white p-7"
                    style={{ borderColor: 'rgba(0,0,0,0.07)' }}
                  >
                    <div 
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: `${area.color}15` }}
                    >
                      <area.icon size={22} style={{ color: area.color }} />
                    </div>
                    <h3 
                      className="mb-3 text-xl font-bold"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#1C1C1E' }}
                    >
                      {area.label}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#8A8580' }}>
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Medals Section */}
        <section 
          className="relative overflow-hidden py-24"
          style={{ background: '#1C1C1E' }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute rounded-full"
                style={{ 
                  width: `${120 + i * 60}px`, 
                  height: `${120 + i * 60}px`, 
                  border: '1px solid rgba(212,175,55,0.08)', 
                  left: `${i * 20}%`, 
                  top: `${i * 15}%` 
                }} 
                animate={{ rotate: 360 }} 
                transition={{ duration: 30 + i * 8, repeat: Infinity, ease: 'linear' }} 
              />
            ))}
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              eyebrow="Sports Excellence" 
              title="From Margins to Medals" 
              subtitle="Our students have not only progressed in life — they have brought pride to the nation on global platforms."
              light 
            />
            <div className="grid gap-6 md:grid-cols-2">
              {medals.map((m, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl border p-6"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(212,175,55,0.2)' }}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex gap-4">
                    <div 
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(212,175,55,0.15)' }}
                    >
                      <Trophy size={22} style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <p 
                        className="mb-1 text-xs font-semibold tracking-widest"
                        style={{ color: '#D4AF37' }}
                      >
                        {m.level}
                      </p>
                      <h3 
                        className="mb-1 text-lg font-bold text-white"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {m.event}
                      </h3>
                      <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {m.achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-12 rounded-3xl border p-8 text-center"
              style={{ background: 'rgba(212,175,55,0.08)', borderColor: 'rgba(212,175,55,0.2)' }}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
            >
              <Award size={40} className="mx-auto mb-4" style={{ color: '#D4AF37' }} />
              <p 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                52 Medals across 13 disciplines at National and International levels
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-24" style={{ background: '#FAF7F2' }}>
          <div className="mx-auto max-w-4xl px-4 text-center">
            <SectionHeading 
              eyebrow="Success Stories" 
              title="Voices of Change" 
              subtitle="Real stories of children and families whose lives have been transformed through KET India." 
            />
            <div className="grid gap-6 md:grid-cols-3">
              {successStories.map((story, i) => (
                <motion.div 
                  key={i}
                  className="rounded-2xl border bg-white p-7 text-left"
                  style={{ borderColor: 'rgba(123,158,135,0.15)' }}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.12 }}
                >
                  <div 
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: '#4A6B55' }}
                  >
                    <Star size={18} className="text-white" />
                  </div>
                  <p className="text-base leading-relaxed italic" style={{ color: '#4A4A4A' }}>
                    {`"${story}"`}
                  </p>
                  <p className="mt-4 text-xs font-medium" style={{ color: '#7B9E87' }}>
                    — Coming Soon
                  </p>
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