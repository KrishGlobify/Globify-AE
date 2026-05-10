import type { Metadata } from "next";
import RetailClient from "./RetailClient";

export const metadata: Metadata = {
  title: "Retail",
  description: "Explore our Retail services and solutions at Globify.",
  alternates: {
    canonical: "/industries/retail",
  },
};

export default function Page() {
  return <RetailClient />;
}
