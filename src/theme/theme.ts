import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#073f35",
    },
    background: {
      default: "#052f28",
      paper: "#073f35",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.78)",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Arial, sans-serif",
    h1: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 600,
      lineHeight: 1.12,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-playfair), Georgia, serif",
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 999,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "14px 32px",
          boxShadow: "none",
        },
      },
    },
  },
});

