import ShopifyUae from "./ShopifyUaeClient";
import ServiceSchema from "@/components/ServiceSchema";

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