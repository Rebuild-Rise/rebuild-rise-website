import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rebuild & Rise Humanitarian Initiative",
    short_name: "Rebuild & Rise",
    description:
      "A Nigerian humanitarian initiative building durable local systems in health, education, livelihoods, and community capacity.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e5",
    theme_color: "#19351f",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
