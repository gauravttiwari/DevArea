"use client";

import { generateWhatsAppLink, WHATSAPP_FLOWS } from "@/lib/whatsapp";

interface WhatsAppFloatingButtonProps {
  type?: keyof typeof WHATSAPP_FLOWS;
  position?: "bottom-right" | "bottom-left";
}

export function WhatsAppFloatingButton({
  type = "default",
  position = "bottom-right",
}: WhatsAppFloatingButtonProps) {
  const flow = WHATSAPP_FLOWS[type];
  const whatsappLink = generateWhatsAppLink(flow.message);

  const positionClasses =
    position === "bottom-right"
      ? "bottom-6 right-6"
      : "bottom-6 left-6";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClasses} z-40 group`}
      aria-label="Chat on WhatsApp"
      title={flow.heading}
    >
      {/* Floating Button */}
      <div className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.873 1.235c-1.506.872-2.762 2.04-3.733 3.476C.957 10.318 0 12.94 0 15.716c0 1.348.192 2.678.56 3.964L0 24l4.572-1.346c1.232.667 2.632 1.019 4.1 1.019 5.159 0 9.353-4.194 9.353-9.352 0-2.496-.964-4.84-2.717-6.612-1.754-1.771-4.084-2.748-6.553-2.748zm0 0" />
        </svg>
        <span className="font-semibold text-sm hidden sm:inline">{flow.heading}</span>
      </div>
    </a>
  );
}
