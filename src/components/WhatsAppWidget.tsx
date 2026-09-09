import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const WhatsAppWidget = () => {
  const [pulse, setPulse] = useState(true);

  return (
    <div data-gtm-section="widget-flutuante" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink("Gostaria de garantir meu direito à saúde")}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-widget bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center ${pulse ? "pulse-animation" : ""}`}
        aria-label="Contato via WhatsApp"
        onClick={() => setPulse(false)}
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
