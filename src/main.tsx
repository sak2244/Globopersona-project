import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"; // remove .tsx
import { BrowserRouter } from "react-router-dom"; // ✅ correct package
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme"; // remove .ts

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
