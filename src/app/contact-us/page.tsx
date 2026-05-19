"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";

export default function ContactUsPage() {
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
          src="/image/pic11.jpg"
          alt="Contact us"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.36)" }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, pb: { xs: 8, md: 12 } }}
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
            Contact us
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: "#0b2f29",
            mb: 3,
          }}
        >
          Contact us
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "rgba(7,63,53,0.32)", mb: 4 }} />

        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: { xs: 44, md: 62 },
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: "#214d46",
            mb: 4,
          }}
        >
          Get in touch
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 18, md: 18 },
            lineHeight: 1.6,
            color: "#071f1b",
            mb: 3,
          }}
        >
          We welcome enquiries from prospective investors, partners, and
          collaborators. Please reach out to us using the details below, and a
          member of our team will respond promptly. Yaks Capital will never try
          to contact you directly through social media or encrypted messaging
          platforms.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 16, md: 16 },
            lineHeight: 1.7,
            color: "#071f1b",
          }}
        >
          YaksCapital will never contact you through suspicious social media or
          encrypted messaging platforms. If in doubt, contact us directly.
        </Typography>
        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 3,
          }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: "12px",
              bgcolor: "#f7f7f3",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#214d46",
                mb: 2,
              }}
            >
              General enquiries
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#071f1b",
                mb: 3,
              }}
            >
              For questions about our firm, investment approach or services.
            </Typography>

            <Typography
              component="a"
              href="mailto:company@yakscapital.com"
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: "#168b79",
                textDecoration: "none",
              }}
            >
              company@yakscapital.com
            </Typography>
          </Box>

          <Box
            sx={{
              p: 4,
              borderRadius: "12px",
              bgcolor: "#f7f7f3",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#214d46",
                mb: 2,
              }}
            >
              Investor relations
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#071f1b",
                mb: 3,
              }}
            >
              For existing and prospective investors seeking more information.
            </Typography>

            <Typography
              component="a"
              href="mailto:ir@yakscapital.com"
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: "#168b79",
                textDecoration: "none",
              }}
            >
              ir@yakscapital.com
            </Typography>
          </Box>

          <Box
            sx={{
              p: 4,
              borderRadius: "12px",
              bgcolor: "#f7f7f3",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#214d46",
                mb: 2,
              }}
            >
              Careers
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#071f1b",
                mb: 3,
              }}
            >
              We are always interested in exceptional talent in research,
              engineering and trading.
            </Typography>

            <Typography
              component="a"
              href="mailto:debbie@yakscapital.com"
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: "#168b79",
                textDecoration: "none",
              }}
            >
              debbie@yakscapital.com
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "#f7f7f3", py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: 7 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: { xs: 42, md: 58 },
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#214d46",
                mb: 3,
              }}
            >
              Our office
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.7,
                color: "#071f1b",
              }}
            >
              Our team works from one focused office, built to support research,
              disciplined execution and long-term client service.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 760,
              mx: "auto",
              bgcolor: "#168b79",
              color: "#ffffff",
              borderRadius: "18px",
              p: { xs: 4, md: 6 },
              boxShadow: "0 22px 70px rgba(0,0,0,0.16)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 260,
                height: 260,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.08)",
                top: -90,
                right: -80,
              }}
            />

            <Typography
              sx={{
                fontSize: 12,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                mb: 2,
                position: "relative",
                zIndex: 2,
              }}
            >
              Corporate Office
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: { xs: 34, md: 48 },
                lineHeight: 1.1,
                mb: 3,
                position: "relative",
                zIndex: 2,
              }}
            >
              YaksCapital Services
            </Typography>

            <Typography
              sx={{
                fontSize: 17,
                lineHeight: 1.8,
                mb: 3,
                position: "relative",
                zIndex: 2,
              }}
            >
              Akure, Nigeria
              <br />
              5th Floor, Tisco Building, Alagbaka Quarters
            </Typography>

            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                mb: 4,
                position: "relative",
                zIndex: 2,
              }}
            >
              +234 903 988 9185
            </Typography>

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
                position: "relative",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.9)",
                },
              }}
            >
              Back to home
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
