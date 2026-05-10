import ShopifyUae from "./ShopifyUaeClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in UAE | Expert Partners",
  description: "Top-rated Shopify development agency serving UAE. We integrate Stripe, Aramex, and ensure VAT Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-uae",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development UAE" 
        description="Expert Shopify store setup, theme development, and local integrations in UAE."
        url="https://www.globify.ae/shopify-uae"
      />
      <ShopifyUae />
    </>
  );
}
