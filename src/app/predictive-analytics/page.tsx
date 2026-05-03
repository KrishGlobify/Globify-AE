import type { Metadata } from "next";
import PredictiveAnalyticsClient from "./PredictiveAnalyticsClient";

export const metadata: Metadata = {
  title: "Predictive Analytics & Machine Learning Solutions | Globify",
  description: "Engineer custom machine learning models to forecast demand, detect fraud, and optimize inventory operations with Globify's Enterprise AI pipeline.",
  alternates: { canonical: "/predictive-analytics", languages: {
      'en-AE': 'https://globify.ae/predictive-analytics',
      'en-IN': 'https://globify.in/predictive-analytics',
      'x-default': 'https://globify.ae/predictive-analytics'
    } },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Predictive Analytics & Machine Learning",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            }
          })
        }}
      />
      <PredictiveAnalyticsClient />
    </>
  );
}
