import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import ShopifyAppDevelopmentClient from "./ShopifyAppDevelopmentClient";

export const metadata: Metadata = {
  title: "Shopify App Development",
  description: "Explore our Shopify App Development services and solutions at Globify.",
  alternates: {
    canonical: "/shopify-app-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Shopify App Development Services" description="Expert Shopify App Development services by Globify UAE." url="https://www.globify.ae/shopify-app-development" />
      <ShopifyAppDevelopmentClient />
    </>
  );
}
