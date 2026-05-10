import type { Metadata } from "next";
import KatMaconieClient from "./KatMaconieClient";

export const metadata: Metadata = {
  title: "Kat Maconie",
  description: "Explore our Kat Maconie services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/kat-maconie",
  },
};

export default function Page() {
  return <KatMaconieClient />;
}
