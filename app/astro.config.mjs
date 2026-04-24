// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kids-bonn.de",

  // Hybrid: static by default, only routes that opt into SSR (via `export const prerender = false`) run server-side.
  output: "static",

  adapter: vercel({
    webAnalytics: { enabled: false },
  }),

  integrations: [
    sitemap({
      // /danke is a thank-you page and has `noindex` — exclude from sitemap too.
      filter: (page) => !page.endsWith("/danke/") && !page.endsWith("/danke"),
    }),
  ],
});
