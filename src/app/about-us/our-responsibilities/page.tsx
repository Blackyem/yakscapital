"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";

type ResponsibilityBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  reverse?: boolean;
};

function ResponsibilityBlock({
  eyebrow,
  title,
  description,
  buttonText,
  imageSrc,
  reverse = false,
}: ResponsibilityBlockProps) {
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
        sx={{
          position: "relative",
          height: { xs: 380, md: 560 },
          borderRadius: "8px",
          overflow: "hidden",
          order: { xs: 1, md: reverse ? 2 : 1 },
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

      <Box
        ref={contentRef}
        sx={{
          order: { xs: 2, md: reverse ? 1 : 2 },
          maxWidth: 560,
          opacity: showContent ? 1 : 0,
          transform: showContent
            ? "translateX(0)"
            : reverse
            ? "translateX(-70px)"
            : "translateX(70px)",
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
            mb: 5,
          }}
        >
          {description}
        </Typography>

        <Button
          sx={{
            bgcolor: "#168b79",
            color: "#ffffff",
            borderRadius: "999px",
            px: 4,
            py: 1.45,
            textTransform: "none",
            fontSize: 14,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#0f7667",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}

export default function OurResponsibilitiesPage() {
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
          src="/image/pic5.jpg"
          alt="Our responsibilities"
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
              maxWidth: 900,
            }}
          >
            Our responsibilities
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
          Mindful of our responsibilities
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
          Business with values
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 18, md: 22 },
            lineHeight: 1.55,
            color: "#071f1b",
          }}
        >
          We are mindful of our role and responsibilities when interacting with
          financial markets and society as a whole. YaksCapital supports
          initiatives that seek to address meaningful challenges through
          disciplined investment management, thoughtful decision-making and
          long-term commitment.
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 4.5 }, pb: 8 }}>
        <ResponsibilityBlock
          eyebrow="Accountable"
          title="Responsible investment"
          description="Our approach to responsible investment spans industry engagement, asset selection and ownership, with accountability at the center of how we operate."
          buttonText="Read our responsible investment policy"
          imageSrc="/image/pic6.jpg"
        />

        <ResponsibilityBlock
          eyebrow="Ethical"
          title="Corporate social responsibility"
          description="We consider our obligations carefully. Operating our business in a responsible and ethical manner is central to our values and long-term partnerships."
          buttonText="Read our corporate social responsibility policy"
          imageSrc="/image/pic11.jpg"
          reverse
        />

        <ResponsibilityBlock
          eyebrow="Inclusive"
          title="Diversity and inclusion"
          description="We recognise the benefit that diversity brings to our firm. Our goal is to attract, support and retain a diverse mix of highly skilled individuals."
          buttonText="Read our diversity and inclusion statement"
          imageSrc="/image/pic3.jpg"
        />
      </Container>
    </Box>
  );
}