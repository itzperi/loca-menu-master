import heroImage from "@/assets/hero-pizza.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
          La Pizza Loca
        </h1>
        <p className="text-xl md:text-3xl text-accent font-display mb-8 animate-fade-in">
          Authentic Italian Pies, Crafted with Passion
        </p>
        <a href="#menu">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            Explore Menu
          </button>
        </a>
      </div>
    </section>
  );
};
