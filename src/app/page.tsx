import { Box } from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import AboutSection from "@/components/home/AboutSection";
import FeatureCardsSection from "@/components/home/FeatureCardsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <IntroSection />
       <AboutSection />
      <FeatureCardsSection />
        <Footer />
    </Box>
  );
}
