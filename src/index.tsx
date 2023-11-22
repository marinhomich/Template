import "./i18n";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { ToastProvider } from "./components/useToast";
import { routes } from "./routes";
import ThemeConfig from "./theme";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeConfig>
      <ToastProvider>
        <HelmetProvider>
          <RouterProvider router={routes} />
        </HelmetProvider>
      </ToastProvider>
    </ThemeConfig>
  </React.StrictMode>,
);
