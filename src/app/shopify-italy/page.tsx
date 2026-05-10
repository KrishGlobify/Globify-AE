import ShopifyItaly from "./ShopifyItalyClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Italy | Expert Partners",
  description: "Top-rated Shopify development agency serving Italy. We integrate Satispay, BRT, and ensure GDPR Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-italy",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Italy" 
        description="Expert Shopify store setup, theme development, and local integrations in Italy."
        url="https://www.globify.ae/shopify-italy"
      />
      <ShopifyItaly />
    </>
  );
}
