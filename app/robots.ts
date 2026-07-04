import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: "https://varandacl.com.br/sitemap.xml",
    host: "https://varandacl.com.br",
  };
}
