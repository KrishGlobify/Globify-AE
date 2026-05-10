import type { Metadata } from "next";
import AiTransformationFrameworkClient from "./AiTransformationFrameworkClient";

export const metadata: Metadata = {
  title: "Ai Transformation Framework",
  description: "Explore our Ai Transformation Framework services and solutions at Globify.",
  alternates: {
    canonical: "/ai-transformation-framework",
  },
};

export default function Page() {
  return <AiTransformationFrameworkClient />;
}
