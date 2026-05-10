import type { Metadata } from "next";
import HireDevelopersClient from "./HireDevelopersClient";

export const metadata: Metadata = {
  title: "Hire Developers",
  description: "Explore our Hire Developers services and solutions at Globify.",
  alternates: {
    canonical: "/hire-developers",
  },
};

export default function Page() {
  return <HireDevelopersClient />;
}
