import ShopifyOman from "./ShopifyOmanClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Oman | Expert Partners",
  description: "Top-rated Shopify development agency serving Oman. We integrate OmanNet, Aramex, and ensure VAT Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-oman",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Oman" 
        description="Expert Shopify store setup, theme development, and local integrations in Oman."
        url="https://www.globify.ae/shopify-oman"
      />
      <ShopifyOman />
    </>
  );
}
