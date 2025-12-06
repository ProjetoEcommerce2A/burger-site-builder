import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-primary">BURGER HOUSE</h3>
            <p className="text-muted-foreground font-body">
              Hambúrgueres artesanais feitos com amor e ingredientes de primeira qualidade desde 2015.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              HORÁRIO DE FUNCIONAMENTO
            </h4>
            <ul className="space-y-2 text-muted-foreground font-body">
              <li className="flex justify-between">
                <span>Segunda a Quinta</span>
                <span>18:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta e Sábado</span>
                <span>18:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>17:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              LOCALIZAÇÃO
            </h4>
            <address className="not-italic text-muted-foreground font-body space-y-2">
              <p>Rua das Delícias, 1234</p>
              <p>Centro - São Paulo, SP</p>
              <p>CEP: 01234-567</p>
            </address>
            <a 
              href="tel:+5511999999999" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (11) 99999-9999
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-8 rounded-lg overflow-hidden border border-border h-48">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976231082387!2d-46.65617932359832!3d-23.561480578796284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1701879234567!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Burger House"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm font-body">
          <p>© 2024 Burger House. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
