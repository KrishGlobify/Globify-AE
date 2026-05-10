import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import WoocommerceDevelopmentClient from "./WoocommerceDevelopmentClient";

export const metadata: Metadata = {
  title: "Woocommerce Development",
  description: "Explore our Woocommerce Development services and solutions at Globify.",
  alternates: {
    canonical: "/woocommerce-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Woocommerce Development Services" description="Expert Woocommerce Development services by Globify UAE." url="https://www.globify.ae/woocommerce-development" />
      <WoocommerceDevelopmentClient />
    </>
  );
}
