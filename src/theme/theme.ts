// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4f46e5", // blue-600
      light: "#e2e0fa",
    },
    secondary: {
      main: "#9333ea", // purple-600
      light: "#eeddfe",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    success: {
      main: "#16A34A",
      light: "#d1fae5",
    },
    info: {
      main: "#2563eb",
      light: "#dfeafd",
    },
    error: {
      main: "#ea580c",
      light: "#fef1e7",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "2.25rem", fontWeight: 700 },
    h2: { fontSize: "1.875rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    body1: { fontSize: "0.95rem" },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 16px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 8px 24px rgba(15, 23, 42, 0.06)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#0f172a",
          boxShadow: "none",
          borderBottom: "1px solid #e5e7eb",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #e5e7eb",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 16,
        },
      },
    },
  },
});

export default theme;
