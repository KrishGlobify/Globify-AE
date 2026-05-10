import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Explore our Privacy Policy services and solutions at Globify.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
