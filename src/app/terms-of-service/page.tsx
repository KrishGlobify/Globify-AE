import type { Metadata } from "next";
import TermsOfServiceClient from "./TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms Of Service",
  description: "Explore our Terms Of Service services and solutions at Globify.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function Page() {
  return <TermsOfServiceClient />;
}
