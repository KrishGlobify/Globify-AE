"use client";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const { openContactDialog } = useContactDialog();
  return (
    <button
      onClick={() => openContactDialog()}
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
    >
      Schedule a Consultation <ArrowRight className="w-4 h-4" />
    </button>
  );
}
