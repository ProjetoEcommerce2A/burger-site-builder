import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  badge?: string;
  featured?: boolean;
}

const MenuItem = ({ name, description, price, badge, featured }: MenuItemProps) => {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-lg border transition-all duration-300 hover:border-primary/50",
        featured 
          ? "bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.15)]" 
          : "bg-card border-border hover:bg-secondary/50"
      )}
    >
      {badge && (
        <span className="absolute -top-3 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase rounded-full">
          {badge}
        </span>
      )}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className={cn(
            "font-display text-xl tracking-wide mb-2 transition-colors",
            featured ? "text-primary" : "text-foreground group-hover:text-primary"
          )}>
            {name}
          </h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            {description}
          </p>
        </div>
        <span className={cn(
          "font-display text-2xl whitespace-nowrap",
          featured ? "text-primary" : "text-foreground"
        )}>
          {price}
        </span>
      </div>
    </div>
  );
};

const menuItems = {
  burgers: [
    {
      name: "CLASSIC BURGER",
      description: "Hambúrguer 180g, queijo cheddar, alface americana, tomate, cebola roxa e nosso molho especial",
      price: "R$ 32",
    },
    {
      name: "BACON LOVER",
      description: "Hambúrguer 180g, queijo cheddar, bacon crocante em tiras, cebola caramelizada e molho barbecue",
      price: "R$ 38",
      badge: "Popular",
      featured: true,
    },
    {
      name: "DOUBLE SMASH",
      description: "Dois hambúrgueres smash 90g, queijo americano derretido, picles e molho especial da casa",
      price: "R$ 42",
    },
    {
      name: "VEGGIE DELÍCIA",
      description: "Hambúrguer de grão de bico, queijo muçarela, rúcula, tomate seco e maionese de ervas",
      price: "R$ 30",
    },
    {
      name: "BBQ SUPREME",
      description: "Hambúrguer 200g, queijo provolone, onion rings, bacon e molho barbecue artesanal",
      price: "R$ 45",
      badge: "Chef's Choice",
      featured: true,
    },
    {
      name: "TEXAS RANCH",
      description: "Hambúrguer 180g, queijo pepper jack, jalapeños, pimentão e molho ranch",
      price: "R$ 40",
    },
  ],
  sides: [
    {
      name: "BATATA RÚSTICA",
      description: "Batatas cortadas em gomos, temperadas com ervas finas e sal grosso",
      price: "R$ 18",
    },
    {
      name: "ONION RINGS",
      description: "Anéis de cebola empanados, crocantes por fora e macios por dentro",
      price: "R$ 20",
    },
    {
      name: "NUGGETS ARTESANAIS",
      description: "6 unidades de frango empanado com molho especial",
      price: "R$ 22",
    },
  ],
  drinks: [
    {
      name: "MILKSHAKE",
      description: "Chocolate, morango, baunilha ou ovomaltine - 400ml",
      price: "R$ 18",
    },
    {
      name: "REFRIGERANTE",
      description: "Coca-Cola, Guaraná, Sprite ou Fanta - lata 350ml",
      price: "R$ 8",
    },
    {
      name: "SUCO NATURAL",
      description: "Laranja, limão ou maracujá - 300ml",
      price: "R$ 12",
    },
  ],
};

const Menu = () => {
  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-body uppercase tracking-wider mb-4">
            Nosso Cardápio
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            FEITO COM <span className="text-gradient">PAIXÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
            Cada hambúrguer é preparado na hora, com ingredientes frescos e carnes de qualidade premium.
          </p>
        </div>

        {/* Burgers Section */}
        <div className="mb-16">
          <h3 className="font-display text-3xl text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            HAMBÚRGUERES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuItems.burgers.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* Sides Section */}
        <div className="mb-16">
          <h3 className="font-display text-3xl text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            ACOMPANHAMENTOS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menuItems.sides.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* Drinks Section */}
        <div>
          <h3 className="font-display text-3xl text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            BEBIDAS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menuItems.drinks.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
