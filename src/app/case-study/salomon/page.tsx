import type { Metadata } from "next";
import SalomonClient from "./SalomonClient";

export const metadata: Metadata = {
  title: "Salomon",
  description: "Explore our Salomon services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/salomon",
  },
};

export default function Page() {
  return <SalomonClient />;
}
