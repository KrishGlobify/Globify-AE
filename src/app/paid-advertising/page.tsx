import type { Metadata } from "next";
import PaidAdvertisingClient from "./PaidAdvertisingClient";

export const metadata: Metadata = {
  title: "Paid Advertising",
  description: "Explore our Paid Advertising services and solutions at Globify.",
  alternates: {
    canonical: "/paid-advertising",
  },
};

export default function Page() {
  return <PaidAdvertisingClient />;
}
