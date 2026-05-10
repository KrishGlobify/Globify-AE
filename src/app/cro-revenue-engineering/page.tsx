import type { Metadata } from "next";
import CroRevenueEngineeringClient from "./CroRevenueEngineeringClient";

export const metadata: Metadata = {
  title: "Cro Revenue Engineering",
  description: "Explore our Cro Revenue Engineering services and solutions at Globify.",
  alternates: {
    canonical: "/cro-revenue-engineering",
  },
};

export default function Page() {
  return <CroRevenueEngineeringClient />;
}
