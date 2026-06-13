"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerNavItems = [
  { label: "What we do", href: "#" },
  { label: "Career opportunities", href: "#" },
  { label: "Contact us", href: "#contact" },
  { label: "YaksCapital UCITS", href: "#" },
  { label: "YaksFunds.com", href: "#" },
];

const legalLinks = [
  { label: "Scam warning", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Policies and disclosures", href: "#" },
  { label: "Terms of use", href: "#" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#052a22",          // deeper than page — Winton footer is noticeably darker
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Top band: Follow us + LinkedIn ── */}
      <Box
        sx={{
          py: { xs: 3, md: 3.5 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: { xs: 15, md: 16 },
            fontWeight: 600,
            fontFamily: "var(--font-sans, sans-serif)",
            letterSpacing: "0.01em",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Follow life at Yaks Capital
        </Typography>

        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.2s",
              "&:hover": { opacity: 0.65 },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 17, color: "#ffffff" }} />
          </Box>
        </Link>
      </Box>

      {/* ── Watermark letterform — centred behind the middle row ── */}
      {/* Winton's "W" sits behind the nav row, roughly right-of-center */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "5%", md: "12%" },
          top: { xs: "28%", md: "22%" },
          fontSize: { xs: 120, sm: 160, md: 260 },
          lineHeight: 0.85,
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontWeight: 700,
          fontStyle: "italic",
          color: "rgba(255,255,255,0.13)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
          zIndex: 0,
        }}
      >
        Y
      </Box>

      {/* ── Middle row: logo | nav links | investor login ── */}
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, md: 7 }, position: "relative", zIndex: 1 }}
      >
        {/* Rule — sits inside the container so it spans exactly logo-to-button */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "rgba(255,255,255,0.38)",
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "200px 1fr 200px" },
            alignItems: "center",
            py: { xs: 5, md: 5.5 },
            gap: { xs: 4, md: 0 },
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Yaks Capital home">
            <Box sx={{ position: "relative", width: { xs: 140, md: 160 }, height: 42 }}>
              <Image
                src="/YaksCapitalWhite.png"
                alt="Yaks Capital logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </Box>
          </Link>

          {/* Nav links with pipe separators — Winton style */}
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
            }}
          >
            {footerNavItems.map((item, i) => (
              <Box key={item.label} sx={{ display: "flex", alignItems: "center" }}>
                <Link href={item.href}>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: { xs: 13, md: 14 },
                      fontFamily: "var(--font-sans, sans-serif)",
                      fontWeight: 400,
                      px: { xs: 1.2, md: 2 },
                      py: { xs: 0.5, md: 0 },
                      whiteSpace: "nowrap",
                      WebkitFontSmoothing: "antialiased",
                      transition: "opacity 0.2s",
                      "&:hover": { opacity: 0.55 },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>

              </Box>
            ))}
          </Box>

          {/* Investor login pill */}
          <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
            <Box
              component="button"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 3,
                py: 1.4,
                bgcolor: "#ffffff",
                color: "#052a22",
                border: "none",
                borderRadius: "999px",
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-sans, sans-serif)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
                "&:hover": { bgcolor: "rgba(255,255,255,0.86)" },
              }}
            >
              Investor login
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ── Bottom legal row ── */}
      <Box
        sx={{
          py: { xs: 2.5, md: 3 },
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {legalLinks.map((link, i) => (
          <Box key={link.label} sx={{ display: "flex", alignItems: "center" }}>
            <Link href={link.href}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: { xs: 10, md: 11 },
                  fontFamily: "var(--font-sans, sans-serif)",
                  px: { xs: 1, md: 1.5 },
                  py: { xs: 0.5, md: 0 },
                  WebkitFontSmoothing: "antialiased",
                  transition: "opacity 0.2s",
                  "&:hover": { color: "rgba(255,255,255,0.7)" },
                }}
              >
                {link.label}
              </Typography>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.2)", fontSize: { xs: 10, md: 11 }, userSelect: "none" }}>
              |
            </Typography>
          </Box>
        ))}

        <Typography
          sx={{
            color: "rgba(255,255,255,0.45)",
            fontSize: { xs: 10, md: 11 },
            fontFamily: "var(--font-sans, sans-serif)",
            px: { xs: 1, md: 1.5 },
            py: { xs: 0.5, md: 0 },
            WebkitFontSmoothing: "antialiased",
          }}
        >
          © 2026 Yaks Capital Ltd. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}