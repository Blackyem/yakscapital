"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";

const cards = [
  {
    icon: "✉",
    sublabel: "Contact",
    label: "General enquiries",
    description:
      "For questions about our firm, investment approach or services.",
    email: "company@yakscapital.com",
  },
  {
    icon: "◈",
    sublabel: "Investors",
    label: "Investor relations",
    description:
      "For existing and prospective investors seeking more information.",
    email: "ir@yakscapital.com",
  },
  {
    icon: "✦",
    sublabel: "Join us",
    label: "Careers",
    description:
      "We are always interested in exceptional talent in research, engineering and trading.",
    email: "debbie@yakscapital.com",
  },
];

export default function ContactUsPage() {
  return (
    <Box component="main" sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>

      {/* ── Hero ── */}
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
          src="/contact/contact1.jpg"
          alt="Contact us"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.36)" }} />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, pb: { xs: 8, md: 12 } }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: { xs: 40, sm: 52, md: 82 },
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
              color: "#ffffff",
            }}
          >
            Contact us
          </Typography>
        </Container>
      </Box>

      {/* ── Intro + Cards ── */}
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
            fontSize: { xs: 34, sm: 44, md: 62 },
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
            fontSize: { xs: 16, md: 18 },
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
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.7,
            color: "#071f1b",
          }}
        >
          YaksCapital will never contact you through suspicious social media or
          encrypted messaging platforms. If in doubt, contact us directly.
        </Typography>

        {/* ── Cards grid ── */}
        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.label}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                overflow: "hidden",
                border: "0.5px solid rgba(7,63,53,0.12)",
                bgcolor: "#ffffff",
                transition: "transform 0.25s, box-shadow 0.25s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 48px rgba(7,63,53,0.14)",
                },
              }}
            >
              {/* Dark green header */}
              <Box
                sx={{
                  bgcolor: "#073f35",
                  px: "28px",
                  pt: "28px",
                  pb: "24px",
                  flexShrink: 0,
                }}
              >
                {/* Icon badge */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    bgcolor: "rgba(255,255,255,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: "#ffffff",
                    mb: "16px",
                  }}
                >
                  {card.icon}
                </Box>

                {/* Sublabel */}
                <Typography
                  sx={{
                    fontSize: 10,
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.50)",
                    mb: "6px",
                  }}
                >
                  {card.sublabel}
                </Typography>

                {/* Title — fixed min-height keeps all three on same baseline */}
                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    minHeight: "48px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {card.label}
                </Typography>
              </Box>

              {/* White body */}
              <Box
                sx={{
                  px: "28px",
                  pt: "24px",
                  pb: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#3d5c57",
                    flex: 1,
                    mb: "24px",
                  }}
                >
                  {card.description}
                </Typography>

                {/* Email — always pinned to bottom */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    pt: "18px",
                    borderTop: "0.5px solid rgba(7,63,53,0.10)",
                    mt: "auto",
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      bgcolor: "#168b79",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    component="a"
                    href={`mailto:${card.email}`}
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#168b79",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                      "&:hover": {
                        color: "#0d6b5e",
                        textDecoration: "underline",
                      },
                      transition: "color 0.2s",
                    }}
                  >
                    {card.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ── Office section ── */}
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
                width: { xs: 160, md: 260 },
                height: { xs: 160, md: 260 },
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.08)",
                top: { xs: -50, md: -90 },
                right: { xs: -40, md: -80 },
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