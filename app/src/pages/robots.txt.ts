import type { APIRoute } from "astro";

/**
 * Dynamic robots.txt. The sitemap URL is derived from the `site` config,
 * so we only maintain it in one place (astro.config.mjs).
 */
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("site config missing", { status: 500 });
  }

  const sitemap = new URL("sitemap-index.xml", site).href;

  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /danke",
    "Disallow: /api/",
    "",
    `Sitemap: ${sitemap}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
