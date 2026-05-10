import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import ShopwareDevelopmentClient from "./ShopwareDevelopmentClient";

export const metadata: Metadata = {
  title: "Shopware Development",
  description: "Explore our Shopware Development services and solutions at Globify.",
  alternates: {
    canonical: "/shopware-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Shopware Development Services" description="Expert Shopware Development services by Globify UAE." url="https://www.globify.ae/shopware-development" />
      <ShopwareDevelopmentClient />
    </>
  );
}
