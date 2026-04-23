// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://kids-bonn.de",

  // Hybrid: static by default, only routes that opt into SSR (via `export const prerender = false`) run serverside.
  output: "static",

  adapter: vercel({
    // Force our API route to run in Frankfurt (EU). Affects only SSR routes.
    // Static assets stay on the global edge.
    webAnalytics: { enabled: false },
  }),
});
