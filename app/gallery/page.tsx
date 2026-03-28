"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

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

// ─── Data ─────────────────────────────────────────────────────────
const categories = ["All", "Education", "Therapy", "Sports", "Events", "Vocational"];

const galleryImages = [
  { url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Education",  title: "Special Education Program" },
  { url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Therapy",    title: "Speech Therapy Session" },
  { url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Events",     title: "Annual Day Celebration" },
  { url: "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Sports",     title: "Sports Day Training" },
  { url: "https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Vocational", title: "Craft & Vocational Skills" },
  { url: "https://images.pexels.com/photos/6995126/pexels-photo-6995126.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Therapy",    title: "Physiotherapy Session" },
  { url: "https://images.pexels.com/photos/6646944/pexels-photo-6646944.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Events",     title: "Community Gathering" },
  { url: "https://images.pexels.com/photos/6646942/pexels-photo-6646942.jpeg?auto=compress&cs=tinysrgb&w=800",  cat: "Education",  title: "Classroom Learning" },
  { url: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600",  cat: "Sports",     title: "National Level Competition" },
  { url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600",  cat: "Vocational", title: "Packaging Skills Workshop" },
  { url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",  cat: "Therapy",    title: "Sensory Integration" },
  { url: "https://images.pexels.com/photos/6994991/pexels-photo-6994991.jpeg?auto=compress&cs=tinysrgb&w=600",  cat: "Education",  title: "Art & Expression Class" },
];

// ─── Page ─────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex]   = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.cat === activeCategory);

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  // keyboard navigation
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape")     closeLightbox();
  };

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
            position: "absolute", top: "-80px", right: "-80px",
            width: "480px", height: "480px", borderRadius: "50%",
            background: `radial-gradient(circle, ${C.amber}22 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              style={{
                fontFamily: font.sans, fontWeight: 700, fontSize: "0.65rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: C.amberLight, marginBottom: "0.75rem",
              }}
            >
              Gallery
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{
                fontFamily: font.display, fontWeight: 700,
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 1.08,
                letterSpacing: "-0.015em", color: C.white, marginBottom: "1.5rem",
              }}
            >
              Stories in <em style={{ fontStyle: "italic", color: C.amberGlow }}>Photos.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              style={{
                fontFamily: font.serif, fontSize: "1.1rem", lineHeight: 1.85,
                color: `${C.amberLight}BB`, maxWidth: "500px", margin: "0 auto",
              }}
            >
              Every photograph captures a moment of growth, joy, or triumph. Explore the world of KET India through these windows into our programs.
            </motion.p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            GALLERY
        ════════════════════════════════════════════════════ */}
        <section style={{ background: C.cream, padding: "6rem 1.5rem 7rem" }}>
          <div style={{ maxWidth: "1220px", margin: "0 auto" }}>

            {/* ── Filter tabs ── */}
            <div style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center",
              gap: "0.5rem", marginBottom: "3.5rem",
            }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: "0.55rem 1.3rem",
                      borderRadius: "4px",
                      border: isActive ? `1px solid ${C.amber}` : `1px solid ${C.border}`,
                      background: isActive ? C.amber : C.white,
                      color: isActive ? C.white : C.textMuted,
                      fontFamily: font.sans,
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {cat}
                    {/* Count badge */}
                    <span style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.6rem",
                      opacity: 0.65,
                    }}>
                      {cat === "All" ? galleryImages.length : galleryImages.filter(i => i.cat === cat).length}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* ── Masonry grid ── */}
            <motion.div
              layout
              style={{
                columns: "3",
                columnGap: "14px",
              }}
            >
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.url + img.title + i}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.32, delay: i * 0.04 }}
                    onClick={() => openLightbox(i)}
                    style={{
                      breakInside: "avoid",
                      marginBottom: "14px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                      border: `1px solid ${C.border}`,
                      display: "block",
                    }}
                    whileHover="hovered"
                  >
                    <motion.img
                      src={img.url}
                      alt={img.title}
                      style={{
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                        filter: "sepia(8%) contrast(1.04)",
                      }}
                      variants={{ hovered: { scale: 1.05, filter: "sepia(0%) contrast(1.06)" } }}
                      transition={{ duration: 0.45 }}
                    />

                    {/* Overlay on hover */}
                    <motion.div
                      style={{
                        position: "absolute", inset: 0,
                        background: "rgba(20,8,0,0)",
                        display: "flex", flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "1.1rem",
                      }}
                      variants={{
                        hovered: { background: "rgba(20,8,0,0.52)" },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        variants={{ hovered: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.25 }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                      >
                        <div>
                          <span style={{
                            fontFamily: font.sans, fontWeight: 700,
                            fontSize: "0.6rem", letterSpacing: "0.14em",
                            textTransform: "uppercase", color: C.amberGlow,
                            display: "block", marginBottom: "2px",
                          }}>
                            {img.cat}
                          </span>
                          <span style={{
                            fontFamily: font.display, fontSize: "0.95rem",
                            fontWeight: 700, color: C.white,
                          }}>
                            {img.title}
                          </span>
                        </div>
                        <div style={{
                          width: "32px", height: "32px", borderRadius: "50%",
                          background: `${C.amber}80`, backdropFilter: "blur(4px)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <ZoomIn size={14} style={{ color: C.white }} />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Category chip — always visible */}
                    <div style={{
                      position: "absolute", top: "0.65rem", left: "0.65rem",
                      fontFamily: font.sans, fontWeight: 700, fontSize: "0.58rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: C.amber,
                      background: `${C.cream}E8`,
                      border: `1px solid ${C.border}`,
                      padding: "0.2rem 0.55rem", borderRadius: "3px",
                      backdropFilter: "blur(4px)",
                    }}>
                      {img.cat}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* ── Admin note ── */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{
                marginTop: "3rem",
                background: C.parchment,
                border: `1px dashed ${C.borderMid}`,
                borderRadius: "8px",
                padding: "1.25rem 1.75rem",
                display: "flex", gap: "0.75rem", alignItems: "flex-start",
              }}
            >
              <div style={{ width: "3px", borderRadius: "99px", background: C.amber, alignSelf: "stretch", flexShrink: 0 }} />
              <p style={{ fontFamily: font.sans, fontSize: "0.78rem", color: C.textMuted, lineHeight: 1.75 }}>
                <strong style={{ color: C.textMain }}>Note for admins:</strong> Replace placeholder images with actual KET India photos.
                Place images in the <code style={{ background: C.parchment, border: `1px solid ${C.border}`, borderRadius: "3px", padding: "0.1rem 0.4rem", fontFamily: "monospace", fontSize: "0.76rem" }}>/public/gallery/</code> folder and update the image URLs in{" "}
                <code style={{ background: C.parchment, border: `1px solid ${C.border}`, borderRadius: "3px", padding: "0.1rem 0.4rem", fontFamily: "monospace", fontSize: "0.76rem" }}>app/gallery/page.tsx</code>.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ════════════════════════════════════════════════════
          LIGHTBOX
      ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && currentImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onKeyDown={handleKey}
            tabIndex={0}
            onClick={closeLightbox}
            style={{
              position: "fixed", inset: 0, zIndex: 100,
              background: "rgba(10,4,0,0.94)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem",
              outline: "none",
            }}
          >
            {/* Image container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "900px", width: "100%",
                borderRadius: "12px", overflow: "hidden",
                boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
                border: `1px solid ${C.amber}30`,
              }}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "cover" }}
              />

              {/* Caption bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(10,4,0,0.88) 0%, transparent 100%)",
                padding: "2.5rem 1.75rem 1.5rem",
                display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              }}>
                <div>
                  <span style={{
                    fontFamily: font.sans, fontWeight: 700, fontSize: "0.6rem",
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: C.amberGlow, display: "block", marginBottom: "3px",
                  }}>
                    {currentImage.cat}
                  </span>
                  <span style={{
                    fontFamily: font.display, fontSize: "1.2rem", fontWeight: 700,
                    color: C.white,
                  }}>
                    {currentImage.title}
                  </span>
                </div>
                {/* Counter */}
                <span style={{
                  fontFamily: font.sans, fontSize: "0.72rem", color: `${C.amberLight}88`,
                }}>
                  {(lightboxIndex + 1).toString().padStart(2, "0")} / {filtered.length.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                style={{
                  position: "absolute", top: "0.85rem", right: "0.85rem",
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "rgba(10,4,0,0.6)", border: `1px solid ${C.amber}40`,
                  backdropFilter: "blur(6px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: C.white,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = `${C.amber}80`)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(10,4,0,0.6)")}
              >
                <X size={15} />
              </button>
            </motion.div>

            {/* ── Prev / Next ── */}
            {[
              { dir: "prev", icon: ChevronLeft,  action: prevImage, side: "left"  },
              { dir: "next", icon: ChevronRight, action: nextImage, side: "right" },
            ].map(({ dir, icon: Icon, action, side }) => (
              <button
                key={dir}
                onClick={(e) => { e.stopPropagation(); action(); }}
                style={{
                  position: "fixed",
                  [side]: "1.5rem",
                  top: "50%", transform: "translateY(-50%)",
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "rgba(10,4,0,0.5)",
                  border: `1px solid ${C.amber}35`,
                  backdropFilter: "blur(6px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: C.white, zIndex: 101,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${C.amber}60`;
                  (e.currentTarget as HTMLElement).style.borderColor = C.amberLight;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(10,4,0,0.5)";
                  (e.currentTarget as HTMLElement).style.borderColor = `${C.amber}35`;
                }}
              >
                <Icon size={18} />
              </button>
            ))}

            {/* ── Dot strip ── */}
            <div style={{
              position: "fixed", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: "6px", alignItems: "center", zIndex: 101,
            }}>
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  style={{
                    width: i === lightboxIndex ? "24px" : "6px",
                    height: "6px",
                    borderRadius: "99px",
                    background: i === lightboxIndex ? C.amberLight : `${C.amberLight}40`,
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}