import { Box, Container, Typography } from "@mui/material";
import Navbar from "@/components/layout/Navbar";

export default function HistoryPage() {
  return (
    <Box component="main" sx={{ bgcolor: "#073f35", minHeight: "100vh" }}>
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 18, md: 22 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: 13,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          History
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 48, md: 82 },
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            maxWidth: 820,
            mb: 4,
          }}
        >
          Driven by innovation
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 18, md: 22 },
            lineHeight: 1.55,
            maxWidth: 850,
          }}
        >
          Our firm is shaped by a belief in research, innovation and systematic
          investment thinking.
        </Typography>
      </Container>
    </Box>
  );
}
