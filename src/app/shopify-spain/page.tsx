import ShopifySpain from "./ShopifySpainClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Spain | Expert Partners",
  description: "Top-rated Shopify development agency serving Spain. We integrate Bizum, Correos, and ensure GDPR Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-spain",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Spain" 
        description="Expert Shopify store setup, theme development, and local integrations in Spain."
        url="https://www.globify.ae/shopify-spain"
      />
      <ShopifySpain />
    </>
  );
}
