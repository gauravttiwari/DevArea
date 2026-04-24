"use client";

import { WhatsAppButton } from "./WhatsAppButton";
import { WHATSAPP_FLOWS } from "@/lib/whatsapp";

interface WhatsAppCTASectionProps {
  title?: string;
  description?: string;
  showMultipleOptions?: boolean;
  primaryType?: keyof typeof WHATSAPP_FLOWS;
}

export function WhatsAppCTASection({
  title = "Let's Build Your Perfect Website",
  description = "Chat with us on WhatsApp to discuss your project",
  showMultipleOptions = true,
  primaryType = "default",
}: WhatsAppCTASectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-8">{description}</p>

        {showMultipleOptions ? (
          <div className="flex flex-wrap gap-4 justify-center">
            <WhatsAppButton type="demo" variant="default" size="md" />
            <WhatsAppButton type="businessWebsite" variant="outline" size="md" />
            <WhatsAppButton type="portfolioWebsite" variant="outline" size="md" />
          </div>
        ) : (
          <WhatsAppButton type={primaryType} variant="default" size="lg" />
        )}

        <p className="text-sm text-gray-500 mt-6">
          💚 Quick response • 🎯 Customized solutions • 📱 Direct chat support
        </p>
      </div>
    </section>
  );
}
