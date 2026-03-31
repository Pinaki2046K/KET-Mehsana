"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function useWindowWidth() {
  const [width, setWidth] = useState(1280);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

// ─── Design tokens ────────────────────────────────────────────────
const C = {
  amber:      "#C8862A",
  amberLight: "#E6A84A",
  amberGlow:  "#F5C878",
  deep:       "#3A2200",
  darkBrown:  "#5C3600",
  cream:      "#FAF6EE",
  parchment:  "#F3ECD8",
  border:     "#E2CFA0",
  borderMid:  "#C9B07A",
  textMain:   "#2E1A00",
  textMuted:  "#8A6B3A",
  white:      "#FFFCF5",
};

const font = {
  display: "'Cormorant Garamond', 'Georgia', serif",
  sans:    "'Raleway', 'Helvetica Neue', sans-serif",
};

const navItems = [
  { name: "Home",          path: "/" },
  { name: "About Us",      path: "/about" },
  { name: "Programs",      path: "/programs" },
  { name: "Our Impact",    path: "/impact" },
  { name: "Parent Corner", path: "/parent-corner" },
  { name: "Gallery",       path: "/gallery" },
  { name: "Contact",       path: "/contact" },
];

export default function Header() {
  const [mounted, setMounted]       = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [logoError, setLogoError]   = useState(false);

  const pathname = usePathname();
  const width    = useWindowWidth();

  const isDesktop = width >= 1024;

  // Three nav density tiers:
  // "tight"  → 1024–1179px  (just cleared mobile — compress a little)
  // "normal" → 1180–1399px  (typical laptop — comfortable reading size)
  // "wide"   → 1400px+      (large desktop — spacious)
  const navTier: "tight" | "normal" | "wide" =
    width < 1180 ? "tight" : width < 1400 ? "normal" : "wide";

  const navFontSize    = navTier === "tight" ? "0.8rem"  : navTier === "normal" ? "0.88rem" : "0.92rem";
  const navPadding     = navTier === "tight" ? "0.45rem 0.6rem" : navTier === "normal" ? "0.45rem 0.85rem" : "0.45rem 1rem";
  const donateFontSize = navTier === "tight" ? "0.72rem" : "0.78rem";
  const donatePadding  = navTier === "tight" ? "0.6rem 1.1rem" : navTier === "normal" ? "0.65rem 1.5rem" : "0.65rem 1.8rem";
  const dividerMargin  = navTier === "tight" ? "0 0.5rem" : "0 0.75rem";

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  const isTransparent    = !scrolled && !isMenuOpen;
  const showDesktopNav   = mounted && isDesktop;
  const showMobileToggle = mounted && !isDesktop;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease",
        background: isTransparent ? "transparent" : `${C.cream}F5`,
        backdropFilter: isTransparent ? "none" : "blur(14px)",
        WebkitBackdropFilter: isTransparent ? "none" : "blur(14px)",
        borderBottom: isTransparent ? "1px solid transparent" : `1px solid ${C.border}`,
        boxShadow: isTransparent ? "none" : `0 4px 32px rgba(58,34,0,0.07)`,
      }}
    >
      <div style={{ maxWidth: "1220px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "64px" : "76px",
          transition: "height 0.4s ease",
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "44px", height: "44px",
                borderRadius: "50%",
                border: `2px solid ${isTransparent ? "rgba(230,168,74,0.55)" : C.borderMid}`,
                overflow: "hidden", flexShrink: 0,
                transition: "border-color 0.4s",
                background: isTransparent ? "rgba(255,248,220,0.12)" : C.parchment,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {!logoError ? (
                <img
                  src="/logo.jpg"
                  alt="KET India Logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span style={{ fontFamily: font.display, fontWeight: 700, fontSize: "1.1rem", color: C.amber }}>K</span>
              )}
            </motion.div>

            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontFamily: font.display, fontWeight: 700, fontSize: "1.2rem",
                letterSpacing: "0.01em",
                color: isTransparent ? C.white : C.textMain,
                transition: "color 0.4s", lineHeight: 1.2,
              }}>KET India</div>
              <div style={{
                fontFamily: font.sans, fontSize: "0.6rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: isTransparent ? "rgba(245,200,120,0.75)" : C.textMuted,
                transition: "color 0.4s", marginTop: "2px",
              }}>Khodiyar Education Trust</div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          {showDesktopNav && (
            <div style={{ display: "flex", alignItems: "center", gap: "0", marginLeft: "0.5rem" }}>
              {navItems.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={item.path}
                      style={{
                        position: "relative",
                        display: "inline-block",
                        padding: navPadding,
                        fontFamily: font.sans,
                        fontWeight: isActive ? 700 : 500,
                        fontSize: navFontSize,
                        letterSpacing: "0.03em",
                        textDecoration: "none",
                        color: isActive
                          ? C.amber
                          : isTransparent
                          ? "rgba(255,248,220,0.88)"
                          : C.textMain,
                        transition: "color 0.25s",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLElement).style.color = C.amber;
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLElement).style.color = isTransparent
                            ? "rgba(255,248,220,0.88)"
                            : C.textMain;
                      }}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          style={{
                            position: "absolute", bottom: "0px",
                            left: "0.5rem", right: "0.5rem",
                            height: "1.5px", background: C.amber,
                            borderRadius: "99px", display: "block",
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div style={{
                width: "1px", height: "20px",
                background: isTransparent ? "rgba(230,168,74,0.25)" : C.border,
                margin: dividerMargin,
                transition: "background 0.4s", flexShrink: 0,
              }} />

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/get-involved"
                  style={{
                    background: C.amber, color: C.white,
                    padding: donatePadding,
                    borderRadius: "4px",
                    fontFamily: font.sans, fontWeight: 700,
                    fontSize: donateFontSize,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none", display: "inline-block",
                    transition: "background 0.2s",
                    boxShadow: `0 2px 12px rgba(200,134,42,0.3)`,
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = C.amberLight)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = C.amber)
                  }
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>
          )}

          {/* ── Mobile Toggle ── */}
          {showMobileToggle && (
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "0.4rem",
                color: isTransparent ? C.white : C.textMain,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "color 0.3s",
              }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {!isDesktop && isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              background: C.cream,
              borderTop: `1px solid ${C.border}`,
              borderBottom: `1px solid ${C.border}`,
              padding: "1rem 1.5rem 1.5rem",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", marginBottom: "1.25rem" }}>
                {navItems.map((item, i) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.28 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          display: "flex", alignItems: "center", gap: "0.6rem",
                          padding: "0.75rem 0.9rem", borderRadius: "6px",
                          fontFamily: font.sans,
                          fontWeight: isActive ? 700 : 500,
                          fontSize: "0.85rem", letterSpacing: "0.04em",
                          textDecoration: "none",
                          color: isActive ? C.amber : C.textMain,
                          background: isActive ? `${C.amber}12` : "transparent",
                          borderLeft: isActive ? `2px solid ${C.amber}` : "2px solid transparent",
                          transition: "all 0.18s",
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div style={{ height: "1px", background: C.border, marginBottom: "1.25rem" }} />

              <Link
                href="/get-involved"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block", textAlign: "center",
                  background: C.amber, color: C.white,
                  padding: "0.85rem", borderRadius: "6px",
                  fontFamily: font.sans, fontWeight: 700,
                  fontSize: "0.78rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", textDecoration: "none",
                  boxShadow: `0 4px 16px rgba(200,134,42,0.28)`,
                }}
              >
                Donate Now
              </Link>

              <p style={{
                marginTop: "1rem", textAlign: "center",
                fontFamily: font.sans, fontSize: "0.62rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: C.textMuted,
              }}>
                Khodiyar Education Trust · Est. 1994
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}