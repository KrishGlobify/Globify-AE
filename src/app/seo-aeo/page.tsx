import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import SeoAeoClient from "./SeoAeoClient";

export const metadata: Metadata = {
  title: "Seo Aeo",
  description: "Explore our Seo Aeo services and solutions at Globify.",
  alternates: {
    canonical: "/seo-aeo",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Seo Aeo Services" description="Expert Seo Aeo services by Globify UAE." url="https://www.globify.ae/seo-aeo" />
      <SeoAeoClient />
    </>
  );
}
