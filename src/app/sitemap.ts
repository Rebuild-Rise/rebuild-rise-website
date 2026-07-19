import type { MetadataRoute } from "next";

const siteUrl = "https://rebuildandrise.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/model`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/programs`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteUrl}/get-involved`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
