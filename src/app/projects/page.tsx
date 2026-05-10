import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our Projects services and solutions at Globify.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Page() {
  return <ProjectsClient />;
}
