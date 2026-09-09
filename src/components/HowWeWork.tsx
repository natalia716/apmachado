import { Award, Eye, User, Zap, type LucideIcon } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

type Step = { icon: LucideIcon; title: string; text: string };

const steps: Step[] = [
  {
    icon: Zap,
    title: "Ações com pedido liminar imediato",
    text: "Atuamos rapidamente para garantir o acesso imediato ao tratamento necessário através de medidas judiciais urgentes.",
  },
  {
    icon: User,
    title: "Atendimento personalizado e humanizado",
    text: "Cada caso é único e merece atenção especial. Nossa equipe está sempre disponível para esclarecer dúvidas e acompanhar seu processo.",
  },
  {
    icon: Eye,
    title: "Transparência em cada etapa do processo",
    text: "Mantemos você informado sobre todas as etapas do seu caso, com linguagem clara e acessível.",
  },
  {
    icon: Award,
    title: "Especialistas na área",
    text: "Contamos com profissionais altamente qualificados e experientes, preparados para oferecer soluções rápidas e eficazes para o seu caso.",
  },
];

const HowWeWork = () => (
  <section id="how-we-work" data-gtm-section="como-atuamos" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-dark">Como Atuamos</h2>
        <p className="text-lg">
          Nosso escritório é especializado em Direito da Saúde, com atuação focada em resultados
          rápidos e estratégicos:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="bg-beige p-3 rounded-full mr-4">
                <Icon className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-dark">{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
        <a
          href={whatsappLink("Gostaria de solicitar atendimento imediato")}
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition font-bold"
        >
          Solicitar atendimento imediato
        </a>
      </div>
    </div>
  </section>
);

export default HowWeWork;
