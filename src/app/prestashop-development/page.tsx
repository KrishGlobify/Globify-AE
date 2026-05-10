import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import PrestashopDevelopmentClient from "./PrestashopDevelopmentClient";

export const metadata: Metadata = {
  title: "Prestashop Development",
  description: "Explore our Prestashop Development services and solutions at Globify.",
  alternates: {
    canonical: "/prestashop-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Prestashop Development Services" description="Expert Prestashop Development services by Globify UAE." url="https://www.globify.ae/prestashop-development" />
      <PrestashopDevelopmentClient />
    </>
  );
}
