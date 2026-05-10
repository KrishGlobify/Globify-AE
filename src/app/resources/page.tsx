import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description: "Explore our Resources services and solutions at Globify.",
  alternates: {
    canonical: "/resources",
  },
};

export default function Page() {
  return <ResourcesClient />;
}
