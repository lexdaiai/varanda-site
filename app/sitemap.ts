import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://varandacl.com.br";
  const now = new Date("2026-06-18");
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#cardapio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/#sopas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/#club`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contato`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
