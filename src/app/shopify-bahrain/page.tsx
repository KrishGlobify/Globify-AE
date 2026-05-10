import ShopifyBahrain from "./ShopifyBahrainClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Bahrain | Expert Partners",
  description: "Top-rated Shopify development agency serving Bahrain. We integrate BenefitPay, Aramex, and ensure VAT Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-bahrain",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Bahrain" 
        description="Expert Shopify store setup, theme development, and local integrations in Bahrain."
        url="https://www.globify.ae/shopify-bahrain"
      />
      <ShopifyBahrain />
    </>
  );
}
