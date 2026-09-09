/** Numero do WhatsApp do escritorio (DDI + DDD + numero). */
export const WHATSAPP_NUMBER = "5519999180404";

/** Monta um link wa.me com a mensagem pre-preenchida. */
export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
