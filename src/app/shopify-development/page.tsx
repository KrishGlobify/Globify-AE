import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import ShopifyDevelopmentClient from "./ShopifyDevelopmentClient";

export const metadata: Metadata = {
  title: "Shopify Development",
  description: "Explore our Shopify Development services and solutions at Globify.",
  alternates: {
    canonical: "/shopify-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Shopify Development Services" description="Expert Shopify Development services by Globify UAE." url="https://www.globify.ae/shopify-development" />
      <ShopifyDevelopmentClient />
    </>
  );
}
