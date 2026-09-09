import { whatsappLink } from "@/lib/whatsapp";

const Contact = () => (
  <section id="contact" data-gtm-section="contato" className="py-16 bg-beige text-primary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
        Não permita que sua saúde seja prejudicada por abusos dos planos ou omissões do SUS.
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Seu direito à saúde é fundamental e nós estamos aqui para defendê-lo.
      </p>
      <div
        className="flex flex-col sm:flex-row justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a
          href={whatsappLink("Gostaria de garantir meu direito à saúde")}
          className="bg-white text-primary font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Entre em contato agora
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
