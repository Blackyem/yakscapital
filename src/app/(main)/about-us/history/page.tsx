"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";

export default function HistoryPage() {
  return (
    <Box
      component="main"
      sx={{
        bgcolor: "#073f35",
        minHeight: "100vh",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        px: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: 200, md: 360 },
          height: { xs: 200, md: 360 },
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.06)",
          top: "18%",
          left: { xs: "-5%", md: "8%" },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 280, md: 520 },
          height: { xs: 280, md: 520 },
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.04)",
          bottom: { xs: "-80px", md: "-160px" },
          right: { xs: "-60px", md: "-120px" },
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          pt: { xs: 16, md: 18 },
          pb: { xs: 10, md: 12 },
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.68)",
            mb: 3,
          }}
        >
          Page unavailable
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 64, sm: 96, md: 160 },
            lineHeight: 0.9,
            letterSpacing: "-0.08em",
            mb: 3,
          }}
        >
          404
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 26, sm: 34, md: 54 },
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            mb: 3,
          }}
        >
          History page coming soon
        </Typography>

        <Typography
          sx={{
            maxWidth: 620,
            mx: "auto",
            fontSize: { xs: 16, md: 19 },
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.76)",
            mb: 5,
          }}
        >
          We are currently preparing this section. Please explore other pages
          while we complete the experience.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            href="/"
            sx={{
              bgcolor: "#ffffff",
              color: "#073f35",
              borderRadius: "999px",
              px: 4,
              py: 1.45,
              textTransform: "none",
              fontSize: 15,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.88)",
              },
            }}
          >
            Back to home
          </Button>

                 </Box>
      </Container>
    </Box>
  );
}