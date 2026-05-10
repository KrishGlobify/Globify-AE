import type { Metadata } from "next";
import HealthcareClient from "./HealthcareClient";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Explore our Healthcare services and solutions at Globify.",
  alternates: {
    canonical: "/industries/healthcare",
  },
};

export default function Page() {
  return <HealthcareClient />;
}
