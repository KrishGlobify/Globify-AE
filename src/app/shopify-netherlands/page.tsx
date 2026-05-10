import ShopifyNetherlands from "./ShopifyNetherlandsClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Netherlands | Expert Partners",
  description: "Top-rated Shopify development agency serving Netherlands. We integrate iDEAL, PostNL, and ensure GDPR Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-netherlands",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Netherlands" 
        description="Expert Shopify store setup, theme development, and local integrations in Netherlands."
        url="https://www.globify.ae/shopify-netherlands"
      />
      <ShopifyNetherlands />
    </>
  );
}
