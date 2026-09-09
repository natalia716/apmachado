import { Instagram, Mail, MapPin, MessageCircle, Phone, Scale } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { asset } from "@/lib/asset";

const Footer = () => (
  <footer data-gtm-section="rodape" className="bg-primary text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Scale className="text-primary mr-2" />
            <img
              className="logo-footer"
              alt="Logo Dra. Ana Paula Machado"
              src={asset("img/logo-footer.svg")}
            />
          </div>
          <p className="mb-4">
            Especialistas em Direito da Saúde, atuando para garantir seus direitos em casos de
            negativas de cobertura, reajustes abusivos e medicamentos de alto custo.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/apmachado.adv"
              className="hover:text-primary transition"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a href={whatsappLink()} className="hover:text-primary transition" aria-label="WhatsApp">
              <MessageCircle />
            </a>
            <a
              href="https://share.google/OrFKGKN4n7AvFfTHR"
              className="hover:text-primary transition"
              aria-label="Localização"
            >
              <MapPin />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="mr-2 mt-1" />
              <span>(19) 99940-1145</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 mt-1" />
              <span>apmachado.adv@outlook.com</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2 mt-1" />
              <span>Araras/SP</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Horário de Atendimento</h3>
          <p className="mb-2">Segunda a Sexta: 8h30 às 18h</p>
        </div>
      </div>

      <div className="border-t border-red-900 mt-8 pt-8 text-center text-sm">
        <p>&copy; 2025 Dra. Ana Paula Machado. Todos os direitos reservados.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-primary transition">
            Política de Privacidade
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-primary transition">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
