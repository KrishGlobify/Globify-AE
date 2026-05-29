import ShopifyNetherlands from "./ShopifyNetherlandsClient";
import ServiceSchema from "@/components/ServiceSchema";

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