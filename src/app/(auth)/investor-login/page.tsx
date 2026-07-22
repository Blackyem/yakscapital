"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Link as MuiLink,
  ThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import {
  IconShieldLock,
  IconBuildingBank,
} from "@tabler/icons-react";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#052f28",
      paper: "#073f35",
    },
    primary: {
      main: "#ffffff",
      contrastText: "#052f28",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.55)",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Arial, sans-serif",
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 10,
          padding: "14px 28px",
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
      },
    },
  },
});

type Mode = "login" | "signup";

export default function InvestorLoginPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={`
          * { box-sizing: border-box; }
          body { margin: 0; }
        `}
      />

      <Box
        component="main"
        sx={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#052f28",
          px: 2,
          py: 6,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,191,135,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 5,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                bgcolor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconBuildingBank size={18} stroke={1.5} color="#ffffff" />
            </Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              Yaks Capital
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.04em",
            }}
          >
            Investor Portal
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            bgcolor: "#073f35",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            p: { xs: "32px 24px", sm: "40px 36px" },
            position: "relative",
            zIndex: 1,
            boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              color: "#ffffff",
              mb: 0.5,
              letterSpacing: "-0.01em",
            }}
          >
            {mode === "login" ? "Welcome back" : "Create account"}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              mb: 4,
              lineHeight: 1.5,
            }}
          >
            {mode === "login"
              ? "Sign in to access your portfolio"
              : "Request access to the investor portal"}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            {mode === "signup" && (
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <Field
                  label="First name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <Field
                  label="Last name"
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </Box>
            )}

            <Field
              label="Email address"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
            />

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Password
                </Typography>
                {mode === "login" && (
                  <MuiLink
                    href="#"
                    underline="none"
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.35)",
                      "&:hover": { color: "rgba(255,255,255,0.6)" },
                    }}
                  >
                    Forgot?
                  </MuiLink>
                )}
              </Box>
              <Field
                label=""
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                hideLabel
              />
            </Box>

            {mode === "signup" && (
              <Field
                label="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              disableElevation
              startIcon={
                loading ? undefined : mode === "signup" ? undefined : (
                  <IconShieldLock size={16} stroke={1.5} />
                )
              }
              sx={{
                mt: 1,
                bgcolor: "#ffffff",
                color: "#052f28",
                fontWeight: 600,
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                "&.Mui-disabled": {
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.4)",
                },
              }}
            >
              {loading ? (
                <CircularProgress
                  size={18}
                  thickness={2.5}
                  sx={{ color: "#052f28" }}
                />
              ) : mode === "login" ? (
                "Sign in"
              ) : (
                "Request access"
              )}
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              mt: 3,
              textAlign: "center",
            }}
          >
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <Box
                  component="button"
                  onClick={() => setMode("signup")}
                  sx={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#ffffff",
                    p: 0,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    "&:hover": { color: "rgba(255,255,255,0.8)" },
                  }}
                >
                  Request access
                </Box>
              </>
            ) : (
              <>
                Already have access?{" "}
                <Box
                  component="button"
                  onClick={() => setMode("login")}
                  sx={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#ffffff",
                    p: 0,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    "&:hover": { color: "rgba(255,255,255,0.8)" },
                  }}
                >
                  Sign in
                </Box>
              </>
            )}
          </Typography>

          {mode === "signup" && (
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 300,
                color: "rgba(255,255,255,0.25)",
                lineHeight: 1.8,
                mt: 2,
                textAlign: "center",
              }}
            >
              By registering you confirm you are an accredited investor and agree to our{" "}
              <MuiLink href="#" underline="none" sx={{ color: "rgba(255,255,255,0.4)" }}>
                Terms of Use
              </MuiLink>{" "}
              and{" "}
              <MuiLink href="#" underline="none" sx={{ color: "rgba(255,255,255,0.4)" }}>
                Privacy Policy
              </MuiLink>
              .
            </Typography>
          )}
        </Box>

        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 300,
            color: "rgba(255,255,255,0.2)",
            mt: 5,
            letterSpacing: "0.02em",
            position: "relative",
            zIndex: 1,
          }}
        >
          Accredited investors only
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hideLabel?: boolean;
};

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  hideLabel,
}: FieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <Box>
      {!hideLabel && label && (
        <Typography
          component="label"
          htmlFor={name}
          sx={{
            display: "block",
            fontSize: 12,
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            mb: 1,
          }}
        >
          {label}
        </Typography>
      )}
      <Box
        component="input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete={
          type === "password"
            ? name === "confirmPassword"
              ? "new-password"
              : "current-password"
            : name === "email"
            ? "email"
            : "given-name"
        }
        sx={{
          display: "block",
          width: "100%",
          border: focused
            ? "1.5px solid rgba(255,255,255,0.4)"
            : "1.5px solid rgba(255,255,255,0.1)",
          borderRadius: "10px",
          padding: "13px 16px",
          fontSize: 14,
          fontWeight: 400,
          color: "#ffffff",
          bgcolor: "rgba(255,255,255,0.04)",
          outline: "none",
          letterSpacing: "0.01em",
          transition: "border-color 0.2s, background 0.2s",
          "&::placeholder": { color: "rgba(255,255,255,0.2)" },
          "&:focus": {
            bgcolor: "rgba(255,255,255,0.07)",
            outline: "none",
            boxShadow: "none",
            WebkitBoxShadow: "none",
          },
          "&:focus-visible": { outline: "none" },
        }}
      />
    </Box>
  );
}