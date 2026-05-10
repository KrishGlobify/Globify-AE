import type { Metadata } from "next";
import FintechClient from "./FintechClient";

export const metadata: Metadata = {
  title: "Fintech",
  description: "Explore our Fintech services and solutions at Globify.",
  alternates: {
    canonical: "/industries/fintech",
  },
};

export default function Page() {
  return <FintechClient />;
}
