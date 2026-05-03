"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
// Footer is imported dynamically to avoid hydration issues if it uses heavy logic
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

const Footer = dynamic(() => import("@/components/Footer"));

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormDataZod = z.infer<typeof formSchema>;

const offices = [
  {
    city: "India",
    address: "Amster House, Technopark Trivandrum, Kerala",
    phone: "+91 9544086877",
  },
  {
    city: "UAE",
    address: "Office 310, Al Qusais Plaza Building, Damascus Street, Qusais, Dubai UAE",
    phone: "+971 547308673",
  },
  {
    city: "Germany",
    address: "101, Eichendorffring, 35394 Gießen",
    phone: "+49 1777072309",
  },
];

const ContactClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataZod>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormDataZod) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      // Append a hidden field to define where the lead came from
      formData.append("_source", "Contact Us Page");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-5">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Exceptional</span>
              </h1>
              <p className="text-hero-foreground/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Reach out to our team of experts for a free consultation on AI, digital commerce, and automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-2xl shadow-black/5"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
                <p className="text-muted">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <input 
                      {...register("name")} 
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                    <input 
                      {...register("email")} 
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                    <input 
                      {...register("phone")} 
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`}
                      placeholder="+1 234 567 8900"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                    <input 
                      {...register("company")} 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">What are you interested in? *</label>
                  <select 
                    {...register("service")} 
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.service ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`}
                  >
                    <option value="">Select a service...</option>
                    <option value="Web/App Development">Web / App Development</option>
                    <option value="E-Commerce/Shopify">E-Commerce / Shopify Design</option>
                    <option value="AI Tracking/Automation">AI & Automation Services</option>
                    <option value="Digital Marketing">Digital Marketing / SEO</option>
                    <option value="ERP Solutions">ERP Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                  <textarea 
                    {...register("message")} 
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`}
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-hero rounded-3xl p-8 border border-hero-foreground/10 text-hero-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <MessageSquare className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-hero-foreground/50 uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:sales@globify.in" className="text-hero-foreground hover:text-primary transition-colors font-medium">sales@globify.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-hero-foreground/50 uppercase tracking-wider mb-1">Call Us / WhatsApp</p>
                      <a href="tel:+919544086877" className="text-hero-foreground hover:text-primary transition-colors font-medium block">+91 954 408 6877</a>
                      <a href="tel:+971547308673" className="text-hero-foreground hover:text-primary transition-colors font-medium block">+971 54 730 8673</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, i) => (
                    <motion.div 
                      key={office.city}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="p-5 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <h4 className="font-bold text-foreground">{office.city}</h4>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mb-2">{office.address}</p>
                      <p className="text-sm font-medium text-foreground">{office.phone}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactClient;
