import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Menu />
      <div id="localizacao">
        <Footer />
      </div>
    </main>
  );
};

export default Index;
