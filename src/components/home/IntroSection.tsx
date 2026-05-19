"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

function getScrollParent(el: HTMLElement | null): HTMLElement | Window {
  if (!el) return window;
  const style = getComputedStyle(el);
  const overflowY = style.overflowY;
  const isScrollable = overflowY === "auto" || overflowY === "scroll";
  if (isScrollable && el.scrollHeight > el.clientHeight) return el;
  return getScrollParent(el.parentElement);
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollContainer = getScrollParent(section);

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startFade = windowHeight * 0.1;
      const endFade = windowHeight * 0.7;

      if (rect.top <= startFade) {
        setProgress(0);
      } else if (rect.top >= endFade) {
        setProgress(1);
      } else {
        const raw = (rect.top - startFade) / (endFade - startFade);
        setProgress(Math.min(1, Math.max(0, raw)));
      }
    };

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="about"
      ref={sectionRef}
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#073f35",
        minHeight: { xs: 480, md: 580 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: { xs: 60, md: 72 }, 
          bgcolor: "rgba(255,255,255,0.45)",
        }}
      />

      <Container
        maxWidth="md" 
        
        sx={{
          px: { xs: 4, md: 6 },
          pt: { xs: 14, md: 18 }, 
          pb: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            opacity: 1 - progress,
            transform: `translateY(${-(progress * 40)}px)`,
            willChange: "opacity, transform",
          }}
        >
          {/* ── Headline ── */}
          <Typography
            component="h2"
            sx={{
              color: "#ffffff",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
              fontSize: { xs: 36, sm: 46, md: 54, lg: 60 },
              mb: { xs: 3, md: 4 }, // gap between headline and body

              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",

             
              textShadow: [
                "0 0 1px rgba(255,255,255,0.95)",
                "0 0 20px rgba(255,255,255,0.12)", 
              ].join(", "),
            }}
          >
            Delivering returns for our clients
          </Typography>

          {/* ── Body copy ── */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)", 
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.75,
              maxWidth: 680,
              mx: "auto", 
              fontFamily: "var(--font-sans, sans-serif)",
              fontWeight: 400,
              letterSpacing: "0.01em",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textShadow: "0 0 1px rgba(255,255,255,0.3)",
            }}
          >
            We are a quantitative investment management firm focused on
            delivering consistent returns across diverse market conditions. Our
            strategies are built on proprietary research, disciplined
            statistical analysis, and extensive market expertise.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
