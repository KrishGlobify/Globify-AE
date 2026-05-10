import type { Metadata } from "next";
import DigitalTransformationClient from "./DigitalTransformationClient";

export const metadata: Metadata = {
  title: "Digital Transformation",
  description: "Explore our Digital Transformation services and solutions at Globify.",
  alternates: {
    canonical: "/digital-transformation",
  },
};

export default function Page() {
  return <DigitalTransformationClient />;
}
