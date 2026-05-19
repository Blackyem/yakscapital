import { Box } from "@mui/material";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import AboutSection from "@/components/home/AboutSection";
import FeatureCardsSection from "@/components/home/FeatureCardsSection";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <FeatureCardsSection />
    </Box>
  );
}