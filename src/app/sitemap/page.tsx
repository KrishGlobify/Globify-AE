import type { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Explore our Sitemap services and solutions at Globify.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function Page() {
  return <SitemapClient />;
}
