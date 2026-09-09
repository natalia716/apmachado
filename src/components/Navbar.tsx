import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { asset } from "@/lib/asset";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#how-we-work", label: "Como Atuamos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav data-gtm-section="menu" className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img className="logo" alt="Logo Dra. Ana Paula Machado" src={asset("img/logo.svg")} />

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-700 hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappLink("Gostaria de falar com um advogado especialista")}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
        >
          <Phone className="w-4 h-4" />
          Fale Agora
        </a>

        <button
          type="button"
          className="md:hidden focus:outline-none"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white w-full px-4 py-2 ${open ? "" : "hidden"}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-2 text-gray-700 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="block py-2 text-primary font-medium"
          onClick={() => setOpen(false)}
        >
          Fale Conosco
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
