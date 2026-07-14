export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://snaphire-case-study.vercel.app/sitemap.xml",
  };
}