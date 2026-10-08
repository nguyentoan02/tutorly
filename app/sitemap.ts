import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.tutorly.io.vn/", changeFrequency: "monthly", priority: 1 }];
}
