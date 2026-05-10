import type { Metadata } from "next";
import SocialMediaBrandClient from "./SocialMediaBrandClient";

export const metadata: Metadata = {
  title: "Social Media Brand",
  description: "Explore our Social Media Brand services and solutions at Globify.",
  alternates: {
    canonical: "/social-media-brand",
  },
};

export default function Page() {
  return <SocialMediaBrandClient />;
}
