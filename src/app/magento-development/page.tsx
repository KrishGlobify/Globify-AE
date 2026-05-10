import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import MagentoDevelopmentClient from "./MagentoDevelopmentClient";

export const metadata: Metadata = {
  title: "Magento Development",
  description: "Explore our Magento Development services and solutions at Globify.",
  alternates: {
    canonical: "/magento-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Magento Development Services" description="Expert Magento Development services by Globify UAE." url="https://www.globify.ae/magento-development" />
      <MagentoDevelopmentClient />
    </>
  );
}
