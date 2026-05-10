import type { Metadata } from "next";
import MoherClient from "./MoherClient";

export const metadata: Metadata = {
  title: "Moher",
  description: "Explore our Moher services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/moher",
  },
};

export default function Page() {
  return <MoherClient />;
}
