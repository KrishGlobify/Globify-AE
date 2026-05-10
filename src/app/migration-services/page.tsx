import type { Metadata } from "next";
import MigrationServicesClient from "./MigrationServicesClient";

export const metadata: Metadata = {
  title: "Migration Services",
  description: "Explore our Migration Services services and solutions at Globify.",
  alternates: {
    canonical: "/migration-services",
  },
};

export default function Page() {
  return <MigrationServicesClient />;
}
