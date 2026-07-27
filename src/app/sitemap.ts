import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://zachyeo.com", lastModified, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `https://zachyeo.com/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
