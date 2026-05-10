import type { Metadata } from "next";
import SupplyChainClient from "./SupplyChainClient";

export const metadata: Metadata = {
  title: "Supply Chain",
  description: "Explore our Supply Chain services and solutions at Globify.",
  alternates: {
    canonical: "/industries/supply-chain",
  },
};

export default function Page() {
  return <SupplyChainClient />;
}
