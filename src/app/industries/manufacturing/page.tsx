import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "Explore our Manufacturing services and solutions at Globify.",
  alternates: {
    canonical: "/industries/manufacturing",
  },
};

export default function Page() {
  return <ManufacturingClient />;
}
