import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import SeoContentStrategyClient from "./SeoContentStrategyClient";

export const metadata: Metadata = {
  title: "Seo Content Strategy",
  description: "Explore our Seo Content Strategy services and solutions at Globify.",
  alternates: {
    canonical: "/seo-content-strategy",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Seo Content Strategy Services" description="Expert Seo Content Strategy services by Globify UAE." url="https://www.globify.ae/seo-content-strategy" />
      <SeoContentStrategyClient />
    </>
  );
}
