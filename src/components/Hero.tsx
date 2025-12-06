import heroBurger from "@/assets/hero-burger.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBurger} 
          alt="Delicioso hambúrguer artesanal" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-body uppercase tracking-wider mb-6">
            Hambúrgueres Artesanais
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-foreground leading-none mb-6">
            O MELHOR
            <span className="block text-gradient">BURGER</span>
            DA CIDADE
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-body mb-8 max-w-lg">
            Ingredientes selecionados, carnes de primeira qualidade e receitas únicas que vão conquistar seu paladar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#cardapio">Ver Cardápio</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#localizacao">Como Chegar</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
