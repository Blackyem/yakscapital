"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

type InfoBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
};

function InfoBlock({ eyebrow, title, description, imageSrc }: InfoBlockProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowContent(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 5, md: 12 },
        alignItems: "center",
        py: { xs: 7, md: 9 },
      }}
    >
      <Box
        ref={contentRef}
        sx={{
          maxWidth: 560,
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateX(0)" : "translateX(-70px)",
          transition:
            "opacity 800ms ease, transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: "#0b2f29",
            mb: 3,
          }}
        >
          {eyebrow}
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "rgba(7,63,53,0.32)", mb: 4 }} />

        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 42, md: 58 },
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: "#214d46",
            mb: 4,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 16, md: 17 },
            lineHeight: 1.7,
            color: "#071f1b",
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: { xs: 380, md: 530 },
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}

export default function WhatWeDoPage() {
  return (
    <Box component="main" sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: 520, md: 640 },
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image
          src="/whatwedo/whatwedo.jpg"
          alt="What we do"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.34)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            pb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: { xs: 52, md: 82 },
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
              color: "#ffffff",
            }}
          >
            What we do
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 8, md: 13 } }}>
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: "#0b2f29",
            mb: 3,
          }}
        >
          Focused on returns
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "rgba(7,63,53,0.32)", mb: 4 }} />

        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 42, md: 58 },
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: "#214d46",
            mb: 4,
          }}
        >
          Quantitative investment management
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 18, md: 22 },
            lineHeight: 1.55,
            color: "#071f1b",
          }}
        >
          We research, design and trade systematic investment strategies. Our aim
          is to generate absolute returns and provide valuable diversification
          for our clients’ wider portfolios across a range of market
          environments.
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 4.5 }, pb: 8 }}>
        <InfoBlock
          eyebrow="Driven by research"
          title="Diverse capabilities; consistent approach"
          description="Our strategies span trading frequencies and styles and are implemented across thousands of exchange-traded and over-the-counter instruments. All our strategies are rooted in our belief that original research can provide an investment edge."
          imageSrc="/whatwedo/whatwedo2.jpg"
        />

        <InfoBlock
          eyebrow="Loss mitigation"
          title="Risk matters"
          description="Risk management underpins long-term success. The careful consideration of risk informs everything we do, from the design of our investment strategies to the size of our positions in markets."
          imageSrc="/whatwedo/whatwedo3.jpg"
        />
      </Container>
    </Box>
  );
}