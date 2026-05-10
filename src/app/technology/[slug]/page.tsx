import type { Metadata } from "next";
import SlugClient from "./[slug]Client";
import ServiceSchema from "@/components/ServiceSchema";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const cleanSlug = params.slug.replace(/-/g, ' ');
  const titleStr = cleanSlug.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
  return {
    title: `${titleStr} Development Services & Enterprise Solutions`,
    description: `Expert ${titleStr} development agency. We build scalable, high-performance solutions using ${titleStr}. Get a free consultation today.`,
    alternates: {
      canonical: `/technology/${params.slug}`,
    },
  };
}

export default function Page({ params }: Props) {
  const cleanSlug = params.slug.replace(/-/g, ' ');
  const titleStr = cleanSlug.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');

  return (
    <>
      <ServiceSchema 
        name={`${titleStr} Development Services`}
        description={`Expert ${titleStr} development and enterprise consulting services.`}
        url={`https://www.globify.ae/technology/${params.slug}`}
      />
      <SlugClient />
    </>
  );
}
