import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore our Blog services and solutions at Globify.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
