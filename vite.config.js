import { site } from "./src/data/site.js";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "site-metadata",
      transformIndexHtml(html) {
        return html
          .replaceAll("__SITE_BRAND__", site.brandName)
          .replaceAll("__SITE_DESCRIPTION__", site.description);
      },
    },
  ],
});
