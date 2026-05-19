"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: 620, md: 655 },
        bgcolor: "#021f1a",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          minHeight: { xs: 620, md: 655 },
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: 126, md: 170 },
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            zIndex: 2,
          }}
        >
          <Typography
            component="h1"
            sx={{
              maxWidth: 760,
              mx: "auto",
              textAlign: "center",
              color: "#fff",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              fontSize: {
                xs: 46,
                sm: 60,
                md: 72,
              },
            }}
          >
            We are experts in quantitative investing
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: { xs: 335, md: 398 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "72%", md: 845 },
            maxWidth: "calc(100% - 48px)",
            height: "1px",
            bgcolor: "rgba(255,255,255,0.82)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: { xs: 335, md: 398 },
            left: "50%",
            transform: "translateX(-50%)",
            width: "1px",
            height: { xs: 285, md: 257 },
            bgcolor: "rgba(255,255,255,0.82)",
            zIndex: 1,
          }}
        />
      </Box>

     <Box
  sx={{
    position: "absolute",
    right: { xs: 24, md: 76 },
    bottom: { xs: 24, md: 26 },
    width: { xs: 60, md: 120 },   // was 54/74 — now much more visible
    height: { xs: 32, md: 52 },   // was 28/38 — proportional increase
    opacity: 0.28,                 // was 0.22 — slightly more presence
    display: { xs: "none", md: "block" },
    filter: "grayscale(1)",
  }}
>
  <Image
    src="/YaksCapitalWhite.png"
    alt=""
    fill
    style={{ objectFit: "contain" }}
  />
</Box>
    </Box>
  );
}