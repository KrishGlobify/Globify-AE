import type { Metadata } from "next";
import ShopifyPlusClient from "./ShopifyPlusClient";

export const metadata: Metadata = {
  title: "Shopify Plus",
  description: "Explore our Shopify Plus services and solutions at Globify.",
  alternates: {
    canonical: "/shopify-plus",
  },
};

export default function Page() {
  return <ShopifyPlusClient />;
}
