import { Star } from "lucide-react";

type Testimonial = { name: string; quote: string; caseLabel: string };

const testimonials: Testimonial[] = [
  {
    name: "Gabriela M.",
    quote:
      "A Dra Ana Paula me ajudou no momento mais delicado da minha vida, uma questão com o plano de saúde, e graças a ela consegui dar andamento no meu tratamento.",
    caseLabel: "Caso: Acesso ao tratamento.",
  },
  {
    name: "Arthur S.",
    quote:
      "A Dra. Ana Paula me ajudou de forma incrível na transferência do convênio da Unimed da minha esposa para outra cidade, algo que sozinho eu não teria conseguido resolver. Foi sempre muito atenciosa, clara nas explicações e extremamente eficiente. Recomendo seus serviços!",
    caseLabel: "Caso: Portabilidade de carências.",
  },
  {
    name: "Raphael F.",
    quote:
      "O SUS negou a cirurgia que meu filho precisava urgentemente. Graças à ação rápida do escritório, ele foi operado em uma semana. Salvamos a vida dele!",
    caseLabel: "Caso: Negativa do SUS.",
  },
];

const Testimonials = () => (
  <section id="testimonials" data-gtm-section="depoimentos" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-dark" data-aos="fade-up">
        Depoimentos de Clientes
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={t.name}
            className="bg-white rounded-lg p-6 testimonial-card"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
          >
            <div className="flex items-center mb-4">
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <div className="flex text-yellow-400" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="italic mb-4">"{t.quote}"</p>
            <div className="text-sm text-gray-500">{t.caseLabel}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
