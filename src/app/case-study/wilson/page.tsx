import type { Metadata } from "next";
import WilsonClient from "./WilsonClient";

export const metadata: Metadata = {
  title: "Wilson",
  description: "Explore our Wilson services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/wilson",
  },
};

export default function Page() {
  return <WilsonClient />;
}
