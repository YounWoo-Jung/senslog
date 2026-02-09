import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://your-username.github.io",
  // base: "/senslog",  // Uncomment if deploying to https://<user>.github.io/senslog
  integrations: [sitemap()],
});
