import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our Products services and solutions at Globify.",
  alternates: {
    canonical: "/products",
  },
};

export default function Page() {
  return <ProductsClient />;
}
