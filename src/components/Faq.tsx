import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

type FaqItem = { question: string; answer: string };

const items: FaqItem[] = [
  {
    question: "O plano pode negar o tratamento indicado pelo meu médico?",
    answer:
      "Não, o plano de saúde não pode negar tratamentos indicados por médicos especialistas. É importante ter a comprovação da necessidade do tratamento através de laudos e exames, além da necessidade do medicamento ser autorizado pela ANVISA. Essa é uma prática abusiva que combatemos judicialmente.",
  },
  {
    question: "Como agir diante de um reajuste abusivo?",
    answer:
      "Primeiro, solicite formalmente a justificativa do reajuste ao plano. Se não houver resposta ou a justificativa for insatisfatória, entre em contato conosco. Podemos analisar seu caso e, se necessário, entrar com ação judicial para suspender o aumento indevido e reaver o que você pagou de forma indevida.",
  },
  {
    question: "O que fazer se meu medicamento de alto custo for negado?",
    answer:
      "Mesmo que o medicamento não esteja no rol da ANS, ele pode ser exigido judicialmente quando há indicação médica fundamentada e há registro na ANVISA. Nós podemos ajudar a reunir toda a documentação necessária e entrar com uma ação urgente para garantir seu direito ao tratamento.",
  },
  {
    question: "Qual a diferença entre negativa do plano e negativa do SUS?",
    answer:
      "A negativa do plano de saúde ocorre quando uma operadora se recusa a cobrir procedimentos previstos no contrato. Já a negativa do SUS acontece quando o sistema público de saúde não fornece tratamento que é obrigação constitucional. Em ambos os casos, podemos atuar judicialmente para garantir seu direito.",
  },
  {
    question: "Quanto tempo demora para conseguir uma liminar?",
    answer:
      "Em casos urgentes (como tratamentos de câncer ou emergências), é comum que o Judiciário analise o pedido com celeridade, muitas vezes em poucos dias. Para outros casos, o prazo médio é de 15 dias. Nossa equipe trabalha com agilidade para garantir que você tenha acesso ao tratamento no menor tempo possível.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" data-gtm-section="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark" data-aos="fade-up">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="faq-item pb-4"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <button
                  type="button"
                  className="faq-question w-full text-left flex justify-between items-center font-bold text-lg"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-2 ${isOpen ? "" : "hidden"}`}>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <a
            href={whatsappLink()}
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition font-bold"
          >
            Entre em contato e proteja seus direitos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
