import type { Metadata } from "next";
import EkasysErpClient from "./EkasysErpClient";

export const metadata: Metadata = {
  title: "Ekasys Erp",
  description: "Explore our Ekasys Erp services and solutions at Globify.",
  alternates: {
    canonical: "/case-study/ekasys-erp",
  },
};

export default function Page() {
  return <EkasysErpClient />;
}
