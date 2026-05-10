import ShopifyGermany from "./ShopifyGermanyClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in Germany | Expert Partners",
  description: "Top-rated Shopify development agency serving Germany. We integrate SEPA Direct Debit, DHL, and ensure GDPR & DSGVO Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-germany",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development Germany" 
        description="Expert Shopify store setup, theme development, and local integrations in Germany."
        url="https://www.globify.ae/shopify-germany"
      />
      <ShopifyGermany />
    </>
  );
}
