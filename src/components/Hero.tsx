import { whatsappLink } from "@/lib/whatsapp";

const Hero = () => (
  <section id="hero" data-gtm-section="hero" className="hero-bg text-white pt-40 pb-10 md:py-32">
    <div className="container mx-auto px-4">
      <div className="max-w-md" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Seus direitos em saúde não podem esperar.
        </h1>
        <p className="text-xl mb-8">
          Negativas de cobertura, reajustes abusivos e medicamentos de alto custo exigem respostas
          rápidas e eficazes. Somos especialistas em Direito da Saúde e atuamos de forma imediata
          para garantir os seus direitos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={whatsappLink("Gostaria de falar com um advogado especialista")}
            className="bg-white text-primary font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition text-center"
          >
            Fale agora com um especialista
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
