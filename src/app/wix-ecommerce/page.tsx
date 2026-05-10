import type { Metadata } from "next";
import WixEcommerceClient from "./WixEcommerceClient";

export const metadata: Metadata = {
  title: "Wix Ecommerce",
  description: "Explore our Wix Ecommerce services and solutions at Globify.",
  alternates: {
    canonical: "/wix-ecommerce",
  },
};

export default function Page() {
  return <WixEcommerceClient />;
}
