"use client";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────
const C = {
  amber:      "#C8862A",
  amberLight: "#E6A84A",
  amberDim:   "#A06820",
  deep:       "#1E0E00",
  surface:    "#291400",
  card:       "#331A00",
  border:     "#4A2E00",
  borderMid:  "#5C3A00",
  textWhite:  "#FFFCF5",
  textBody:   "#C4A97A",
  textMuted:  "#7A5C30",
  cream:      "#FAF6EE",
};

const font = {
  display: "'Cormorant Garamond', 'Georgia', serif",
  sans:    "'Raleway', 'Helvetica Neue', sans-serif",
  serif:   "'EB Garamond', 'Georgia', serif",
};

const quickLinks = [
  { label: "About Us",      href: "/about" },
  { label: "Programs",      href: "/programs" },
  { label: "Our Impact",    href: "/impact" },
  { label: "Parent Corner", href: "/parent-corner" },
  { label: "Gallery",       href: "/gallery" },
  { label: "Get Involved",  href: "/get-involved" },
  { label: "Contact",       href: "/contact" },
];

const socials = [
  { Icon: Send, href: "#", label: "Telegram" },
];

function useBreakpoint() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return {
    isMobile:  width < 640,
    isTablet:  width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <h3 style={{
      fontFamily: font.display, fontWeight: 700, fontSize: "1.1rem",
      color: C.textWhite, marginBottom: "1.4rem", letterSpacing: "0.01em",
    }}>{children}</h3>
    <div style={{ width: "28px", height: "2px", background: C.amber, borderRadius: "99px", marginBottom: "1.4rem" }} />
  </>
);

export default function Footer() {
  const bp = useBreakpoint();

  // Grid layout:
  // Desktop:  4-col (brand | links | contact | support)
  // Tablet:   2-col (brand+links | contact+support)
  // Mobile:   1-col stacked
  const gridCols = bp.isDesktop ? "1.8fr 1fr 1fr 1.4fr"
                 : bp.isTablet  ? "1fr 1fr"
                 : "1fr";

  return (
    <footer style={{ background: C.deep, fontFamily: font.sans }}>

      {/* ── Top amber rule ── */}
      <div style={{
        height: "3px",
        background: `linear-gradient(to right, transparent, ${C.amber}, ${C.amberLight}, ${C.amber}, transparent)`,
      }} />

      {/* ── Main content ── */}
      <div style={{ maxWidth: "1220px", margin: "0 auto", padding: bp.isMobile ? "3.5rem 1.5rem 2.5rem" : "5rem 2rem 3.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: gridCols,
          gap: bp.isMobile ? "2.75rem" : bp.isTablet ? "3rem" : "4rem",
          alignItems: "start",
        }}>

          {/* ── Column 1 — Brand ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "46px", height: "46px", borderRadius: "50%",
                border: `2px solid ${C.amberDim}`, overflow: "hidden",
                flexShrink: 0, background: C.card,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <img
                  src="/logo.jpg"
                  alt="KET India"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                    if (t.parentElement)
                      t.parentElement.innerHTML = `<span style="font-family:${font.display};font-weight:700;font-size:1.2rem;color:${C.amber}">K</span>`;
                  }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: font.display, fontWeight: 700, fontSize: "1.25rem",
                  color: C.textWhite, lineHeight: 1.2, letterSpacing: "0.01em",
                }}>Khodiyar Education Trust</div>
                <div style={{
                  fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: C.amberDim, marginTop: "2px",
                }}>KET India · Est. 1994</div>
              </div>
            </div>

            <p style={{
              fontFamily: font.serif, fontStyle: "italic",
              fontSize: "1.05rem", lineHeight: 1.75, color: C.textBody,
              marginBottom: "1.25rem", maxWidth: "320px",
            }}>
              "Empowering abilities, transforming lives — one child at a time."
            </p>

            <p style={{
              fontSize: "0.82rem", lineHeight: 1.85, color: C.textMuted,
              maxWidth: "320px", marginBottom: "1.5rem",
            }}>
              A registered non-profit dedicated to transforming the lives of children with
              intellectual disabilities through education, therapy, and compassionate care.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
              {["12A", "80G", "National Trust", "PWD Act 1995"].map((cert) => (
                <span key={cert} style={{
                  fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: C.amber,
                  border: `1px solid ${C.border}`, padding: "0.25rem 0.6rem",
                  borderRadius: "3px", background: `${C.amber}08`,
                }}>{cert}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: C.card, border: `1px solid ${C.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.textMuted, textDecoration: "none", transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${C.amber}22`;
                    el.style.borderColor = C.amberDim;
                    el.style.color = C.amberLight;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = C.card;
                    el.style.borderColor = C.border;
                    el.style.color = C.textMuted;
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2 — Quick Links ── */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontSize: "0.85rem", color: C.textMuted, textDecoration: "none",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  transition: "color 0.2s", lineHeight: 1.4,
                }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.amberLight)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                >
                  <span style={{
                    width: "4px", height: "4px", borderRadius: "50%",
                    background: C.amberDim, flexShrink: 0, display: "inline-block",
                  }} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Column 3 — Contact ── */}
          <div>
            <SectionHeading>Contact Us</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Mail size={14} style={{ color: C.amber, marginTop: "3px", flexShrink: 0 }} />
                <a href="mailto:khodiyareducationtrust@yahoo.in" style={{
                  fontSize: "0.82rem", color: C.textMuted, textDecoration: "none",
                  lineHeight: 1.6, wordBreak: "break-all", transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.amberLight)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                >
                  khodiyareducationtrust<br />@yahoo.in
                </a>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: C.amber, marginTop: "3px", flexShrink: 0 }} />
                <p style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.6 }}>
                  Modhera Road, Mahesana<br />Gujarat – 384002, India
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Phone size={14} style={{ color: C.amber, marginTop: "3px", flexShrink: 0 }} />
                <p style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.6 }}>
                  Bombay Public Charitable<br />Trust Act · E-3086
                </p>
              </div>
            </div>
          </div>

          {/* ── Column 4 — Support / Donation ── */}
          <div>
            <SectionHeading>Support Us</SectionHeading>
            <p style={{
              fontSize: "0.8rem", color: C.textMuted, lineHeight: 1.75, marginBottom: "1.25rem",
            }}>
              Your donation is eligible for 80G tax exemption. Direct bank transfer details below.
            </p>

            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: "8px", padding: "1.1rem 1.25rem", marginBottom: "1.5rem",
            }}>
              <p style={{
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: C.amber, marginBottom: "0.9rem",
              }}>Bank Details</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                {[
                  ["Bank",     "HDFC Bank, Modhera Road"],
                  ["A/c Name", "Khodiyar Education Trust"],
                  ["A/c No.",  "50100200865123"],
                  ["IFSC",     "HDFC00037778"],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.7rem", color: C.textMuted, flexShrink: 0 }}>{label}</span>
                    <span style={{
                      fontSize: "0.7rem", color: C.textBody, textAlign: "right", fontWeight: 500,
                      letterSpacing: label === "A/c No." || label === "IFSC" ? "0.05em" : "normal",
                    }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/get-involved" style={{
              display: "block", textAlign: "center",
              background: C.amber, color: C.textWhite,
              padding: "0.75rem", borderRadius: "5px",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              textDecoration: "none", transition: "background 0.2s",
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = C.amberLight)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = C.amber)}
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          marginTop: "4rem", paddingTop: "1.75rem",
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          flexDirection: bp.isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: bp.isMobile ? "flex-start" : "center",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "0.75rem", color: C.textMuted }}>
            © 2025 Khodiyar Education Trust. All rights reserved.
          </p>
          <p style={{
            fontSize: "0.75rem", fontFamily: font.serif,
            fontStyle: "italic", color: C.amberDim,
          }}>
            Empowering abilities. Transforming lives.
          </p>
        </div>
      </div>
    </footer>
  );
}