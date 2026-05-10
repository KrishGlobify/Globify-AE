import type { Metadata } from "next";
import InstarunwayClient from "./InstarunwayClient";

export const metadata: Metadata = {
  title: "Instarunway",
  description: "Explore our Instarunway services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/instarunway",
  },
};

export default function Page() {
  return <InstarunwayClient />;
}
