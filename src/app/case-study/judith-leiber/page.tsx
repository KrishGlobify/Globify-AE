import type { Metadata } from "next";
import JudithLeiberClient from "./JudithLeiberClient";

export const metadata: Metadata = {
  title: "Judith Leiber",
  description: "Explore our Judith Leiber services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/judith-leiber",
  },
};

export default function Page() {
  return <JudithLeiberClient />;
}
