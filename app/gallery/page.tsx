"use client";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Education", "Therapy", "Sports", "Events", "Vocational"];

const galleryImages = [
  { url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Education", title: "Special Education Program" },
  { url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Therapy", title: "Speech Therapy Session" },
  { url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Events", title: "Annual Day Celebration" },
  { url: "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Sports", title: "Sports Day Training" },
  { url: "https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Vocational", title: "Craft & Vocational Skills" },
  { url: "https://images.pexels.com/photos/6995126/pexels-photo-6995126.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Therapy", title: "Physiotherapy Session" },
  { url: "https://images.pexels.com/photos/6646944/pexels-photo-6646944.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Events", title: "Community Gathering" },
  { url: "https://images.pexels.com/photos/6646942/pexels-photo-6646942.jpeg?auto=compress&cs=tinysrgb&w=800", cat: "Education", title: "Classroom Learning" },
  { url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600", cat: "Sports", title: "National Level Competition" },
  { url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600", cat: "Vocational", title: "Packaging Skills Workshop" },
  { url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600", cat: "Therapy", title: "Sensory Integration" },
  { url: "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=600", cat: "Education", title: "Art & Expression Class" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter(img => img.cat === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #4A6B55, #7B9E87)" }}>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.p className="text-sm font-semibold tracking-widest uppercase mb-4 text-green-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Gallery</motion.p>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Stories in Photos
            </motion.h1>
            <motion.p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Every photograph captures a moment of growth, joy, or triumph. Explore the world of KET India through these windows into our programs.
            </motion.p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20" style={{ background: "#FAF7F2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                  style={activeCategory === cat
                    ? { background: "#4A6B55", color: "white" }
                    : { background: "white", color: "#4A4A4A", border: "1px solid rgba(123,158,135,0.3)" }
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.url + img.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setLightbox({ url: img.url, title: img.title })}
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <img src={img.url} alt={img.title} className="w-full object-cover img-bw" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                      style={{ background: "linear-gradient(to top, rgba(74,107,85,0.85) 0%, transparent 60%)" }}>
                      <div className="flex items-center justify-between w-full">
                        <span className="text-white font-medium text-sm">{img.title}</span>
                        <ZoomIn size={18} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Upload note */}
            <motion.div className="mt-12 p-6 rounded-2xl text-center" style={{ background: "rgba(123,158,135,0.08)", border: "1px dashed rgba(123,158,135,0.4)" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-sm" style={{ color: "#8A8580" }}>
                <strong style={{ color: "#4A6B55" }}>Note for admins:</strong> Replace placeholder images with actual KET India photos. Place images in the <code className="bg-green-50 px-1 rounded">/public/gallery/</code> folder and update the image URLs in <code className="bg-green-50 px-1 rounded">app/gallery/page.tsx</code>.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.9)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.url} alt={lightbox.title} className="w-full rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <p className="text-white font-medium">{lightbox.title}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.6)" }}>
                <X size={18} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
