import ShopifyKsa from "./ShopifyKsaClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in KSA | Expert Partners",
  description: "Top-rated Shopify development agency serving KSA. We integrate Mada, Aramex, and ensure ZATCA Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-ksa",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development KSA" 
        description="Expert Shopify store setup, theme development, and local integrations in KSA."
        url="https://www.globify.ae/shopify-ksa"
      />
      <ShopifyKsa />
    </>
  );
}
