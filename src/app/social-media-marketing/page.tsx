import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import SocialMediaMarketingClient from "./SocialMediaMarketingClient";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: "Explore our Social Media Marketing services and solutions at Globify.",
  alternates: {
    canonical: "/social-media-marketing",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Social Media Marketing Services" description="Expert Social Media Marketing services by Globify UAE." url="https://www.globify.ae/social-media-marketing" />
      <SocialMediaMarketingClient />
    </>
  );
}
