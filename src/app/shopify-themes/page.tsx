import type { Metadata } from "next";
import ShopifyThemesClient from "./ShopifyThemesClient";

export const metadata: Metadata = {
  title: "Shopify Themes",
  description: "Explore our Shopify Themes services and solutions at Globify.",
  alternates: {
    canonical: "/shopify-themes",
  },
};

export default function Page() {
  return <ShopifyThemesClient />;
}
