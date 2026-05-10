import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from "next";
import AppDevelopmentClient from "./AppDevelopmentClient";

export const metadata: Metadata = {
  title: "App Development",
  description: "Explore our App Development services and solutions at Globify.",
  alternates: {
    canonical: "/app-development",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema name="App Development Services" description="Expert App Development services by Globify UAE." url="https://www.globify.ae/app-development" />
      <AppDevelopmentClient />
    </>
  );
}
