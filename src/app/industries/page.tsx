import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industries We Serve | Globify",
  description: "Explore the industries Globify serves, including Healthcare, Fintech, Retail, Manufacturing, Supply Chain, and SaaS Startups.",
  alternates: { 
    canonical: "https://globify.ae/industries",
    languages: {
      'en-AE': 'https://globify.ae/industries',
      'en-IN': 'https://globify.in/industries',
      'x-default': 'https://globify.ae/industries'
    }
  },
};

const industries = [
  { title: "Healthcare", href: "/industries/healthcare", desc: "HIPAA-compliant digital health solutions" },
  { title: "Fintech", href: "/industries/fintech", desc: "Secure financial platforms & apps" },
  { title: "Retail & E-Commerce", href: "/industries/retail", desc: "Omnichannel commerce experiences" },
  { title: "Supply Chain", href: "/industries/supply-chain", desc: "Logistics & inventory optimization" },
  { title: "Manufacturing", href: "/industries/manufacturing", desc: "Industry 4.0 & smart factory solutions" },
  { title: "SaaS & Startups", href: "/industries/saas-startups", desc: "MVP development & rapid scaling" },
];

export default function IndustriesHubPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-32 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Industries We Serve</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Globify provides tailored digital solutions, enterprise platforms, and scalable commerce architecture for diverse industry verticals.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link 
              key={ind.title} 
              href={ind.href}
              className="group p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors bg-card hover:bg-card/80"
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{ind.title}</h2>
              <p className="text-muted-foreground">{ind.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
