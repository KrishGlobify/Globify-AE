import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import PerformanceMarketingClient from "./PerformanceMarketingClient";

export const metadata: Metadata = {
  title: "Performance Marketing",
  description: "Explore our Performance Marketing services and solutions at Globify.",
  alternates: {
    canonical: "/performance-marketing",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Performance Marketing Services" description="Expert Performance Marketing services by Globify UAE." url="https://www.globify.ae/performance-marketing" />
      <PerformanceMarketingClient />
    </>
  );
}
