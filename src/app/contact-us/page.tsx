import { Box, Container, Typography } from "@mui/material";
import Navbar from "@/components/layout/Navbar";

export default function ContactUsPage() {
  return (
    <Box component="main" sx={{ bgcolor: "#073f35", minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: { xs: 18, md: 22 }, pb: 12 }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 48, md: 82 },
            lineHeight: 1.05,
          }}
        >
          Contact us
        </Typography>
      </Container>
    </Box>
  );
}
