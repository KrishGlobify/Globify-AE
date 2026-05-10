import type { Metadata } from "next";
import ProcessAutomationClient from "./ProcessAutomationClient";

export const metadata: Metadata = {
  title: "Process Automation",
  description: "Explore our Process Automation services and solutions at Globify.",
  alternates: {
    canonical: "/process-automation",
  },
};

export default function Page() {
  return <ProcessAutomationClient />;
}
