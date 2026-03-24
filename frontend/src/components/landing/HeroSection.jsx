import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1920&q=80&auto=format&fit=crop"
          alt="Chef cooking in professional kitchen"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="bg-primary/20 text-primary-foreground border-primary-foreground/20 font-body text-xs tracking-wide mb-6 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Now Enrolling — Spring 2025
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-card tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover the
            <span className="block mt-1">
              <span className="italic text-primary">Art</span> of Cooking
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-lg text-card/80 font-body leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hands-on classes led by professional chefs. From farm-to-table basics
            to advanced techniques — transform your kitchen skills with us.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="warm"
              size="lg"
              onClick={() => scrollTo("signup")}
              className="font-body"
            >
              Reserve Your Spot
            </Button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollTo("classes")}
              className="font-body"
            >
              Explore Classes
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-14 flex gap-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { value: "2,400+", label: "Students Taught" },
              { value: "96%", label: "Satisfaction Rate" },
              { value: "50+", label: "Recipes Mastered" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-display font-bold text-card">
                  {stat.value}
                </p>
                <p className="text-sm font-body text-card/60 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("features")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-card/50 hover:text-card transition-colors duration-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};
