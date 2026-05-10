import type { Metadata } from "next";
import MedocHmsClient from "./MedocHmsClient";

export const metadata: Metadata = {
  title: "Medoc Hms",
  description: "Explore our Medoc Hms services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/medoc-hms",
  },
};

export default function Page() {
  return <MedocHmsClient />;
}
