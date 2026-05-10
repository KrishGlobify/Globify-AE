import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import BigcommerceDevelopmentClient from "./BigcommerceDevelopmentClient";

export const metadata: Metadata = {
  title: "Bigcommerce Development",
  description: "Explore our Bigcommerce Development services and solutions at Globify.",
  alternates: {
    canonical: "/bigcommerce-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="Bigcommerce Development Services" description="Expert Bigcommerce Development services by Globify UAE." url="https://www.globify.ae/bigcommerce-development" />
      <BigcommerceDevelopmentClient />
    </>
  );
}
