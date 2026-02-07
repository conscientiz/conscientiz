import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logoconscie.png";

const FooterSection = () => {
  return (
    <footer id="contato" className="py-16 bg-navy-deep border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="ConscientiZ" className="h-10" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Segurança Digital baseada em consciência humana. Transformamos
              comportamento para proteger organizações.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-primary">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#cenario", label: "O Cenário" },
                { href: "#solucao", label: "Solução Gophish" },
                { href: "#valores", label: "Nossos Valores" },
                { href: "#servicos", label: "Serviços" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-primary">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:conscientizsequrancadigital@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                conscientizsequrancadigital@gmail.com
              </a>
              <a
                href="https://wa.me/551151943047"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (11) 5194-3047
              </a>
            </div>

            {/* Compliance badges */}
            <div className="flex gap-3 mt-6">
              <div className="px-3 py-1.5 rounded-md border border-border/30 text-xs text-muted-foreground font-medium">
                LGPD
              </div>
              <div className="px-3 py-1.5 rounded-md border border-border/30 text-xs text-muted-foreground font-medium">
                ISO 27001
              </div>
              <div className="px-3 py-1.5 rounded-md border border-border/30 text-xs text-muted-foreground font-medium">
                NIST
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ConscientiZ Segurança Digital. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
