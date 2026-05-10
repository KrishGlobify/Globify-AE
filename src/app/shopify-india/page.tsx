import ShopifyIndia from "./ShopifyIndiaClient";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shopify Development Agency in India | Expert Partners",
  description: "Top-rated Shopify development agency serving India. We integrate Razorpay, Delhivery, and ensure GST Compliant. Get a free audit.",
  alternates: {
    canonical: "/shopify-india",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema 
        name="Shopify Development India" 
        description="Expert Shopify store setup, theme development, and local integrations in India."
        url="https://www.globify.ae/shopify-india"
      />
      <ShopifyIndia />
    </>
  );
}
