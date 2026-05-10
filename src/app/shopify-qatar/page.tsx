import ShopifyQatar from "./ShopifyQatarClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Qatar | Expert Partners",
  description: "Top-rated Shopify development agency serving Qatar. We integrate QPAY, Aramex, and ensure VAT Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-qatar",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Qatar" 
        description="Expert Shopify store setup, theme development, and local integrations in Qatar."
        url="https://www.globify.ae/shopify-qatar"
      />
      <ShopifyQatar />
    </>
  );
}
