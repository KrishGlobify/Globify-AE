import type { Metadata } from "next";
import SaasStartupsClient from "./SaasStartupsClient";

export const metadata: Metadata = {
  title: "Saas Startups",
  description: "Explore our Saas Startups services and solutions at Globify.",
  alternates: {
    canonical: "/industries/saas-startups",
  },
};

export default function Page() {
  return <SaasStartupsClient />;
}
