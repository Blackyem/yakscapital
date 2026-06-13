"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  imageSrc: string;
  align?: "top" | "center";
};

function FeatureCard({
  eyebrow,
  title,
  description,
  buttonText,
  href,
  imageSrc,
  align = "center",
}: FeatureCardProps) {
  const isCentered = align === "center";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 480, sm: 560, md: 535 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 7 },
        py: { xs: 6, md: 7 },
      }}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 900px) 100vw, 50vw"
        style={{
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.52)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 430,
          textAlign: isCentered ? "center" : "left",
          color: "#ffffff",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 600,
            mb: 2,
          }}
        >
          {eyebrow}
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "rgba(255,255,255,0.55)",
            mb: { xs: 3, md: 3.5 },
          }}
        />

        <Typography
          component="h3"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            fontSize: { xs: 36, sm: 48, md: 58 },
            mb: { xs: 3.5, md: 4 },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 16, md: 16 },
            lineHeight: 1.55,
            mb: { xs: 4.5, md: 5 },
          }}
        >
          {description}
        </Typography>

        <Box
          component={Link}
          href={href}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            px: 4,
            py: 1.6,
            bgcolor: "#ffffff",
            color: "#073f35",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 500,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.88)",
            },
          }}
        >
          {buttonText}
        </Box>
      </Box>
    </Box>
  );
}

export default function FeatureCardsSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#073f35",
        px: { xs: 0, md: 4.5 },
        pb: { xs: 0, md: 4 },
      }}
    >
      <Container maxWidth={false} sx={{ px: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 3 },
          }}
        >
          <FeatureCard
            eyebrow="Leadership"
            title="Driven by Purpose"
            description="Experience matters, but execution defines us. Driven by decades of shared industry expertise, our executive team leads by example to set a forward-thinking agenda. We focus entirely on what matters most: delivering high-impact results, fostering long-term trust, and ensuring continuous success for our clients."
            buttonText="Our leadership"
            href="about-us/our-responsibilities"
            imageSrc="/image/pic5.jpg"
            align="center"
          />

          <FeatureCard
            eyebrow="History"
            title="Innovation as Our Edge"
            description="True investment edges are engineered, not found. YaksCapital was established to transform financial markets through continuous research and technological development. This commitment to innovation remains our core guiding principle, driving our strategy and ensuring we consistently deliver long-term value for our partners."
            buttonText="Our history"
            href="about-us/what-we-do"
            imageSrc="/image/pic11.jpg"
            align="center"
          />
        </Box>
      </Container>
    </Box>
  );
}
