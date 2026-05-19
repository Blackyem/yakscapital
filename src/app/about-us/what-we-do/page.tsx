import { Box, Container, Typography } from "@mui/material";
import Navbar from "@/components/layout/Navbar";

export default function WhatWeDoPage() {
  return (
    <Box component="main" sx={{ bgcolor: "#073f35", minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: { xs: 18, md: 22 }, pb: 12 }}>
        <Typography
          sx={{
            fontSize: 13,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          About us
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 48, md: 82 },
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            mb: 4,
          }}
        >
          What we do
        </Typography>

        <Typography sx={{ fontSize: { xs: 18, md: 22 }, lineHeight: 1.55 }}>
          We use research, data and technology to design quantitative investment
          strategies for changing markets.
        </Typography>
      </Container>
    </Box>
  );
}
