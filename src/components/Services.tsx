import { Activity, Heart, TrendingUp, XCircle, type LucideIcon } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

type Service = {
  icon: LucideIcon;
  title: string;
  intro: string;
  items: string[];
  closing?: string;
  listSpacing: string;
};

const services: Service[] = [
  {
    icon: XCircle,
    title: "Negativas de Cobertura e do SUS",
    intro:
      "Tanto planos de saúde quanto o Sistema Único de Saúde (SUS) têm a obrigação de garantir o acesso a tratamentos essenciais. No entanto, pacientes podem enfrentar recusas que prejudicam seu direito à saúde:",
    items: [
      "Planos de saúde: negativa de tratamentos médicos indicados pelo especialista, recusa de exames diagnósticos e indisponibilidade de atendimento em urgências ou emergências que não podem ser postergadas;",
      "SUS: recusa de cirurgias, falta de medicamentos essenciais prescritos por médico especialista e com registro aprovado pela ANVISA, bem como restrições a tratamentos de alta complexidade.",
    ],
    closing:
      "Nosso trabalho é assegurar que esses direitos sejam respeitados, buscando a cobertura integral do tratamento necessário.",
    listSpacing: "mb-6",
  },
  {
    icon: TrendingUp,
    title: "Reajustes Abusivos nas Mensalidades",
    intro:
      "O reajuste deve obedecer a critérios legais e atos normativos. Contudo, muitos planos aplicam aumentos indevidos, como:",
    items: [
      "Reajuste por faixa etária desproporcional;",
      "Aumentos sem base atuarial transparente;",
      "Cancelamento unilateral e abusivo de contratos antigos.",
    ],
    closing:
      "Atuamos para suspender judicialmente reajustes abusivos e restabelecer contratos cancelados de forma irregular.",
    listSpacing: "mb-4",
  },
  {
    icon: Activity,
    title: "Medicamentos de Alto Custo",
    intro:
      "O fornecimento de medicamentos, ainda que não estejam no rol da ANS, pode ser exigido judicialmente quando houver indicação médica fundamentada e registro na ANVISA.",
    items: [
      "Medicamentos oncológicos, imunobiológicos e terapias inovadoras;",
      "Tratamentos fora do rol da ANS;",
      "Cobertura negada para terapias de alto custo.",
    ],
    listSpacing: "mb-6",
  },
  {
    icon: Heart,
    title: "Isenção de Imposto de Renda",
    intro:
      "A legislação brasileira assegura a isenção do IR a aposentados, pensionistas e reformados portadores de doenças graves. Entre os principais casos:",
    items: [
      "Portadores de câncer, cardiopatia grave, doença de Parkinson, entre outras previstas em lei;",
      "Direito à restituição dos valores pagos indevidamente desde o diagnóstico, limitado ao período dos últimos cinco anos;",
      "Possibilidade de requerimento administrativo ou judicial.",
    ],
    listSpacing: "mb-6",
  },
];

const Services = () => (
  <section id="services" data-gtm-section="servicos" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-dark" data-aos="fade-up">
        Nossas Áreas de Atuação
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 service-card transition"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="bg-beige w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="mb-4">{service.intro}</p>
              <ul className={`${service.listSpacing} space-y-2`}>
                {service.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.closing && <p className="mb-4 italic">{service.closing}</p>}
              <a
                href={whatsappLink()}
                className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
              >
                Fale Agora
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
