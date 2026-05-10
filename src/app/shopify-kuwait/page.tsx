import ShopifyKuwait from "./ShopifyKuwaitClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Kuwait | Expert Partners",
  description: "Top-rated Shopify development agency serving Kuwait. We integrate KNET, Aramex, and ensure Local E-commerce Laws. Get a free audit.",
  alternates: {
    canonical: "/shopify-kuwait",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Kuwait" 
        description="Expert Shopify store setup, theme development, and local integrations in Kuwait."
        url="https://www.globify.ae/shopify-kuwait"
      />
      <ShopifyKuwait />
    </>
  );
}
