"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Box
      sx={{
        bgcolor: "#073f35",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg" disableGutters>
        {/* Outer card — slightly lighter green, rounded */}
        <Box
          sx={{
            bgcolor: "#0a4f43",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            minHeight: { xs: "auto", md: 520 },
          }}
        >
          {/* ── Left: text side ── */}
          <Box
            sx={{
              flex: "0 0 58%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 4, md: 6 },
              py: { xs: 6, md: 7 },
            }}
          >
            {/* Label */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 11,
                fontFamily: "var(--font-sans, sans-serif)",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 1.5,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              About Yaks Capital
            </Typography>

            {/* Horizontal rule */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "rgba(255,255,255,0.2)",
                mb: { xs: 3, md: 4 },
              }}
            />

            {/* Headline — large, left-aligned, serif, two lines */}
            <Typography
              component="h2"
              sx={{
                color: "#ffffff",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 600,
                fontStyle: "normal",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontSize: { xs: 40, sm: 52, md: 60, lg: 68 },
                mb: { xs: 3, md: 4 },
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
                textShadow: "0 0 1px rgba(255,255,255,0.9)",
              }}
            >
              Multi-strategy capabilities
            </Typography>

            {/* Body */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.8,
                maxWidth: 480,
                fontFamily: "var(--font-sans, sans-serif)",
                fontWeight: 400,
                letterSpacing: "0.01em",
                mb: { xs: 5, md: 6 },
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textShadow: "0 0 1px rgba(255,255,255,0.25)",
              }}
            >
              We manage dynamic portfolios of quantitative investment trading
              strategies across the world’s major liquid asset classes. Through
              continuous investment in research and development, we efficiently
              transform ideas into live trading strategies, enabling rapid
              execution and scalable performance across global markets.
            </Typography>

            {/* Pill button — white bg, dark text, matching Winton exactly */}
          <Box>
  <Box
    component={Link}
    href="/about-us/what-we-do"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      px: 4,
      py: 1.75,
      bgcolor: "#ffffff",
      color: "#073f35",
      border: "none",
      borderRadius: "999px",
      fontSize: 15,
      fontWeight: 500,
      fontFamily: "var(--font-sans, sans-serif)",
      letterSpacing: "0.01em",
      cursor: "pointer",
      textDecoration: "none",
      transition: "background 0.2s, color 0.2s",
      "&:hover": {
        bgcolor: "rgba(255,255,255,0.88)",
      },
    }}
  >
    What we do
  </Box>
</Box>
          </Box>

          {/* ── Right: image side ── */}
          <Box
            sx={{
              flex: "0 0 42%",
              position: "relative",
              minHeight: { xs: 260, md: "auto" },
            }}
          >
            <Image
              src="/image/pic3.jpg" // ← replace with your actual image path
              alt="Team at work"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
