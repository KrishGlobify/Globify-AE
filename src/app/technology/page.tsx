import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technology Stack | Globify",
  description: "Explore the technologies Globify uses, including Shopify, React, Next.js, AI, and enterprise ERP solutions.",
  alternates: { 
    canonical: "https://globify.ae/technology",
    languages: {
      'en-AE': 'https://globify.ae/technology',
      'en-IN': 'https://globify.in/technology',
      'x-default': 'https://globify.ae/technology'
    }
  },
};

const technologies = [
  { title: "Shopify Development", href: "/shopify-development", desc: "Custom Shopify stores & themes" },
  { title: "BigCommerce", href: "/bigcommerce-development", desc: "Enterprise SaaS commerce" },
  { title: "Magento", href: "/magento-development", desc: "Open-source enterprise commerce" },
  { title: "WooCommerce", href: "/woocommerce-development", desc: "WordPress-powered commerce" },
  { title: "Wix", href: "/wix-ecommerce", desc: "Quick-launch online stores" },
  { title: "PrestaShop", href: "/prestashop-development", desc: "Open-source commerce for Europe" },
  { title: "Shopware", href: "/shopware-development", desc: "German-engineered commerce" },
  { title: "Web Development", href: "/web-development", desc: "Next.js, React, Node.js, and more" },
  { title: "App Development", href: "/app-development", desc: "React Native & iOS/Android" },
];

export default function TechnologyHubPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-32 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Technology Stack</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We leverage the best-in-class technologies to build scalable, high-performance digital solutions.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <Link 
              key={tech.title} 
              href={tech.href}
              className="group p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors bg-card hover:bg-card/80"
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{tech.title}</h2>
              <p className="text-muted-foreground">{tech.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
