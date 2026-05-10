import ShopifySouthAfrica from "./ShopifySouthAfricaClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in South Africa | Expert Partners",
  description: "Top-rated Shopify development agency serving South Africa. We integrate PayFast, The Courier Guy, and ensure POPIA Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-south-africa",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development South Africa" 
        description="Expert Shopify store setup, theme development, and local integrations in South Africa."
        url="https://www.globify.ae/shopify-south-africa"
      />
      <ShopifySouthAfrica />
    </>
  );
}
