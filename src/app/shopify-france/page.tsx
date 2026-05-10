import ShopifyFrance from "./ShopifyFranceClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in France | Expert Partners",
  description: "Top-rated Shopify development agency serving France. We integrate Carte Bancaire, Colissimo, and ensure GDPR Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-france",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development France" 
        description="Expert Shopify store setup, theme development, and local integrations in France."
        url="https://www.globify.ae/shopify-france"
      />
      <ShopifyFrance />
    </>
  );
}
